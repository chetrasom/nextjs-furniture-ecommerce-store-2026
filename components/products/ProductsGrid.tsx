// Node modules
import Link from 'next/link';
import Image from 'next/image';

// Components
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '../ui/button';
import FavoriteToggleButton from './FavoriteToggleButton';

// Format helper
import { formatCurrency } from '@/utils/format';

// Types
import { Product } from '@/app/generated/prisma/client';

interface ProductsGridProps {
    products: Product[];
}

const ProductsGrid = ({ products }: ProductsGridProps) => {
    return (
        <div className="grid grid-cols-2 gap-x-2 gap-y-4 md:gap-4 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => {
                const { name, image, price } = product;
                const productId = product.id;
                const dollarsAmount = formatCurrency(price);

                return (
                    <article key={productId} className='relative group font-kh-suwannaphum'>
                        <Link href={`/products/${productId}`}>
                            <Card className='pt-0 overflow-hidden gap-y-2 md:gap-6'>
                                <CardContent className='px-0'>
                                    <figure className='relative h-40 md:h-48 overflow-hidden'>
                                        <Image 
                                            src={image}
                                            alt={`banner-${name}`}
                                            fill
                                            sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw'
                                            priority
                                            className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500'
                                        />
                                    </figure>
                                </CardContent>
                                
                                <CardHeader>
                                    <CardTitle className='capitalize text-base md:text-lg line-clamp-1'>{name}</CardTitle>
                                </CardHeader>

                                <CardFooter className='justify-between gap-3 max-sm:flex-col max-sm:items-stretch'>
                                    <div className='flex flex-col'>
                                        <span className='text-sm font-medium uppercase'>តម្លៃ</span>
                                        <span className='text-lg font-semibold text-muted-foreground'>{dollarsAmount}</span>
                                    </div>
                                    <Button size='lg'>មើលបន្ថែម</Button>
                                </CardFooter>
                            </Card>

                        </Link>
                        <div className='absolute top-4 right-4 z-10'>
                            <FavoriteToggleButton productId={productId} />
                        </div>
                    </article>
                )
            })}
        </div>
    )
}

export default ProductsGrid