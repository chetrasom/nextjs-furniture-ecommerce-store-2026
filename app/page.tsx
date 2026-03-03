// Loading
import { Suspense } from "react";
import SkeletonLoadingContainer from "@/components/global/SkeletonLoadingContainer";

// Global
import SectionTitle from "@/components/global/SectionTitle";

// Components
import Hero from "@/components/home/hero/Hero";
import FeaturedProducts from "@/components/home/featured/FeaturedProducts";

const Homepage = () => {
    return (
        <>
            <Hero />

            <section className="pt-8 pb-14">
                <SectionTitle 
                    text="ផលិតផលពេញនិយម"
                    subtitle="បង្ហាញផលិតផលដែលពេញនិយម និងមានគុណភាពខ្ពស់ក្នុងពេលបច្ចុប្បន្ន"
                />
            
                <Suspense fallback={<SkeletonLoadingContainer />}>
                    <FeaturedProducts />
                </Suspense>
            </section>
        </>
    )
}

export default Homepage;