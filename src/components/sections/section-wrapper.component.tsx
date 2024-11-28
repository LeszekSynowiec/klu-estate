export default function SectionWrapper({
    children,
    id,
}: Readonly<{ children: React.ReactNode; id: string }>) {
    return (
        <section id={id} className="px-4 py-10 md:px-10 md:py-20 ">
            <div className="max-w-[520px] md:max-w-[1300px] mx-auto w-full">
                {children}
            </div>
        </section>
    );
}
