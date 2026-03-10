import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import SectionTitle from "../global/SectionTitle";

const reviews = [
    {
        id: 1,
        name: "សុខ ដារ៉ា",
        avatar: "/images/user/user-1.jpg",
        rating: 5,
        comment: "ផលិតផលមានគុណភាពល្អ និងដឹកជញ្ជូនលឿន។ ខ្ញុំពេញចិត្តណាស់!",
    },
    {
        id: 2,
        name: "ចន្ទធី",
        avatar: "/images/user/user-2.jpg",
        rating: 4,
        comment: "សេវាកម្មល្អ តម្លៃសមរម្យ ហើយផលិតផលស្អាត។",
    },
    {
        id: 3,
        name: "រស្មី",
        avatar: "/images/user/user-3.jpg",
        rating: 5,
        comment: "ហាងនេះល្អណាស់ ខ្ញុំនឹងទិញម្ដងទៀត!",
    },
];

const CustomerReviews = () => {
    return (
        <section className="py-16">
            <div className="containerCustom">
                <SectionTitle 
                    text="មតិយោបល់ពីអតិថិជន"
                    subtitle="ផលិតផលគុណភាពរបស់ Furnova"
                />

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {reviews.map((review) => (
                        <Card key={review.id}>
                            <CardContent className="p-6 space-y-4">
                                <div className="flex items-center gap-3">
                                    <figure className="relative w-12 h-12">
                                        <Image
                                            src={review.avatar}
                                            alt={review.name}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            priority
                                            className="rounded-full object-cover"
                                        />
                                    </figure>

                                    <div className="font-medium">
                                        {review.name}
                                    </div>
                                </div>

                                {/* Rating */}
                                <div className="text-yellow-500">
                                    {"★".repeat(review.rating)}
                                    {"☆".repeat(5 - review.rating)}
                                </div>

                                {/* Comment */}
                                <p className="text-muted-foreground text-sm">
                                    {review.comment}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default CustomerReviews;