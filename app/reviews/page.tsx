import Link from "next/link";
import { fetchProductReviewsByUser, deleteReviewAction } from "@/lib/actions";

import BreadCrumb from "@/components/global/BreadCrumb";
import SectionTitle from "@/components/global/SectionTitle";
import FormContainer from "@/components/form/FormContainer";
import { IconButton } from "@/components/form/Buttons";
import ReviewCard from "@/components/reviews/ReviewCard";
import { Button } from "@/components/ui/button";

import { Star } from "lucide-react";

const ReviewsPage = async () => {
    const reviews = await fetchProductReviewsByUser();

    // No Reviews product yet
    if (reviews.length === 0) {
        return (
        <section className="lg:pt-20 2xl:pt-22">
            <BreadCrumb
                items={[
                    { label: "ទំព័រដើម", href: "/" },
                    { label: "ទំនិញវាយតម្លៃ", href: "/reviews" },
                ]}
            />

            <SectionTitle
                text="អ្នកមិនទាន់មានការវាយតម្លៃនៅឡើយទេ"
                subtitle="ចាប់ផ្តើមទិញ និងវាយតម្លៃផលិតផលដែលអ្នកចូលចិត្ត"
            />

            <div className="mt-10 flex flex-col items-center space-y-4 text-center text-gray-500 font-kh-suwannaphum">
                <Star className="w-20 h-20 text-yellow-400" />

                <p>
                    អ្នកមិនទាន់បានវាយតម្លៃផលិតផលណាមួយនៅឡើយទេ។
                    សូមទៅមើលផលិតផល និងចែករំលែកមតិយោបល់របស់អ្នក។
                </p>

                <Button asChild>
                    <Link href="/products">ទៅរកផលិតផល</Link>
                </Button>
            </div>
        </section>
        );
    }

    return (
        <section className='lg:pt-20 2xl:pt-22'>
            <BreadCrumb
                items={[
                    { label: "ទំព័រដើម", href: "/" },
                    { label: "ទំនិញវាយតម្លៃ", href: "/reviews" },
                ]}
            />

            <SectionTitle 
                text="ការវាយតម្លៃរបស់ខ្ញុំ" 
                subtitle="ផលិតផលដែលអ្នកបានវាយតម្លៃទាំងអស់"
            />

            <div className="grid grid-cols-1 gap-x-2 gap-y-4 md:gap-4 md:grid-cols-2 lg:grid-cols-3">
                {reviews.map((review) => {
                    const { comment, rating } = review;
                    const { name, image } = review.product;
                    const reviewInfo = {
                        comment,
                        rating,
                        name,
                        image,
                    };

                    return (
                        <ReviewCard key={review.id} reviewInfo={reviewInfo}>
                            <DeleteReview reviewId={review.id} />
                        </ReviewCard>
                    )
                })}
            </div>
        </section>
    )
}

// Delete Review
const DeleteReview = ({ reviewId }: { reviewId: string }) => {
    const deleteReview = deleteReviewAction.bind(null, { reviewId });

    return (
        <FormContainer action={deleteReview}>
            <IconButton actionType='delete' />
        </FormContainer>
    )
};

export default ReviewsPage;