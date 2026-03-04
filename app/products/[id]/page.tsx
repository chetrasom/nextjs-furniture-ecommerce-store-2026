// Node modules
import Image from "next/image";
import prisma from "@/utils/db";
import { notFound } from "next/navigation";

// Actions
import { fetchSingleProduct } from "@/lib/actions";

// Format
import { formatCurrency } from "@/utils/format";

// Components
import BreadCrumb from "@/components/global/BreadCrumb";
import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import AddToCart from "@/components/single-products/AddToCart";
import ProductRating from "@/components/single-products/ProductRating";
import SocialShareButton from "@/components/single-products/SocialShareButton";

import SectionTitle from "@/components/global/SectionTitle";
import SubmitReview from "@/components/reviews/SubmitReview";

// Type
interface SingleProductPageProps {
    params: Promise<{ id: string }>
}

// Generate Static Params (Pre-render Pages)
export async function generateStaticParams() {
    const products = await prisma.product.findMany({
        select: {
            id: true,
        },
    });

    return products.map((product) => ({
        id: product.id,
    }))
}

export async function generateMetadata({ params }: SingleProductPageProps) {
    const productId = (await params).id;
    const product = await fetchSingleProduct(productId);

    if (!product) {
        return {
            title: "Product Not Found | Furniture Store",
            description: "The product you are looking for does not exist. Browse our premium coffee selection.",
            openGraph: {
                title: "Product Not Found | Furniture Store",
                description: "The product you are looking for does not exist. Browse our premium coffee selection.",
                // images: [
                //     {
                //         url: "/images/og-image.jpg", // Replace with your OG image URL
                //         alt: "Furniture Store - Best Coffee Products Online",
                //     },
                // ],
            },
        };
    }

    return {
        title: `${product.name} | Furniture Store`,
        description: product.description,
        openGraph: {
            title: `${product.name} | Furniture Store`,
            description: product.description,
            // images: [
            //     {
            //         url: product.imageUrl,
            //         alt: product.name,
            //     },
            // ],
        },
    };
};

const SingleProductPage = async ({ params }: SingleProductPageProps) => {
    const productId = (await params).id;
    const product = await fetchSingleProduct(productId);
    const { name, image, description, price } = product;
    const dollarsAmount = formatCurrency(price);

    if (!product) {
        notFound(); // Show the 404 page if product is not found
    }

    return (
        <section className="w-full min-h-screen py-8 px-4 md:px-0 font-kh-suwannaphum lg:pt-20 2xl:pt-22">
            <BreadCrumb
                items={[
                    { label: "Home", href: "/" },
                    { label: "Products", href: "/products" },
                    { label: name }
                ]}
            />

            <div className="mt-6 max-w-7xl mx-auto grid gap-8 md:grid-cols-2">
                {/* Image */}
                <div>
                    <figure className="bg-muted relative aspect-square rounded-lg overflow-hidden flex flex-col items-center justify-center">
                        <Image 
                            src={image}
                            alt={name}
                            fill
                            sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw'
                            priority
                            className='w-full rounded-lg object-cover'
                        />
                    </figure>
                </div>

                {/* Content */}
                <div>
                    {/* Title */}
                    <h2 className="mb-4 capitalize font-bold text-primary text-2xl lg:text-3xl">{name}</h2>

                    {/* Review & Share */}
                    <div className="flex items-center justify-between mb-2 lg:justify-start lg:gap-x-6">
                        <ProductRating productId={product.id} />

                        <div className="flex gap-x-4">
                            <FavoriteToggleButton productId={product.id} />
                            <SocialShareButton 
                                productId={product.id}
                                name={product.name}
                            />
                        </div>
                    </div>

                    <p className='mt-3 text-primary font-open_sans font-bold text-xl bg-muted rounded-md inline-block py-2 px-6'>
                        {dollarsAmount}
                    </p>

                    <p className="text-muted-foreground leading-relaxed py-5 lg:py-7">
                        {description}
                    </p>

                    <AddToCart productId={product.id} />
                </div>
            </div>

            {/* Form Submit Review */}
            <div className="mt-10">
                <SectionTitle text="ការវាយតម្លៃផលិតផល" />
                
                <SubmitReview productId={productId} />
            </div>

        </section>
    )
}

export default SingleProductPage;