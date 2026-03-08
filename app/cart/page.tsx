import { redirect } from "next/navigation";
import Link from "next/link";

// Clerk
import { auth } from "@clerk/nextjs/server";

// Components
import BreadCrumb from "@/components/global/BreadCrumb";
import SectionTitle from "@/components/global/SectionTitle";
import CartItemsList from "@/components/cart/CartItemsList";
import CartTotals from "@/components/cart/CartTotals";
import { Button } from "@/components/ui/button";

// Actions
import { fetchOrCreateCart, updateCart } from "@/lib/actions";

// Assets
import { ShoppingCart } from "lucide-react";

const CartPage = async () => {
    const { userId } = await auth();

    if (!userId) redirect("/");

    const previousCart = await fetchOrCreateCart({ userId });
    const { cartItems, currentCart } = await updateCart(previousCart);

    // No Item in cart.
    if (cartItems.length === 0) {
        return (
            <section className='lg:pt-20 2xl:pt-22'>
                <BreadCrumb
                    items={[
                        { label: "Home", href: "/" },
                        { label: "Shopping Cart", href: "/cart" },
                    ]}
                />

                <SectionTitle 
                    text="កន្ត្រករបស់អ្នកគឺទទេ" 
                    subtitle="អ្នកមិនទាន់បានបញ្ចូលផលិតផលណាឡើយ"
                />

                <div className="mt-10 flex flex-col items-center space-y-4 text-center text-gray-500 font-kh-suwannaphum">
                    <ShoppingCart className="w-20 h-20 text-destructive" />

                    <p>
                        អ្នកមិនទាន់មានផលិតផលនៅក្នុងកន្ត្រកទេ។ សូមចូលទៅរកផលិតផលហើយបញ្ចូលវា!
                    </p>

                    <Button asChild>
                        <Link href="/products">រកមើលផលិតផល</Link>
                    </Button>
                </div>
            </section>
        )
    }

    return (
        <section className='lg:pt-20 2xl:pt-22'>
            <BreadCrumb
                items={[
                    { label: "Home", href: "/" },
                    { label: "Shopping Cart", href: "/cart" },
                ]}
            />

            <SectionTitle 
                text="ផលិតផលក្នុងកន្ត្រករបស់អ្នក" 
                subtitle="ផលិតផលដែលអ្នកបានបញ្ចូលក្នុងកន្ត្រកទាំងអស់"
            />

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
                <div className="lg:col-span-8">
                    <CartItemsList cartItems={cartItems} />
                </div>
                <div className="lg:col-span-4">
                    <CartTotals cart={currentCart} />
                </div>
            </div>
        </section>
    )
}

export default CartPage