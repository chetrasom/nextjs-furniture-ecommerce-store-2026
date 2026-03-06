'use server';

import db from "@/utils/db";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { Cart } from "@/app/generated/prisma/client";

// Schemas
import { productSchema, imageSchema } from "@/utils/schemas";
import { validateWithZodSchema } from "@/utils/schemas";
import { reviewSchema } from "@/utils/schemas";

// Supabase function
import { uploadImage, deleteImage } from "@/utils/supabase";

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

const getAdminUser = async () => {
    const user = await currentUser();

    if (user?.id !== process.env.NEXT_PUBLIC_ADMIN_USER_ID) {
        redirect("/")
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

// ⚠️ CreateProductAction Version-01 - First Approach
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

// ⚠️  CreateProductAction Version-02 - Zod Validation.
    // export const createProductAction = async (
    //     prevState: unknown,
    //     formData: FormData
    // ): Promise<{ message: string }> => {
    //     const user = await getAuthUser();

    //     try {
    //         // # Convert FormData to plain object.
    //         const rawData = Object.fromEntries(formData);

    //         // ### Validation first approach.
    //             // # Validate safely: checks whether rawData matches Zod schema,
    //             // const validatedFields = productSchema.safeParse(rawData);

    //             // # Handle validation errors (message)
    //             // if (!validatedFields.success) {
    //             //     // combine all error messages into a single string
    //             //     const errorMessage = validatedFields.error.issues
    //             //     .map((issue) => issue.message)
    //             //     .join(", ");

    //             //     return { message: errorMessage };
    //             // }

    //         // ### Validation Clean Version
    //         const validatedFields = validateWithZodSchema(productSchema, rawData);

    //         // # Insert data into database
    //         await db.product.create({
    //             data: {
    //                 ...validatedFields, // The ... spread operator copies all these fields into the data object.
    //                 image: '/images/sofa.png',
    //                 clerkId: user?.id,
    //             },
    //         });

    //         return { message: 'Product created successfully' }
    //     } catch (error) {
    //         return renderError(error);
    //     }
    // };

// ✅ CreateProductAction Version-03 - Image Upload
export const createProductAction = async (
    prevState: unknown,
    formData: FormData
): Promise<{ message: string }> => {
    const user = await getAuthUser();

    try {
        const rawData = Object.fromEntries(formData);
        const file = formData.get('image') as File;

        const validatedFields = validateWithZodSchema(productSchema, rawData);
        const validatedFile = validateWithZodSchema(imageSchema, { image: file });
        const fullPathImage = await uploadImage(validatedFile.image);

        // # Insert data into database
        await db.product.create({
            data: {
                ...validatedFields,
                image: fullPathImage,
                clerkId: user?.id,
            },
        });

    } catch (error) {
        return renderError(error);
    }

    redirect('/admin/products');
};

// ⭐ Fetch Admin Products
export const fetchAdminProducts = async () => {
    await getAdminUser();
    
    const products = await db.product.findMany({
        orderBy: {
            createdAt: 'desc',
        },
    });

    return products;
};

// ⭐ Delete Admin Products
export const deleteProductAction = async (prevState: { productId: string }) => {
    const { productId } = prevState;
    await getAdminUser();

    try {
        const product = await db.product.delete({
            where: {
                id: productId,
            },
        });

        await deleteImage(product.image)

        revalidatePath('/admin/products');

        return { message: 'Product Removed' };
    } catch (error) {
        return renderError(error);
    }
};

// ⭐ Update Admin Products - #FetchAdminProductDetails, #UpdateProductAction and #updateProductImageAction

export const fetchAdminProductDetails = async (productId: string) => {
    await getAdminUser();

    const product = await db.product.findUnique({
        where: {
            id: productId,
        },
    });

    if (!product) redirect("/admin/products");

    return product;
};

export const updateProductAction = async (prevState: unknown, formData: FormData) => {
    await getAdminUser();

    try {
        const productId = formData.get('id') as string;
        const rawData = Object.fromEntries(formData);

        const validatedFields = validateWithZodSchema(productSchema, rawData);

        await db.product.update({
            where: {
                id: productId
            },
            data: {
                ...validatedFields
            },
        });

        revalidatePath(`/admin/products/${productId}/edit`);

        return { message: 'Product updated successfully' };
    } catch (error) {
        return renderError(error);
    }
};

export const updateProductImageAction = async (prevState: unknown, formData: FormData) => {
    await getAuthUser();

    try {
        const image = formData.get('image') as File;
        const productId = formData.get('id') as string;
        const oldImageUrl = formData.get('url') as string;

        const validatedFile = validateWithZodSchema(imageSchema, { image });

        const fullPath = await uploadImage(validatedFile.image);
        await deleteImage(oldImageUrl);
        await db.product.update({
            where: {
                id: productId,
            },
            data: {
                image: fullPath,
            },
        });

        revalidatePath(`/admin/products/${productId}/edit`);
        
        return { message: 'Product Image updated successfully' };
    } catch (error) {
        return renderError(error);
    }
};

// # ⭐⭐⭐ FAVORITES

// ⭐ Favorite
export const fetchFavoriteId = async ({ productId }: { productId: string }) => {
    const user = await getAuthUser();
    
    const favorite = await db.favorite.findFirst({
        where: {
            productId,
            clerkId: user.id,
        },
        select: {
            id: true,
        },
    });

    return favorite?.id || null;
};

export const toggleFavoriteAction = async (prevState: {
    productId: string;
    favoriteId: string | null;
    pathname: string;
}) => {
    const user = await getAuthUser();

    const { productId, favoriteId, pathname } = prevState;

    try {
        if (favoriteId) {
            await db.favorite.delete({
                where: {
                    id: favoriteId
                },
            });
        } else {
            await db.favorite.create({
                data: {
                    productId,
                    clerkId: user.id,
                },
            });
        }

        revalidatePath(pathname);

        return { message: favoriteId ? 'Removed from Faves' : 'Added to Faves' };
    } catch (error) {
        return renderError(error);
    }
};

export const fetchUserFavorites = async () => {
    const user = await getAuthUser();

    const favorites = await db.favorite.findMany({
        where: {
            clerkId: user.id,
        },
        include: {
            product: true,
        },
    });

    return favorites;
};

// # ⭐⭐⭐ REVIEWS

// ✅Implement createReviewAction to create a new review in the database
export const createReviewAction = async (
    prevState: unknown,
    formData: FormData
) => {
    const user = await getAuthUser();

    try {
        const rawData = Object.fromEntries(formData);

        const validatedFields = validateWithZodSchema(reviewSchema, rawData);
        console.log(validatedFields)

        await db.review.create({
            data: {
                ...validatedFields,
                clerkId: user.id,
            },
        });
        
        // single detail path
        revalidatePath(`/products/${validatedFields.productId}`);

        return { message: 'Review submitted successfully' };
    } catch (error) {
        return renderError(error);
    }
};

// ✅ implement fetchProductReviews to get all reviews for a product
export const fetchProductReviews = async (productId: string) => {
    const reviews = await db.review.findMany({
        where: {
            productId
        },
        orderBy: {
            createdAt: 'desc'
        },
    });

    return reviews;
};

// ✅ implement fetchProductRating to calculate average rating for a product
export const fetchProductRating = async (productId: string) => {
    const result = await db.review.groupBy({
        by: ['productId'],
        _avg: {
            rating: true,
        },
        _count: {
            rating: true,
        },
        where: {
            productId,
        },
    });

    // empty array if no reviews
    return {
        rating: Number(result[0]?._avg.rating?.toFixed(1)) ?? 0,
        count: result[0]?._count.rating ?? 0,
    };
};

// ✅ implement fetchProductReviewsByUser to get reviews by the logged-in user
export const fetchProductReviewsByUser = async () => {
    const user = await getAuthUser();
    
    const reviews = await db.review.findMany({
        where: {
            clerkId: user.id,
        },
        select: {
            id: true,
            rating: true,
            comment: true,
            product: {
                select: {
                    image: true,
                    name: true,
                },
            },
        },
    });

    return reviews;
};

// ✅ implement deleteReviewAction to allow users to delete their review
export const deleteReviewAction = async (prevState: { reviewId: string }) => {
    const { reviewId } = prevState;
    const user = await getAuthUser();

    try {
        await db.review.delete({
            where: {
                id: reviewId,
                clerkId: user.id,
            },
        });

        revalidatePath('/reviews');
        
        return { message: 'Review deleted successfully' };
    } catch (error) {
        return renderError(error);
    }
};

// ✅ implement findExistingReview to check if the user already reviewed a product
export const findExistingReview = async (userId: string, productId: string) => {
    return db.review.findFirst({
        where: {
            clerkId: userId,
            productId
        },
    });
};

// # ⭐⭐⭐ ADD TO CART

// ✅ Done
// Get total number of items in the current user's cart
// Used for displaying cart badge count in navbar
// Returns 0 if user is not logged in or cart does not exist
export const fetchCartItemCount = async () => {
    const { userId } = await auth();

    if (!userId) return 0;

    const cart = await db.cart.findFirst({
        where: {
            clerkId: userId ?? '',
        },
        select: {
            numItemsInCart: true,
        },
    });

    return cart?.numItemsInCart || 0;
};

// ✅ Done Step-1 AddToCart
// Fetch a single product by id
// Used when adding item to cart to get price and validate product existence
const fetchProduct = async (productId: string) => {
    const product = await db.product.findUnique({
        where: {
            id: productId,
        },
    });

    // If no product is found, stop the action
    if (!product) {
        throw new Error('Product not found');
    }

    // Return the valid product
    return product;
};


// ✅ Done Step-2 AddToCart
// Fetch the user's cart if it exists, otherwise create a new one
// Used in cart actions to ensure a user always has a cart

const includeProductClause = {
    cartItems: {
        include: {
            product: true,
        },
    },
};

export const fetchOrCreateCart = async ({
    userId,
    errorOnFailure = false,
}: {
    userId: string; // ID of the logged-in user
    errorOnFailure?: boolean; // Whether to throw an error if cart not found
}) => {
    // Try to find an existing cart for the user
    let cart = await db.cart.findFirst({
        where: {
            clerkId: userId,
        },
        include: includeProductClause, // fetch cart items and products
    });

    // If cart not found and errorOnFailure is true, throw error
    if (!cart && errorOnFailure) {
        throw new Error('Cart not found');
    }

    // If cart does not exist, create a new one
    if (!cart) {
        cart = await db.cart.create({
            data: {
                clerkId: userId,
            },
            include: includeProductClause, // return cart with items (empty at first)
        });
    }

    // Return the existing or newly created cart
    return cart;
};

// ✅ Done Step-3 AddToCart
// Update an existing cart item or create a new one if it doesn't exist
// This ensures the cart has one item per product and updates quantity correctly
const updateOrCreateCartItem = async ({
    productId,
    cartId,
    amount,
}: {
    productId: string;  // The product to add/update
    cartId: string;     // The cart where the product belongs
    amount: number;     // Quantity to add
}) => {
    // Check if this product already exists in the cart
    let cartItem = await db.cartItem.findFirst({
        where: {
            productId,
            cartId,
        },
    });

    if (cartItem) {
        // Product exists → update the quantity
        cartItem = await db.cartItem.update({
            where: {
                id: cartItem.id,
            },
            data: {
                amount: cartItem.amount + amount,
            },
        });
    } else {
        // Product does not exist → create a new cart item
        cartItem = await db.cartItem.create({
            data: { amount, productId, cartId },
        });
    }

    // Return the updated or newly created cart item
    return cartItem;
};


// ✅ Done Step-4 AddToCart
// Updates the cart summary: total items, subtotal, tax, shipping, and order total
// Used whenever cart items are added, updated, or removed
export const updateCart = async (cart: Cart) => {
    // 1️⃣ Fetch all items in the cart along with their product info
    const cartItems = await db.cartItem.findMany({
        where: {
            cartId: cart.id,
        },
            include: {
            product: true, // Include product info to calculate price
        },
    });

    // 2️⃣ Initialize counters
    let numItemsInCart = 0; // total quantity of all items
    let cartTotal = 0;      // subtotal (sum of product price * quantity)

    // 3️⃣ Loop through items to calculate subtotal and total quantity
    for (const item of cartItems) {
        numItemsInCart += item.amount;                  // sum of quantities
        cartTotal += item.amount * item.product.price;  // sum of product prices
    }

    // 4️⃣ Calculate tax based on cart tax rate
    const tax = cart.taxRate * cartTotal;

    // 5️⃣ Calculate shipping if cart has items
    const shipping = cartTotal ? cart.shipping : 0;

    // 6️⃣ Calculate the final order total
    const orderTotal = cartTotal + tax + shipping;

    // 7️⃣ Update the cart in the database with the new summary
    await db.cart.update({
        where: {
            id: cart.id,
        },
        data: {
            numItemsInCart,
            cartTotal,
            tax,
            orderTotal,
        },
    });
};

// ✅ ⭐ Completed AddToCart ⭐
// Action to add a product to the user's cart
// This handles validation, cart creation, updating quantities, and recalculating totals
export const addToCartAction = async (prevState: unknown, formData: FormData) => {
    // 1️⃣ Get the logged-in user
    const user = await getAuthUser();

    try {
        // 2️⃣ Extract productId and amount from the submitted form
        const productId = formData.get('productId') as string;
        const amount = Number(formData.get('amount'));

        // 3️⃣ Validate that the product exists
        // Throws an error if productId is invalid
        await fetchProduct(productId);

        // 4️⃣ Fetch the user's cart or create one if it doesn't exist
        const cart = await fetchOrCreateCart({ userId: user.id });

        // 5️⃣ Add the product to the cart or update quantity if it already exists
        await updateOrCreateCartItem({ productId, cartId: cart.id, amount });

        // 6️⃣ Update the cart totals (numItemsInCart, cartTotal, tax, orderTotal)
        await updateCart(cart);

        // Revalidate layout to update navbar cart count after adding item
        revalidatePath('/', 'layout');
    } catch (error) {
        // 7️⃣ Handle any errors (invalid product, DB issues, etc.)
        return renderError(error);
    }

    // 8️⃣ Redirect the user to the cart page after successfully adding
    redirect('/cart');
};

export const removeCartItemAction = async () => {};

export const updateCartItemAction = async () => {};