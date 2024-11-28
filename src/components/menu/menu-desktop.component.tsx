import Link from "next/link";

export default function MenuDesktop() {
    return (
        <nav className="hidden md:flex gap-8 items-center text-xl ">
            <div className="relative group/menu">
                <Link
                    href="#sale"
                    className="hover:text-secondary transition-colors peer"
                    tabIndex={0}
                >
                    Nieruchomości
                </Link>
                <div className="absolute left-0 invisible opacity-0 group-hover/menu:visible group-hover/menu:opacity-100 hover:visible hover:opacity-100 min-w-[240px] bg-white shadow-lg py-2 mt-2 transition-all duration-200">
                    <Link
                        href="#sale"
                        className="block px-4 py-2 hover:bg-secondary hover:text-white transition-colors"
                    >
                        Sprzedaż i Wynajem
                    </Link>

                    <Link
                        href="#management"
                        className="block px-4 py-2 hover:bg-secondary hover:text-white transition-colors"
                    >
                        Zarządzanie
                    </Link>
                </div>
            </div>

            <Link
                href="#about"
                className="hover:text-secondary transition-colors"
            >
                O nas
            </Link>
            <Link
                href="#contact"
                className="hover:text-secondary transition-colors"
            >
                Kontakt
            </Link>
        </nav>
    );
}