import Link from "next/link";

// Components
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { Button } from "../ui/button";

// Actions
import { fetchAllProducts } from "@/lib/actions";

// Assets
import { LuLayoutGrid, LuList } from 'react-icons/lu';
import { SearchX } from "lucide-react";

// Type
interface ProductsContainerProps {
    layout: string;
    search: string;
}

const ProductsContainer = async ({ layout, search }: ProductsContainerProps) => {
    const products = await fetchAllProducts({ search });
    const totalProducts = products.length;
    const searchTerm = search ? `&search=${search}` : '';
    
    return (
        <div>
            {/* Header */}
            <div className="h-16 flex items-center justify-between border-b mt-5">
                <h3 className="font-medium text-lg">
                    {/* {totalProducts} product{totalProducts > 1 && 's'} */}
                    ផលិតផលចំនួន {totalProducts}
                </h3>
                <div className="flex items-center gap-x-4">
                    <Button
                        asChild
                        size="icon"
                        variant={layout === 'grid' ? 'default' : 'outline'}
                    >
                        <Link href={`/products?layout=grid${searchTerm}`}>
                            <LuLayoutGrid />
                        </Link>
                    </Button>

                    <Button
                        asChild
                        size="icon"
                        variant={layout === 'list' ? 'default' : 'outline'}
                    >
                        <Link href={`/products?layout=list${searchTerm}`}>
                            <LuList />
                        </Link>
                    </Button>
                </div>
            </div>

            {/* Products */}
            <div className="py-10">
                {totalProducts === 0 ? (
                    <div className="mt-16 flex flex-col items-center justify-center text-center text-muted-foreground">
                        <SearchX className="mb-4 h-12 w-12" />
                        <h3 className="text-2xl font-semibold">
                            សូមអភ័យទោស មិនមានផលិតផលដែលត្រូវនឹងការស្វែងរករបស់អ្នកទេ
                        </h3>
                        <p className="mt-2 text-sm">
                            សូមព្យាយាមកែប្រែតម្រង ឬពាក្យគន្លឹះស្វែងរករបស់អ្នក។
                        </p>
                    </div>
                ) : layout === "grid" ? (
                    <ProductsGrid products={products} />
                ) : (
                    <ProductsList products={products} />
                )}
            </div>
        </div>
    )
}

export default ProductsContainer;