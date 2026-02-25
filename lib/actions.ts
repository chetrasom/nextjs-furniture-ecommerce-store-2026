'use server';

import db from "@/utils/db";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
// import { notFound } from "next/navigation"
// Schemas
import { productSchema } from "@/utils/schemas";
import { validateWithZodSchema } from "@/utils/schemas";

// ⭐⭐⭐ # Helper Functions
const renderError = (error: unknown): { message: string } => {
    console.log(error);
    return {
        message: error instanceof Error ? error.message : 'An error occurred',
    };
};

const getAuthUser = async () => {
    const user = await currentUser();

    if (!user) {
        throw new Error('You must be logged in to access this route');
    }

    return user;
};

// # ⭐⭐⭐ Homepage
export const fetchAllProducts = async ({
    search = ''
}: {
    search: string;
}) => {
    return db.product.findMany({
        where: {
            OR: [
                { name: { contains: search, mode: 'insensitive' } },
                { company: { contains: search, mode: 'insensitive' } },
            ],
        },
        orderBy: {
            createdAt: 'desc',
        },
    });
};

export const fetchFeaturedProducts = async () => {
    const products = await db.product.findMany({
        where: {
            featured: true,
        },
    });
    return products;
};

export const fetchSingleProduct = async (productId: string) => {
    const product = await db.product.findUnique({
        where: {
            id: productId
        },
    });

    if (!product) {
        redirect('/products')
        // notFound() // work to see 404 not found.
    }

    return product;
};

// # ⭐⭐⭐ Admin

// ⚠️ ===> CreateProductAction Version-01 - First Approach
    // export const createProductAction = async (
    //     prevState: unknown,
    //     formData: FormData
    // ): Promise<{ message: string }> => {
    //     const user = await getAuthUser();

    //     try {
    //         const name = formData.get('name') as string;
    //         const company = formData.get('company') as string;
    //         const price = Number(formData.get('price') as string);
    //         // Temp
    //         const image = formData.get('image') as string;
    //         const description = formData.get('description') as string;
    //         const featured = Boolean(formData.get('featured') as string);

    //         await db.product.create({
    //             data: {
    //                 name,
    //                 company,
    //                 price,
    //                 image: '/images/sofa.png',
    //                 description,
    //                 featured,
    //                 clerkId: user?.id,
    //             },
    //         });

    //         return { message: 'Product Created' }
    //     } catch (error) {
    //         return renderError(error);
    //     }
    // };

// ✅===> CreateProductAction Version-02 - Zod Validation.
export const createProductAction = async (
    prevState: unknown,
    formData: FormData
): Promise<{ message: string }> => {
    const user = await getAuthUser();

    try {
        // # Convert FormData to plain object.
        const rawData = Object.fromEntries(formData);

        // ### Validation first approach.
            // # Validate safely: checks whether rawData matches Zod schema,
            // const validatedFields = productSchema.safeParse(rawData);

            // # Handle validation errors (message)
            // if (!validatedFields.success) {
            //     // combine all error messages into a single string
            //     const errorMessage = validatedFields.error.issues
            //     .map((issue) => issue.message)
            //     .join(", ");

            //     return { message: errorMessage };
            // }

        // ### Validation Clean Version
        const validatedFields = validateWithZodSchema(productSchema, rawData);

        // # Insert data into database
        await db.product.create({
            data: {
                ...validatedFields, // The ... spread operator copies all these fields into the data object.
                image: '/images/sofa.png',
                clerkId: user?.id,
            },
        });

        return { message: 'Product created successfully' }
    } catch (error) {
        return renderError(error);
    }
};