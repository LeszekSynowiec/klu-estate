import { Video } from "@/components//video/video.component";

export default function Splash() {
    return (
        <section className="relative w-full min-h-svh h-svh overflow-hidden">
            <Video />
            <div className="max-w-[1420px] mx-auto relative z-20 h-full flex items-end p-2 min-w-[360px]:p-4 sm:p-6 md:py-10 md:px-12">
                <div className="lg:flex lg:justify-between w-full xs:pl-6 sm:pl-0">
                    <h1 className="text-2xl text-white font-thin wght-thin font md:text-5xl xl:text-[72px] ">
                        BIURO <br />
                        <span className="text-4xl font-black md:text-5xl xl:text-[72px] ">
                            NIERUCHOMOŚCI
                        </span>
                    </h1>
                    <h2 className="text-2xl lg:text-right text-white font-thin wght-thin font md:text-5xl xl:text-[72px] ">
                        ZARZĄDZANIE{" "}
                        <span className="text-4xl font-black md:text-5xl xl:text-[72px] ">
                            <br /> NAJEM
                        </span>{" "}
                    </h2>
                </div>
            </div>
        </section>
    );
}
