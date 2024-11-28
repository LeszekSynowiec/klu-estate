import { About } from "@/components/sections/about.component";
import { Contact } from "@/components/sections/contact.component";
import Management from "@/components/sections/management.component";
import SalesAndRent from "@/components/sections/sales-and-rent.component";
import Splash from "@/components/sections/splash.component";

export default function Home() {
    return (
        <main className="">
            <Splash />
            <SalesAndRent />
            <Management />
            <About />
            <Contact />
        </main>
    );
}
