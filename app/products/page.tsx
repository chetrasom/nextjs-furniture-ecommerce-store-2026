// Components
import ProductsContainer from "@/components/products/ProductsContainer";
import BreadCrumb from "@/components/global/BreadCrumb";

// Type
interface ProductsPageProps {
    searchParams?: {
        layout?: string;
        search?: string;
    };
}
const ProductsPage = async ({ searchParams }: ProductsPageProps) => {
    const params = await searchParams; // unwrap promise once
    const layout = params?.layout || 'grid';
    const search = params?.search || '';

    return (
        <section className='lg:pt-20 2xl:pt-22'>
            <BreadCrumb
                items={[
                    { label: "Home", href: "/" },
                    { label: "Products", href: "/products" },
                ]}
            />

            <ProductsContainer layout={layout} search={search} />
        </section>
    )
}

export default ProductsPage;