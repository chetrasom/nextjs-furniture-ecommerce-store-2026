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
        </>
    )
}

export default FeaturedProducts;