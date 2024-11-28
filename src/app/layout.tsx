import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

import Header from "@/components/header/header.component";
import Footer from "@/components/footer/footer.component";

export const metadata: Metadata = {
    title: "Klu Estate",
    description: "Sprzeda i wynajem nieruchomości",
};

const mozaicGeoVariable = localFont({
    src: [
        {
            path: "./fonts/mozaic-geo.woff2",
            weight: "100 900", // Support full weight range
            style: "normal",
        },
    ],
    variable: "--font-mozaic", // Add CSS variable
    display: "swap",
    preload: true,
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={mozaicGeoVariable.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
