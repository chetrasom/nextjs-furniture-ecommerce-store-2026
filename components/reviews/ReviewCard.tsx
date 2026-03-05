import Image from "next/image";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Rating from "./Rating";
import Comment from "./Comment";

type ReviewCardProps = {
    reviewInfo: {
        comment: string;
        rating: number;
        name: string;
        image: string;
    };
    children?: React.ReactNode;
}

const ReviewCard = ({ reviewInfo, children }: ReviewCardProps) => {
    return (
        <Card className="relative shadow-none font-kh-suwannaphum">
            <CardHeader>
                <div className="flex items-center gap-x-2 border-b pb-2">
                    <figure className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image 
                            src={reviewInfo.image}
                            alt={reviewInfo.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority
                            className="object-cover"
                        />
                    </figure>

                    <div>
                        <h3 className='text-sm font-bold capitalize mb-1'>{reviewInfo.name}</h3>
                        <Rating rating={reviewInfo.rating} />
                    </div>
                </div>
            </CardHeader>

            <CardContent>
                <Comment comment={reviewInfo.comment} />
            </CardContent>

            <div className='absolute top-3 right-3'>{children}</div>
        </Card>
    )
}

export default ReviewCard;