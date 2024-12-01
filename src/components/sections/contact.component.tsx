"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import { SectionHeading } from "../heading/section-heading.component";
import SectionWrapper from "./section-wrapper.component";
import EmailButton from "../button/email-btn";

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
                Zapraszamy do&nbsp;kontaktu. Chętnie udzielimy szczegółowych
                informacji na temat naszej działalności oraz przedstawimy, jak
                nasze usługi mogą odpowiadać Państwa oczekiwaniom. Zespół
                ekspertów jest gotowy, aby omówić indywidualne warunki
                współpracy i&nbsp;dostosować ofertę do&nbsp;potrzeb Klienta.
            </p>
            <div className="md:flex md:gap-10 text-left pt-10">
                <p className="mb-10 text-center md:basis-1/2 md:text-left md:mb-0">
                    Czekamy na Państwa wiadomość i&nbsp;z przyjemnością ustalimy
                    szczegóły, które pozwolą nam wspólnie zrealizować zamierzony
                    cel.
                </p>
                <div className="bg-secondary p-10 md:basis-1/2 space-y-4 *:text-base lg:*:text-xl text-white font-thin">
                    <a className="flex gap-2 " href="tel:+48512585375">
                        <Image
                            alt="phone"
                            className="w-4 h-4 lg:w-6 lg:h-6"
                            src="/phone-icon.svg"
                            width={24}
                            height={24}
                        />
                        +48 512 585 375
                    </a>
                    <EmailButton />
                    <p className="">NIP: 6772515291 </p>
                    <p>REGON: 529562926 </p>
                </div>
            </div>
        </motion.div>
    );
}
