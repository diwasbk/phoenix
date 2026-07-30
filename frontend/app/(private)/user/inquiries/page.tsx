import UserNavbar from "../_components/user-navbar";
import InquiryTable from "./_components/inquiry-table";

export default function Page() {
    return (
        <div className="min-h-screen bg-linear-to-br from-blue-950 via-blue-900 to-blue-800">
            <UserNavbar />
            <InquiryTable />
        </div>
    );
}
