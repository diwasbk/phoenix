import Footer from "../_components/footer";
import NavBar from "../_components/navbar";
import DestinationsSection from "./_components/destinations-section";

export default function Page() {
    return (
        <div>
            <NavBar />
            <DestinationsSection />
            <Footer />
        </div>
    );
}