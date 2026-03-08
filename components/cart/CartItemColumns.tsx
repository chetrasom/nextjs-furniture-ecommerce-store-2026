import Link from "next/link";
import Image from "next/image";
import { formatCurrency } from "@/utils/format";

// Types
type FirstColumnProps = {
    image: string;
    name: string;
};

type SecondColumnProps = {
    name: string;
    company: string;
    productId: string;
};

type FourthColumnProps = {
    price: number;
};

export const FirstColumn = ({ name, image }: FirstColumnProps) => {
    return (
        <div className="flex-1 overflow-hidden">
            <figure className="relative w-full h-48 rounded-md overflow-hidden sm:h-32 sm:w-32">
                <Image
                    src={image}
                    alt={name}
                    fill
                    sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw'
                    priority
                    className='w-full rounded-md object-cover'
                />
            </figure>
        </div>
    )
};

export const SecondColumn = ({ name, company, productId }: SecondColumnProps) => {
    return (
        <div className="sm:w-48">
            <Link href={`/products/${productId}`}>
                <h3 className='capitalize font-medium hover:underline'>{name}</h3>
            </Link>
            <h4 className='mt-2 capitalize text-xs'>{company}</h4>
        </div>
    )
};

export const FourthColumn = ({ price }: FourthColumnProps) => {
    return (
       <div className='font-medium md:ml-auto'>
            {formatCurrency(price)}
       </div> 
    )
};