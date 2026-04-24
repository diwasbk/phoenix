import Footer from "../_components/footer";
import NavBar from "../_components/navbar";
import InquiryFormSection from "./_components/inquiry-form-section";

export default function Page() {
    return (
        <div>
            <NavBar />
            <InquiryFormSection />
            <Footer />
        </div>
    );
}