import { HomeIcon } from "lucide-react";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type BreadcrumbItemType = {
    label: string;
    href?: string;
};

interface BreadCrumbProps {
    items: BreadcrumbItemType[];
}

const BreadCrumb = ({ items }: BreadCrumbProps) => {
    return (
        <Breadcrumb>
            <BreadcrumbList 
                className="gap-2 rounded-full border px-3 py-2 text-sm max-w-max">
                {/* Home icon */}
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">
                        <HomeIcon className="size-4" />
                        <span className="sr-only">Home</span>
                    </BreadcrumbLink>
                </BreadcrumbItem>

                {items.map((item, index) => {
                    const isLast = index === items.length - 1;

                    return (
                        <div key={index} className="flex items-center gap-2">
                            <BreadcrumbSeparator />

                            <BreadcrumbItem>
                                {isLast ? (
                                    <BreadcrumbPage className="capitalize">
                                        {item.label}
                                    </BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink
                                        href={item.href!}
                                        className="capitalize"
                                    >
                                        {item.label}
                                    </BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                        </div>
                    );
                })}
            </BreadcrumbList>
        </Breadcrumb>
    );
};

export default BreadCrumb;