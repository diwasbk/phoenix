import ChangePasswordPage from "../../../_components/change-password-form";
import UserNavbar from "../../_components/user-navbar";

export default function Page() {
    return (
        <div className="min-h-screen bg-linear-to-br from-blue-950 via-blue-900 to-blue-800">
            <UserNavbar />
            <ChangePasswordPage/>
        </div>
    );
}