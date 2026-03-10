"use client";

import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
    return (
        <section 
            // className="fixed inset-0 z-20 flex items-center justify-center bg-background/25 pt-48 md:pt-0"
            className="bg-background/25 pt-48 md:pt-0"
        >
            <div className="w-full max-w-7xl px-4 md:px-6 lg:px-8 lg:pt-20 2xl:pt-22">
                <div className="grid gap-8 md:grid-cols-2">
                    {/* Image skeleton */}
                    <Skeleton className="w-full h-72 md:h-96 rounded-lg" />

                    {/* Text skeleton */}
                    <div className="space-y-4">
                        <Skeleton className="h-8 w-3/4 rounded-md" />
                        <Skeleton className="h-5 w-1/2 rounded-md" />

                        <div className="flex items-center justify-between lg:justify-start lg:gap-x-6">
                        <Skeleton className="h-5 w-1/4 rounded-md" />
                        <div className="flex gap-x-2">
                            <Skeleton className="h-8 w-8 rounded-full" />
                            <Skeleton className="h-8 w-8 rounded-full" />
                        </div>
                        </div>

                        <Skeleton className="h-8 w-1/3 rounded-md" />
                        <Skeleton className="h-5 w-full rounded-md" />
                        <Skeleton className="h-5 w-full rounded-md" />
                        <Skeleton className="h-5 w-1/2 rounded-md" />
                        <Skeleton className="h-12 w-full rounded-md" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Loading