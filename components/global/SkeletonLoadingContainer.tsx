import { Skeleton } from "../ui/skeleton";
import { Card, CardContent } from "../ui/card";

// Layout
function SkeletonLoadingContainer() {
    return (
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
            <SkeletonProduct />
            <SkeletonProduct />
            <SkeletonProduct />
            <SkeletonProduct />
        </div>
    )
};

// Skeleton Product
function SkeletonProduct() {
    return (
        <Card>
            <CardContent className='p-4'>
                <Skeleton className='h-48 w-full' />
                <Skeleton className='h-4 w-3/4 mt-4' />
                <Skeleton className='h-4 w-1/4 mt-4' />
            </CardContent>
        </Card>
    )
};

export default SkeletonLoadingContainer;