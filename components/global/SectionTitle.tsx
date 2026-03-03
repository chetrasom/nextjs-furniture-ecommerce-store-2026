import { Separator } from "../ui/separator";

interface SectionTitleProps {
    text: string;
    subtitle?: string;
};

const SectionTitle = ({ text, subtitle }: SectionTitleProps) => {
    return (
        <div className="my-8 space-y-2 font-kh-kantumruy">
            <div>
                <h2 className="text-2xl font-semibold tracking-tight capitalize md:text-2xl lg:text-[28px]">
                    {text}
                </h2>
                {subtitle && (
                    <p className="pt-1 text-sm text-muted-foreground md:text-base">
                        {subtitle}
                    </p>
                )}
            </div>
            <Separator />
        </div>
    )
}

export default SectionTitle;