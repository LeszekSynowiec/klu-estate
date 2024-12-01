"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { SectionHeading } from "../heading/section-heading.component";
import SectionWrapper from "./section-wrapper.component";

export default function Management() {
    return (
        <SectionWrapper id="management">
            <SectionHeading className="lg:text-right">
                Zarządzanie <br className="hidden lg:block" /> Nieruchomościami
            </SectionHeading>
            <ManagementContent />
        </SectionWrapper>
    );
}

function ManagementContent() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col-reverse gap-10 lg:flex-row"
        >
            <Image
                width={790}
                height={521}
                alt="Zarządzanie nieruchomościami"
                src="/real_estate_management.webp"
            />
            <p className="lg:max-w-[500px]">
                Oferujemy kompleksowe usługi zarządzania nieruchomościami, które
                są dostosowane &nbsp;potrzeb Klientów. Posiadamy licencje Zarządców
                Nieruchomości. Nasze doświadczenie&nbsp;zaangażowanie w
                zarządzaniu aktywami zapewniają Klientom pełen komfort
                i&nbsp;bezpieczeństwo.
                <br />
                <br />
                Zarządzamy zarówno nieruchomościami mieszkalnymi
                i&nbsp;komercyjnymi, gwarantując pełną transparentność w
                działaniu i&nbsp;bezpieczeństwo obiektu.
            </p>
        </motion.div>
    );
}
