"use client";

import { use } from 'react'
import axios from "axios";
import { useCallback } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
    EmbeddedCheckoutProvider,
    EmbeddedCheckout,
} from '@stripe/react-stripe-js';

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

const CheckoutClient = ({
    searchParams,
}: {
    searchParams: Promise<{ orderId?: string; cartId?: string }>;
}) => {
    const params = use(searchParams)

    const orderId = params.orderId;
    const cartId = params.cartId;

    const fetchClientSecret = useCallback(async () => {
        // Create a Checkout Session
        const response = await axios.post('/api/payment', {
            orderId: orderId,
            cartId: cartId,
        });
        return response.data.clientSecret;
    }, [cartId, orderId]);

    const options = { fetchClientSecret };

    return (
        <div id='checkout' className='lg:pt-20 2xl:pt-22'>
            <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
                <EmbeddedCheckout />
            </EmbeddedCheckoutProvider>
        </div>
    )
}

export default CheckoutClient;
