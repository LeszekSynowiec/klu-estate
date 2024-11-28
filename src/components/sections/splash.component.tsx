import { Video } from "@/components//video/video.component";

export default function Splash() {
    return (
        <section className="relative w-full min-h-svh h-svh overflow-hidden">
            <Video />
            <div className="max-w-[1420px] mx-auto relative z-20 h-full flex items-end p-6 md:py-10 md:px-12">
                <h1 className="text-2xl text-white font-thin wght-thin font md:text-5xl xl:text-[90px]">
                    SPRZEDAŻ I WYNAJEM <br />
                    <span className="text-4xl font-black md:text-7xl xl:text-[90px]">
                        NIERUCHOMOŚCI
                    </span>
                </h1>
            </div>
        </section>
    );
}
