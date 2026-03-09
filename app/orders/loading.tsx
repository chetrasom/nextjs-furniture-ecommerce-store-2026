'use client';

import { Skeleton } from '@/components/ui/skeleton';
import LoadingTable from '@/components/global/LoadingTable';

function loading() {
    // return ;
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

            <LoadingTable rows={10} />
        </section>
    )
}
export default loading;