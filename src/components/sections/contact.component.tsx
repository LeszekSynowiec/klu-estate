"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import { SectionHeading } from "../heading/section-heading.component";
import SectionWrapper from "./section-wrapper.component";

export function Contact() {
    return (
        <SectionWrapper id="contact">
            <SectionHeading className="text-center">Kontakt</SectionHeading>
            <ContactContent />
        </SectionWrapper>
    );
}

function ContactContent() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-10"
        >
            <p>
                Zapraszamy do kontaktu. Chętnie udzielimy szczegółowych
                informacji na temat naszej działalności oraz przedstawimy, jak
                nasze usługi mogą odpowiadać Państwa oczekiwaniom. Zespół
                ekspertów jest gotowy, aby omówić indywidualne warunki
                współpracy i dostosować ofertę do potrzeb Klienta.
            </p>
            <div className="md:flex md:gap-10 text-left pt-10">
                <p className="mb-10 text-center md:basis-1/2 md:text-left md:mb-0">
                    Czekamy na Państwa wiadomość i z przyjemnością ustalimy
                    szczegóły, które pozwolą nam wspólnie zrealizować zamierzony
                    cel.
                </p>
                <div className="bg-secondary p-10 md:basis-1/2 space-y-4  *:text-xl text-white font-thin">
                    <a className="flex gap-2 " href="tel:+48512585375">
                        <Image
                            alt="phone"
                            className="w-6 h-6"
                            src="/phone-icon.svg"
                            width={24}
                            height={24}
                        />
                        +48 512 585 375
                    </a>
                    <a
                        className="flex gap-2 "
                        href="mailto:biuro@klu-estate.pl"
                    >
                        <Image
                            alt="email"
                            className="w-6 h-6"
                            src="/mail-icon.svg"
                            width={24}
                            height={24}
                        />{" "}
                        biuro@klu-estate.pl
                    </a>
                    <p className="">NIP: 1234576834213 </p>
                    <p>REGON: 1234576834213 </p>
                </div>
            </div>
        </motion.div>
    );
}
