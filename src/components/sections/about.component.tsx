"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "../heading/section-heading.component";
import SectionWrapper from "./section-wrapper.component";

export function About() {
    return (
        <SectionWrapper id="about">
            <SectionHeading className="text-center">O nas</SectionHeading>
            <AboutContent />
        </SectionWrapper>
    );
}

function AboutContent() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-10"
        >
            <p>
                Agencja Klu Estate specjalizuje się w&nbsp;pośrednictwie w&nbsp;obrocie
                nieruchomościami oraz ich profesjonalnym zarządzaniu. Dzięki
                wieloletniemu doświadczeniu i&nbsp;pasji do&nbsp;branży nieruchomości,
                jesteśmy w&nbsp;stanie dostarczać Klientom usługi na najwyższym
                poziomie. Działamy lokalnie, co pozwala nam na dokładne
                zrozumienie specyfiki rynku.
            </p>
            <p>
                Klienci mogą liczyć na kompleksowe wsparcie na każdym etapie
                transakcji – od wstępnych oględzin nieruchomości, poprzez
                negocjacje warunków umowy, aż po pomoc w&nbsp;finalizacji
                dokumentacji. Naszym celem jest nie tylko skuteczna realizacja
                zleceń, ale także budowanie długotrwałych relacji opartych na
                zaufaniu i&nbsp;profesjonalizmie.
            </p>
            <p>
                Zachęcamy do&nbsp;kontaktu i&nbsp;współpracy. Jesteśmy przekonani, że
                nasze doświadczenie oraz zaangażowanie spełnią Państwa
                oczekiwania.
            </p>
        </motion.div>
    );
}
