import { cn } from "@/lib/utils";
import { LucideIcon, Inbox } from "lucide-react";

interface EmptyListProps {
    heading?: string;
    className?: string;
    icon?: LucideIcon;
}

const EmptyList = ({ 
    heading = 'No items found.',
    className,
    icon: Icon = Inbox,
}: EmptyListProps) => {
    return (
        <div className={cn("flex flex-col items-center justify-center text-muted-foreground space-y-2", className)}>
            <Icon className="w-12 h-12 text-gray-400" />
            <h2 className={cn('text-xl', className)}>{heading}</h2>
        </div>
    )
}

export default EmptyList;