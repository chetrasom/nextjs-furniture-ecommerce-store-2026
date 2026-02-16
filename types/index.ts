import { Product, Category, Brand, CoffeeType } from '@prisma/client';
// import { Prisma } from '@prisma/client';

export type NavLink = {
    href: string;
    label: string;
};

export type actionFunction = (
    prevState: any,
    formData: FormData
) => Promise<{ message: string }>;

// # Product - raw database
export type ProductWithRelations = Product & {
    category: Category;
    brand: Brand;
    coffeeType: CoffeeType;
};

// NEW TYPE for Serialized Products
export type SerializedProductWithRelations = Omit<ProductWithRelations, 'price' | 'createdAt' | 'updatedAt'> & {
    price: number;
    createdAt: string;
    updatedAt: string;
};

// # CartItem list
// export type CartItemWithProduct = Prisma.CartItemGetPayload<{
//     include: { product: true };
// }>;

// export type CartItem = {
//     productId: string;
//     image: string;
//     title: string;
//     price: string;
//     amount: number;
//     company: string;
// };
  
// export type CartState = {
//     cartItems: CartItem[];
//     numItemsInCart: number;
//     cartTotal: number;
//     shipping: number;
//     tax: number;
//     orderTotal: number;
// };