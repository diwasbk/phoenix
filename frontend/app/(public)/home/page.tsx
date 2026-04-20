import NavBar from "../_components/navbar";
import HeroSection from "./_components/hero-section";
import JourneySection from "./_components/journey-section";
import DestinationsSection from "./_components/destinations-section";

export default function HomePage() {
    return (
        <div>
            <NavBar/>
            <HeroSection/>
            <JourneySection/>
            <DestinationsSection/>
        </div>
    );
}