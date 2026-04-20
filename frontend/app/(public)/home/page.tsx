import NavBar from "../_components/navbar";
import HeroSection from "./_components/hero-section";
import JourneySection from "./_components/journey-section";
import DestinationsSection from "./_components/destinations-section";
import Footer from "../_components/footer";
import CTASection from "./_components/cta-section";

export default function HomePage() {
    return (
        <div>
            <NavBar/>
            <HeroSection/>
            <JourneySection/>
            <DestinationsSection/>
            <CTASection/>
            <Footer/>
        </div>
    );
}