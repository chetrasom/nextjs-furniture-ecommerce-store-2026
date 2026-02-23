import { NavLink, Hero } from "@/types";

export const links: NavLink[] = [
    { href: '/', label: 'home' },
    { href: '/about', label: 'about' },
    { href: '/products', label: 'products' },
    { href: '/favorites', label: 'favorites' },
    { href: '/reviews', label: 'reviews' },
    { href: '/cart', label: 'cart' },
    { href: '/orders', label: 'orders' },
    // { href: '/practices', label: 'practices' },
    { href: '/admin/sales', label: 'dashboard' },
];

export const heroes: Hero[] = [
    {
        title: "Transform Your Space with Timeless Elegance.",
        subtitle: "Hundreds of designer products at the best prices.",
        image: "/images/hero/hero-1.jpg",
    },
    {
        title: "Bring Comfort Home Style Your Space with Us!",
        subtitle: "Furnishing Dreams",
        image: "/images/hero/hero-2.jpg",
    },
    {
        title: "Innovative Designs, Endless Comfort",
        subtitle: "Furniture for the Modern Home",
        image: "/images/hero/hero-3.jpg",
    },
];

export const adminLinks: NavLink[] = [
    { href: '/admin/sales', label: 'sales' },
    { href: '/admin/products', label: 'my products' },
    { href: '/admin/products/create', label: 'create product' },
];