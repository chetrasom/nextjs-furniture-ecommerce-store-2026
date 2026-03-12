import { Suspense } from "react"
import CheckoutClient from "@/components/checkout/CheckoutClient"

const CheckoutPage = ({
    searchParams,
}: {
    searchParams: Promise<{ orderId?: string; cartId?: string }>;
}) => {
    return (
        <Suspense fallback={<>Loading Checkout...</>}>
            <CheckoutClient searchParams={searchParams} />
        </Suspense>
    )
}

export default CheckoutPage


// "use client";
// import { Suspense } from 'react';
// import axios from "axios";
// import { useCallback } from "react";
// import { useSearchParams } from "next/navigation";
// import { loadStripe } from "@stripe/stripe-js";
// import {
//     EmbeddedCheckoutProvider,
//     EmbeddedCheckout,
// } from '@stripe/react-stripe-js';

// const stripePromise = loadStripe(
//     process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
// );

// const CheckoutPage = () => {
//     const searchParams = useSearchParams();

//     const orderId = searchParams.get('orderId');
//     const cartId = searchParams.get('cartId');

//     const fetchClientSecret = useCallback(async () => {
//         // Create a Checkout Session
//         const response = await axios.post('/api/payment', {
//             orderId: orderId,
//             cartId: cartId,
//         });
//         return response.data.clientSecret;
//     }, [cartId, orderId]);

//     const options = { fetchClientSecret };

//     return (
//         <Suspense fallback={<div>Loading checkout...</div>}>
//             <div id='checkout' className='lg:pt-20 2xl:pt-22'>
//                 <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
//                     <EmbeddedCheckout />
//                 </EmbeddedCheckoutProvider>
//             </div>
//         </Suspense>
//     )
// }

// export default CheckoutPage;
