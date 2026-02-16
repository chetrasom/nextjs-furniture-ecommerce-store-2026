import Link from "next/link";
import { Button } from "../ui/button";
import { ShoppingBag } from "lucide-react";

const CartButton = () => {
    const numberInCart = 9;

    return (
        <Button
            asChild
            variant="outline"
            size="icon"
            className="relative h-10 flex items-center justify-center lg:w-10"
        >
            <Link href="/cart">
                <ShoppingBag className="h-[1.2rem] w-[1.2rem] text-primary" />
                <span className='absolute -top-3 -right-3 bg-primary border-t border-[#fafffe] text-white rounded-full h-6 w-6 flex items-center justify-center text-xs'>
                    {numberInCart}
                </span>
            </Link>
        </Button>
    )
}

export default CartButton