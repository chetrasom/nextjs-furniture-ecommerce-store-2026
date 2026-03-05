import Link from "next/link";
import { Button } from "../ui/button";
import { ShoppingBag } from "lucide-react";
import { fetchCartItemCount } from "@/lib/actions";

const CartButton = async () => {
    // const numItemsInCart = 9;
    const numItemsInCart = await fetchCartItemCount();

    return (
        <Button
            asChild
            variant="outline"
            size="icon"
            className="relative flex items-center justify-center"
        >
            <Link href="/cart">
                <ShoppingBag />
                <span className='absolute -top-3 -right-3 bg-primary border-t border-[#fafffe] text-white rounded-full h-6 w-6 flex items-center justify-center text-xs'>
                    {numItemsInCart}
                </span>
            </Link>
        </Button>
    )
}

export default CartButton