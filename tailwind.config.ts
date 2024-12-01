import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontSize: {
                base: ["12px", "16px"],
                md: ["20px", "24px"],
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: "var(--primary)",
                secondary: "var(--secondary)",
                text: "var(--text)",
                textHeading: "var(--text-heading)",
                textSecondary: "var(--text-secondary)",
            },
            screens: {
                xs: "360px",
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                "2xl": "1536px",
            },
        },
    },
    plugins: [require("tailwind-hamburgers"), require("tailwindcss-animated")],
} satisfies Config;
