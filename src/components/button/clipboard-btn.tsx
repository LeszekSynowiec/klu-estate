"use client";

import { useState } from "react";

import { cn } from "@/utils/utils";

export default function ClipboardBtn({
    text,
    className,
}: Readonly<{
    text: string;
    className?: string;
}>) {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button
            className={cn(" text-white hover:underline ", className)}
            onClick={copyToClipboard}
        >
            {copied ? "Skopiowano" : text}
        </button>
    );
}
