import Link from "next/link";

// actions
import { fetchFeaturedProducts } from "@/lib/actions";

// Components
import EmptyList from "@/components/global/EmptyList";
import ProductsGrid from "@/components/products/ProductsGrid";

const FeaturedProducts = async () => {
    const products = await fetchFeaturedProducts();

    if (products.length === 0) return (
        <div className="py-8">
            <EmptyList className="text-muted-foreground" />
        </div>
    )

    return (
        <>
            <ProductsGrid products={products} />
            <div className="pt-14 flex justify-center">
                <Link
                    href="/products"
                    className="px-6 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition flex items-center gap-2 max-w-max"
                >
                    មើលផលិតផលទាំងអស់
                    <span className="text-xl animate-bounce">→</span>
                </Link>
            </div>
        </>
    )
}

export default FeaturedProducts;