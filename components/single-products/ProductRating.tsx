import { FaStar } from 'react-icons/fa';
import { fetchProductRating } from '@/lib/actions';

interface ProductRatingProps {
    productId: string;
}

const ProductRating = async ({ productId }: ProductRatingProps) => {
    const { rating, count } = await fetchProductRating(productId);

    // Stars
    const totalStars = 5; // Always show 5 stars
    const filledStars = Math.round(rating); // round 4.2 → 4
    const emptyStars = totalStars - filledStars;

    const className = `flex gap-1 items-center text-md`;

    return (
         <span className={className}>
            {/* Render filled stars */}
            {Array(filledStars)
                .fill(0)
                .map((_, i) => (
                    <FaStar key={`filled-${i}`} className="w-5 h-5 text-yellow-400" />
                ))}

            {/* Render empty stars */}
            {Array(emptyStars)
                .fill(0)
                .map((_, i) => (
                    <FaStar key={`empty-${i}`} className="w-5 h-5 text-gray-300" />
                ))}

            {/* Rating number and count */}
            <span className="ml-1">
                {rating.toFixed(1)} ({count} reviews)
            </span>
        </span>
    );
}

export default ProductRating;