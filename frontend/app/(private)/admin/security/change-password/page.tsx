import ChangePasswordPage from "@/app/(private)/_components/change-password-form";
import AdminNavbar from "../../_components/admin-navbar";

export default function Page() {
    return (
        <div className="min-h-screen bg-linear-to-br from-blue-950 via-blue-900 to-blue-800">
            <AdminNavbar />
            <ChangePasswordPage />
        </div>
    );
}