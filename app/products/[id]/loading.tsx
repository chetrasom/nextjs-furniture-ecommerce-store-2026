"use client";

import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
    return (
        <section className="w-full min-h-screen py-8 px-4 md:px-0 font-kh-suwannaphum lg:pt-20 2xl:pt-22 space-y-6">
            <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2">
                {/* Image skeleton */}
                <Skeleton className="w-full h-72 md:h-96 rounded-lg bg-muted" />

                {/* Text skeleton */}
                <div className="space-y-4">
                    <Skeleton className="h-8 w-3/4 rounded-md bg-muted" />
                    <Skeleton className="h-5 w-1/2 rounded-md bg-muted" />
                    <div className="flex items-center justify-between mb-2 lg:justify-start lg:gap-x-6">
                        <Skeleton className="h-5 w-1/4 rounded-md bg-muted" />
                        <div className="flex gap-x-2">
                            <Skeleton className="h-8 w-8 rounded-full bg-muted" />
                            <Skeleton className="h-8 w-8 rounded-full bg-muted" />
                        </div>
                    </div>
                    <Skeleton className="h-8 w-1/3 rounded-md bg-muted" />
                    <Skeleton className="h-5 w-full rounded-md bg-muted" />
                    <Skeleton className="h-5 w-full rounded-md bg-muted" />
                    <Skeleton className="h-5 w-1/2 rounded-md bg-muted" />
                    <Skeleton className="h-12 w-full rounded-md bg-muted" />
                </div>
            </div>
        </section>
    )
}

export default Loading