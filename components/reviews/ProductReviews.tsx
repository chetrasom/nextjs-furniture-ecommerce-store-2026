import { fetchProductReviews } from "@/lib/actions";

import ReviewCard from "./ReviewCard";

const ProductReviews = async ({ productId }: { productId: string }) => {
    const reviews = await fetchProductReviews(productId);

    return (
        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {reviews.map((review) => {
                const { comment, rating, authorImageUrl, authorName } = review;

                // create new object. Filter properties what we want.
                const reviewInfo = {
                    comment,
                    rating,
                    image: authorImageUrl ?? '',
                    name: authorName
                };

                return (
                    <ReviewCard key={review.id} reviewInfo={reviewInfo} />
                )
            })}
        </div>
    )
}

export default ProductReviews