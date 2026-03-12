import Stripe from "stripe";
import db from "@/utils/db";
import { redirect } from "next/navigation";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
export default async function ConfirmPage({ 
    searchParams 
}: { 
    searchParams: Promise<{ session_id: string }>;
}) {
    const params = await searchParams;
    const sessionId = params.session_id;

    if (!sessionId) return <div>Missing session ID</div>;

    // 1️⃣ Retrieve session from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    // 2️⃣ Check payment status
    if (session.payment_status === "paid") {
        const orderId = session.metadata?.orderId;
        const cartId = session.metadata?.cartId;

        if (orderId) {
            // 3️⃣ Mark order as paid
            await db.order.update({
                where: { id: orderId },
                data: { isPaid: true },
            });
        }

        if (cartId) {
            // 4️⃣ Optionally clear cart
            await db.cart.update({
                where: { id: cartId },
                data: { cartItems: { deleteMany: {} } },
            });
        }

        // 5️⃣ Redirect to orders/success page
        redirect("/orders");
    }

    return <div>Payment not completed</div>;
}