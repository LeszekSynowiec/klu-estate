import { PropsWithChildren } from "react";
import Image from "next/image";
import { cn } from "@/utils/utils";

export interface TwoColumnCardProps {
    img: {
        src: string;
        alt: string;
        width: number;
        height: number;
    };
}

export function RightImgColumn({
    img,
    children,
}: PropsWithChildren<TwoColumnCardProps>) {
    return (
        <div className="flex flex-col md:flex-row max-w-[1300px] mx-auto">
            <div
                className={cn(
                    `w-full md:w-1/2 lg:w-[calc(100%_-_442px)] bg-secondary text-white font-thin p-10 space-y-10 xl:pr-24 xl:py-24`
                )}
            >
                {children}
            </div>
            <div className="w-full lg:w-[442px] md:w-1/2 relative aspect-square">
                <Image
                    src={img.src}
                    width={img.width}
                    alt={img.alt}
                    height={img.height}
                    loading="lazy"
                    className="w-full h-full object-cover absolute top-0 left-0 z-0"
                />
            </div>
        </div>
    );
}

export function LeftImgColumn({
    img,
    children,
}: PropsWithChildren<TwoColumnCardProps>) {
    return (
        <div className="flex flex-col-reverse md:flex-row max-w-[1300px] mx-auto">
            <div className="w-full aspect-square lg:aspect-auto xl:w-[733px] md:w-1/2 relative">
                <Image
                    src={img.src}
                    width={img.width}
                    alt={img.alt}
                    height={img.height}
                    loading="lazy"
                    className="w-full h-full object-cover absolute top-0 left-0 z-0"
                />
            </div>
            <div
                className={cn(
                    `w-full md:w-1/2 xl:w-[calc(100%_-_733px)] bg-secondary text-white font-thin p-10 space-y-10 xl:pr-16 xl:py-14 `
                )}
            >
                {children}
            </div>
        </div>
    );
}
