
export type NavLink = {
    href: string;
    label: string;
};

export type Hero = {
    title: string;
    subtitle: string;
    image: string;
}

// #----------------------------------
// export type ActionState = {
//     message?: string;
//     error?: string;
// };

export type actionFunction = (
    prevState: any,
    formData: FormData
) => Promise<{ message: string }>;

export type CartItem = {
    productId: string;
    image: string;
    title: string;
    price: string;
    amount: number;
    company: string;
};

export type CartState = {
    cartItems: CartItem[];
    numItemsInCart: number;
    cartTotal: number;
    shipping: number;
    tax: number;
    orderTotal: number;
};