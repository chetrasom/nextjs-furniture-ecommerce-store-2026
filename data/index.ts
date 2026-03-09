import { NavLink, Hero } from "@/types";

// export const links: NavLink[] = [
//     { href: '/', label: 'home' },
//     { href: '/about', label: 'about' },
//     { href: '/products', label: 'products' },
//     { href: '/favorites', label: 'favorites' },
//     { href: '/reviews', label: 'reviews' },
//     { href: '/cart', label: 'cart' },
//     { href: '/orders', label: 'orders' },
//     { href: '/admin/sales', label: 'dashboard' },
// ];

export const links: NavLink[] = [
    { href: '/', label: 'home', lang_kh: 'ទំព័រដើម' },
    { href: '/about', label: 'about', lang_kh: 'អំពីយើង' },
    { href: '/products', label: 'products', lang_kh: 'ហាងទំនិញ' },
    { href: '/favorites', label: 'favorites', lang_kh: 'ចំណូលចិត្ត' },
    { href: '/reviews', label: 'reviews', lang_kh: 'ការវាយតម្លៃ' },
    { href: '/cart', label: 'cart', lang_kh: 'កន្ត្រកទំនិញ' },
    { href: '/orders', label: 'orders', lang_kh: 'ការបញ្ជាទិញ' },
    { href: '/admin/sales', label: 'dashboard', lang_kh: 'ផ្ទាំងគ្រប់គ្រង' },
];

export const heroes: Hero[] = [
    // {
    //     title: "Transform Your Space with Timeless Elegance.",
    //     subtitle: "Hundreds of designer products at the best prices.",
    //     image: "/images/hero/hero-1.jpg",
    // },
    // {
    //     title: "Bring Comfort Home Style Your Space with Us!",
    //     subtitle: "Furnishing Dreams",
    //     image: "/images/hero/hero-2.jpg",
    // },
    // {
    //     title: "Innovative Designs, Endless Comfort",
    //     subtitle: "Furniture for the Modern Home",
    //     image: "/images/hero/hero-3.jpg",
    // },

    {
        title: "បំលែងលំហររបស់អ្នកឱ្យមានភាពឆើតឆាយ និងមានតម្លៃជានិច្ច",
        subtitle: "ផលិតផលរចនាដ៏ស្រស់ស្អាតរាប់រយក្នុងតម្លៃល្អបំផុត",
        image: "/images/hero/hero-1.jpg",
    },
    {
        title: "នាំមកនូវភាពផាសុខភាពដល់ផ្ទះ រចនាលំហររបស់អ្នកជាមួយយើង",
        subtitle: "សម្រេចក្តីស្រមៃនៃការតុបតែងផ្ទះ",
        image: "/images/hero/hero-2.jpg",
    },
    {
        title: "ការរចនាទំនើប ផាសុខភាពគ្មានដែនកំណត់",
        subtitle: "គ្រឿងសង្ហារឹមសម្រាប់ផ្ទះទំនើប",
        image: "/images/hero/hero-3.jpg",
    },
];

// export const adminLinks: NavLink[] = [
//     { href: '/admin/sales', label: 'sales' },
//     { href: '/admin/products', label: 'my products' },
//     { href: '/admin/products/create', label: 'create product' },
// ];

export const adminLinks: NavLink[] = [
    { href: '/admin/sales', label: 'sales', lang_kh: 'ទំនិញបានលក់' },
    { href: '/admin/products', label: 'my products', lang_kh: 'ការគ្រប់គ្រងទំនិញ' },
    { href: '/admin/products/create', label: 'create product', lang_kh: 'បង្កើតទំនិញថ្មី' },
];