import { Button } from "../ui/button";
import { HeartIcon } from 'lucide-react'

interface FavoriteToggleButton {
    productId: string;
}

const FavoriteToggleButton = ({ productId }: FavoriteToggleButton) => {
    return (
        // <Button size='icon' variant='outline' className='p-2 cursor-pointer'>
        //     <FaHeart />
        // </Button>

        <Button
            size='icon'
            // className='bg-primary/10 hover:bg-primary/20 absolute top-4 right-4 rounded-full'
            variant='outline'
            className="rounded-full bg-background"
        >
            <HeartIcon 
                // className={cn(liked ? 'fill-destructive stroke-destructive' : 'stroke-white')}
                className="stroke-primary" 
            />
            <span className='sr-only'>Like</span>
        </Button>
    )
}

export default FavoriteToggleButton