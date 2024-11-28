import { cn } from "@/utils/utils";
import { PropsWithChildren } from "react";

export function SectionHeading({
    className,
    children,
}: PropsWithChildren<{ className: string }>) {
    return (
        <h2
            className={cn(
                "text-2xl sm:text-4xl mx-auto max-w-[500px] md:max-w-[800px] lg:max-w-[1300px] md:text-6xl font-black mb-10 md:mb-14 text-secondary uppercase",
                className
            )}
        >
            {children}
        </h2>
    );
}
