import Link from "next/link";

import { fetchUserFavorites } from "@/lib/actions";

import BreadCrumb from "@/components/global/BreadCrumb";
import SectionTitle from "@/components/global/SectionTitle";
import ProductsGrid from "@/components/products/ProductsGrid";
import { Button } from "@/components/ui/button";

import { Heart } from "lucide-react";

const FavoritesPage = async () => {
    const favorites = await fetchUserFavorites();

    // No favorite product yet
    if (favorites.length === 0) {
        return (
            <section className='lg:pt-20 2xl:pt-22'>
                <BreadCrumb
                    items={[
                        { label: "Home", href: "/" },
                        { label: "Favorites", href: "/favorites" },
                    ]}
                />

                <SectionTitle 
                    text="មិនមានផលិតផលចំណូលចិត្តនៅឡើយទេ" 
                    subtitle="ចាប់ផ្តើមរកមើលផលិតផលដែលអ្នកចូលចិត្ត"
                />

                <div className="mt-10 flex flex-col items-center space-y-4 text-center text-gray-500 font-kh-suwannaphum">
                    <Heart className="w-20 h-20 text-destructive" />

                    <p>
                        អ្នកមិនទាន់មានផលិតផលចំណូលចិត្តនៅឡើយទេ។ សូមទៅរកផលិតផលដែលអ្នកចូលចិត្ត!
                    </p>

                    <Button asChild>
                        <Link href="/products">រកមើលផលិតផល</Link>
                    </Button>
                </div>
            </section>
        )
    }
    
    // Access to product
    const products = favorites.map((favorite) => favorite.product);

    return (
        <section className='lg:pt-20 2xl:pt-22'>
            <BreadCrumb
                items={[
                    { label: "Home", href: "/" },
                    { label: "Favorites", href: "/favorites" },
                ]}
            />

            <SectionTitle 
                text="បញ្ចីចំណូលចិត្ត" 
                subtitle="ផលិតផលដែលអ្នកចូលចិត្តទាំងអស់"
            />

            <ProductsGrid products={products} />
        </section>
    )
}

export default FavoritesPage