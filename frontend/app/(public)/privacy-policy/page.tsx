import Footer from "../_components/footer";
import NavBar from "../_components/navbar";
import PrivacyPolicyPage from "./_components/privacy-policy";

export default function Page() {
    return (
        <div>
            <NavBar/>
            <PrivacyPolicyPage/>
            <Footer/>
        </div>
    );
}