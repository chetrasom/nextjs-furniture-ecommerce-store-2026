import { FaStar } from 'react-icons/fa';

interface ProductRatingProps {
    productId: string;
}

const ProductRating = ({ productId }: ProductRatingProps) => {
    // Temp
    const rating = 4.2;
    const count = 25;

    const className = `flex gap-1 items-center text-md`;
    const countValue = `(${count}) reviews`;

    return (
        <span className={className}>
            <FaStar className='w-3 h-3' />
            {rating} {countValue}
        </span>
    );
}

export default ProductRating