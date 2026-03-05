"use client";

import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
    return (
        <section className="lg:pt-20 2xl:pt-22 space-y-6">
            {/* Breadcrumb */}
            <Skeleton className="h-4 w-48" />

            {/* Top toolbar */}
            <div className="flex items-center justify-between">
                <Skeleton className="h-4 w-24" />
                <div className="flex gap-3">
                    <Skeleton className="h-8 w-20" />
                    <Skeleton className="h-8 w-20" />
                </div>
            </div>

            {/* Products grid */}
            <div 
                // className="grid grid-cols-2 md:grid-cols-4 gap-4"
                className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3"
            >
                {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="space-y-3">
                        <Skeleton className="h-48 w-full rounded-lg" />
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Loading;