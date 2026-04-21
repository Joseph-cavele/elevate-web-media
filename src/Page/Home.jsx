import { MarketingCards } from "../Components/MarketingCards";
import { AboutUs } from "../Components/Sections/About";
import { Achievement } from "../Components/Sections/Achievement";
import ContactForm from "../Components/Sections/Contact";
import { CtaSection } from "../Components/Sections/CTASection";
import { Features } from "../Components/Sections/Features";
import { Hero } from "../Components/Sections/Hero";
import { CompaniesLogos } from "../Components/Sections/Logomarqueen";
import { Navbar } from "../Components/Sections/Navbar";
import TeamSection from "../Components/Sections/OurTeam";
import { Services } from "../Components/Sections/Services";
import Testimonials from "../Components/Sections/Testimonials";
import { TopBar } from "../Components/Sections/TopBar";

export function HomePage() {
    return (
        <div className="space-y-20 mb-16"> {/* Added consistent spacing and bottom margin */}
            <Hero />
            <CtaSection />
            <AboutUs />
            <Features />
            <Achievement />
            <Services />
            <TeamSection />
            <Testimonials />
            <ContactForm />
        </div>
    );
}