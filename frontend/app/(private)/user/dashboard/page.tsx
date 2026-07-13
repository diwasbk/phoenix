import UserNavbar from "../_components/user-navbar";
import UserDashboardPage from "./_components/user-dashboard";

export default function Page() {
    return (
        <div className="min-h-screen bg-linear-to-br from-blue-950 via-blue-900 to-blue-800">
            <UserNavbar />
            <UserDashboardPage/>
        </div>
    );
}