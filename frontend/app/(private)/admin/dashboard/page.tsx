import AdminNavbar from "../_components/admin-navbar";
import ApplicationTable from "../applications/_components/application-table";

export default function Page() {
    return (
        <div className="min-h-screen bg-linear-to-br from-blue-950 via-blue-900 to-blue-800">
            <AdminNavbar />
            <ApplicationTable/>
        </div>
    );
}