// Node modules
import Image from "next/image";

// Actions
import { fetchSingleProduct } from "@/lib/actions";

// Format
import { formatCurrency } from "@/utils/format";

// Components
import BreadCrumb from "@/components/global/BreadCrumb";
import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import AddToCart from "@/components/single-products/AddToCart";
import ProductRating from "@/components/single-products/ProductRating";

// Type
interface SingleProductPageProps {
    params: Promise<{ id: string }>
}

const sleep = (ms: number) =>
            new Promise(resolve => setTimeout(resolve, ms));

const SingleProductPage = async ({ params }: SingleProductPageProps) => {
    await sleep(2000);
    const productId = (await params).id;
    const product = await fetchSingleProduct(productId);
    const { name, image, company, description, price } = product;
    const dollarsAmount = formatCurrency(price);

    return (
        <section className="bg-orange-300 w-full min-h-screen py-8 px-4 md:px-0 font-kh-suwannaphum">
            <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2">
                {/* Image */}
                <figure>
                    asdas
                </figure>
                {/* Content */}
                <div>
                    asdsa
                </div>
            </div>
        </section>
    )
}

export default SingleProductPage;