import { FaStar, FaRegStar } from 'react-icons/fa';

const Rating = ({ rating }: { rating: number }) => {
    /*
        Example:: rating = 2
        1 <= 2 true
        2 <= 2 true
        3 <= 2 false
        4 <= 2 false
        5 <= 2 false
    */

    const stars = Array.from({ length: 5 }, (_, i) => i + 1 <= rating);

    return (
        <div className='flex items-center gap-2'>
            {stars.map((isFilled, i) => {
                const className = `w-5 h-5 ${
                    isFilled ? 'text-yellow-400' : 'text-gray-400'
                }`;

                return (
                    isFilled ? (
                        <FaStar className={className} key={i} />
                    ) : (
                        <FaRegStar className={className} key={i} />
                    )
                )
            })}
        </div>
    )
}

export default Rating;