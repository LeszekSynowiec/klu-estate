"use client";

import { cn } from "@/utils/utils";
import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";

export default function MenuMobile() {
    const [opened, setOpened] = useState(false);

    return (
        <div className="lg:hidden">
            <div
                onClick={() => setOpened(!opened)}
                className={classNames(
                    `tham tham-e-squeeze tham-w-6 relative z-100`,
                    {
                        "tham-active fixed z-50": opened,
                    }
                )}
            >
                <div className="tham-box">
                    <div className="tham-inner" />
                </div>
            </div>
            {opened && <MenuMobileContent closeMenu={() => setOpened(false)} />}
        </div>
    );
}

function MenuMobileContent({ closeMenu }: { closeMenu: () => void }) {
    const [isOpen, setIsOpen] = useState(false);

    function handleScrollAnimation() {
        setIsOpen(true);
        setTimeout(() => {
            closeMenu();
        }, 400);
    }
    return (
        <div
            className={cn(
                "fixed animate-once animate-duration-[400ms] animate-ease-in-out top-0 left-0 w-full h-full bg-white z-40",
                { "animate-fade-right": !isOpen },
                { "animate-fade-right-reverse": isOpen }
            )}
        >
            <nav className="flex flex-col items-center justify-center h-full space-y-10">
                <Link
                    onClick={() => handleScrollAnimation()}
                    title="Sprzedaż i wynajem nieruchomości"
                    href="#sale"
                >
                    Sprzedaż i wynajem nieruchomości
                </Link>
                <Link
                    onClick={closeMenu}
                    title="Zarządzanie nieruchomościami"
                    href="#management"
                >
                    Zarządzanie nieruchomościami
                </Link>
                <Link onClick={closeMenu} title="O nas" href="#about">
                    O nas
                </Link>
                <Link onClick={closeMenu} title="Kontakt" href="#contact">
                    Kontakt
                </Link>
            </nav>
        </div>
    );
}
