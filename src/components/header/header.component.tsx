import Image from "next/image";
import MenuMobile from "../menu/menu-mobile.component";
import MenuDesktop from "../menu/menu-desktop.component";

export default function Header() {
    return (
        <header className="fixed transparent w-full p-4 md:px-10 z-40">
            <div className=" mx-auto flex justify-between items-center">
                <div className="logo">
                    <Image
                        src="/logo.svg"
                        width={240}
                        height={120}
                        className="w-32 sm:w-40 lg:w-72 z-50 relative"
                        alt="Logo Klu Estate"
                        priority
                    />
                </div>
                <MenuDesktop />
                <MenuMobile />
            </div>
        </header>
    );
}
