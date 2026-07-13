import AdminNavbar from "../_components/admin-navbar";
import SecurityPage from "../../_components/security-page";

export default function Page() {
    return (
        <div className="min-h-screen bg-linear-to-br from-blue-950 via-blue-900 to-blue-800">
            <AdminNavbar />
            <SecurityPage navUrl="/admin" />
        </div>
    );
}