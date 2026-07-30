import UserNavbar from "../_components/user-navbar";
import ApplicationTable from "./_components/application-table";

export default function Page() {
    return (
        <div className="min-h-screen bg-linear-to-br from-blue-950 via-blue-900 to-blue-800">
            <UserNavbar />
            <ApplicationTable/>
        </div>
    );
}