import SecurityPage from "../../_components/security-page";
import UserNavbar from "../_components/user-navbar";

export default function Page() {
    return (
        <div className="min-h-screen bg-linear-to-br from-blue-950 via-blue-900 to-blue-800">
            <UserNavbar />
            <SecurityPage navUrl="/user"/>
        </div>
    );
}