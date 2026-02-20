// Node modules
import Link from "next/link";
import Image from "next/image";

// Components
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";
import FavoriteToggleButton from "./FavoriteToggleButton";

// Helpers
import { formatCurrency } from "@/utils/format";

// Types
import { Product } from "@/app/generated/prisma/client";

interface ProductsListProps {
    products: Product[];
}

const ProductsList = ({ products }: ProductsListProps) => {
    return (
        <div className="grid grid-cols-1 gap-4">
            {products.map((product) => {
                const { name, image, price, description } = product;
                const productId = product.id;
                const dollarsAmount = formatCurrency(price);

                return (
                    <article key={productId} className='relative group font-kh-suwannaphum'>
                        <Link href={`/products/${productId}`}>
                            <Card className="p-0 overflow-hidden">
                                <CardContent className="p-0 h-40 grid grid-cols-2 md:grid-cols-3 md:gap-x-2 md:h-48 lg:h-64">
                                    <div className="h-full">
                                        <figure className='relative h-full overflow-hidden'>
                                            <Image 
                                                src={image}
                                                alt={`banner-${name}`}
                                                fill
                                                sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw'
                                                priority
                                                className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500'
                                            />
                                        </figure>
                                    </div>
                                    <div className="flex flex-col justify-between items-stretch p-4 md:col-span-2">
                                        <h3 className='capitalize font-medium text-base line-clamp-1 md:text-xl lg:text-2xl'>{name}</h3>
                                        <p className="hidden text-sm text-muted-foreground leading-6 md:line-clamp-3 lg:line-clamp-4 lg:text-base lg:leading-7">
                                            {description}
                                        </p>
                                        <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-end">
                                            <div className='flex flex-col'>
                                                <span className='text-sm font-medium uppercase'>តម្លៃ</span>
                                                <span className='text-lg font-semibold text-muted-foreground'>{dollarsAmount}</span>
                                            </div>
                                            <Button size='lg'>មើលបន្ថែម</Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                        <div className='absolute top-1/2 -translate-y-1/2 right-4 z-10 md:top-2.5 md:translate-y-0 lg:top-4'>
                            <FavoriteToggleButton productId={productId} />
                        </div>
                    </article>
                )
            })}
        </div>
    )
}

export default ProductsList;