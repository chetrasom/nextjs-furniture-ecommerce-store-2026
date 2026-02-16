import { cn } from "@/lib/utils";

type ContainerWrapperProps = {
    children: React.ReactNode;
    className?: string;
}

const ContainerWrapper = ({ children, className }: ContainerWrapperProps) => {
    return (
        <div 
            // className={cn('mx-auto px-4 md:px-6 lg:px-8 max-w-6xl xl:max-w-7xl', className)}
            className={cn('container mx-auto px-4 md:px-6 lg:px-8', className)}
        >
            {children}
        </div>
    )
}

export default ContainerWrapper;
