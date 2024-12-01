"use client";

import { PropsWithChildren } from "react";
import { motion } from "framer-motion";

import {
    LeftImgColumn,
    RightImgColumn,
} from "../card/two-column-card.component";
import { SectionHeading } from "../heading/section-heading.component";
import SectionWrapper from "./section-wrapper.component";

export default function SalesAndRent() {
    const imgData1 = {
        src: "/sales_and_rent.webp",
        alt: "Sales and rent",
        width: 442,
        height: 659,
    };

    const imgData2 = {
        src: "/sales_and_rent_2.webp",
        alt: "Sales and rent",
        width: 733,
        height: 550,
    };
    return (
        <SectionWrapper id="sale">
            <SectionHeading className="">SPRZEDAŻ I WYNAJEM</SectionHeading>
            <CardWrapper>
                <RightImgColumn img={imgData1}>
                    <>
                        <p>
                            Agencja Klu Estate specjalizuje się w profesjonalnym
                            pośrednictwie w obrocie nieruchomościami, oferując
                            usługi o najwyższej jakości, które są dostosowane do
                            specyficznych potrzeb Klientów. Dzięki rozbudowanej
                            ofercie usług dodatkowych, zapewniamy pełne wsparcie
                            w procesie sprzedaży i wynajmu.
                        </p>
                        <p>
                            Naszym celem jest nie tylko sprawna i profesjonalna
                            realizacja transakcji, ale także zapewnienie
                            Klientom doskonałej jakości obsługi. Nasz zespół
                            ekspertów dokonuje rzetelnej wyceny nieruchomości
                            oraz przeprowadza szczegółową analizę dokumentacji,
                            co pozwala na precyzyjne zrozumienie sytuacji
                            prawnej i finansowej. Dodatkowo, oferujemy porady
                            dotyczące przygotowania nieruchomości pod względem
                            technicznym i estetycznym, co znacząco wpływa na
                            atrakcyjność oferty.
                        </p>
                    </>
                </RightImgColumn>
                <LeftImgColumn img={imgData2}>
                    <p>
                        Profesjonalnie zajmujemy się przygotowaniem
                        merytorycznym ofert, co ma kluczowe znaczenie dla
                        skutecznej promocji. Nasze działania w zakresie
                        marketingu i sprzedaży są dynamiczne i oparte na
                        sprawdzonych metodach, co gwarantuje efektywność i
                        szybkie rezultaty.
                    </p>
                    <p>
                        Koszt kompleksowej obsługi jest uzależniony od wielu
                        czynników, takich jak wartość nieruchomości, jej typ,
                        złożoność prawna oraz liczba zaangażowanych
                        specjalistów.
                    </p>
                </LeftImgColumn>
            </CardWrapper>
        </SectionWrapper>
    );
}

function CardWrapper({ children }: PropsWithChildren<unknown>) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 md:space-y-10 lg:space-y-20"
        >
            {children}
        </motion.div>
    );
}
