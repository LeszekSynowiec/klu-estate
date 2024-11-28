import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const date = new Date().getFullYear();

    return (
        <footer>
            <div className="w-full mx-auto bg-secondary p-10">
                <div className="md:flex justify-between space-y-10 items-center py-4">
                    <Image
                        src="/klu-estate.webp"
                        className="w-[200px] h-[102px]"
                        width={200}
                        height={102}
                        alt="Logo Klu Estate"
                    />
                    <div className="grid grid-cols-1 text-left font-thin md:text-right text-white">
                        <Link href="#sale">
                            Sprzedaż i wynajem nieruchomości
                        </Link>
                        <Link href="#management">
                            Zarządzanie nieruchomościami
                        </Link>
                        <Link href="#about">O nas</Link>
                        <Link href="#contact">Kontakt</Link>
                    </div>
                </div>
                <p className="text-xs text-center text-white ">
                    © {date} Klu Estate. Wszelkie prawa zastrzeżone.
                </p>
            </div>
        </footer>
    );
}
