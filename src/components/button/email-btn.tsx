"use client";
import { useState } from "react";
import Image from "next/image";

// Inside your component:
const EmailButton = () => {
    const [copied, setCopied] = useState(false);
    const email = "biuro@klu-estate.pl";

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    return (
        <button
            onClick={handleCopy}
            className="flex gap-2 hover:underline transition-colors"
        >
            <Image
                alt="email"
                className="w-4 h-4 lg:w-6 lg:h-6"
                src="/mail-icon.svg"
                width={24}
                height={24}
            />
            {copied ? "Skopiowano!" : email}
        </button>
    );
};

export default EmailButton;
