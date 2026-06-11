import type { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import type { DashboardUser } from "../../types/dashboard";

interface DashboardLayoutProps {
  user: DashboardUser;
  children: ReactNode;
}

const DashboardLayout = ({ user, children }: DashboardLayoutProps) => {
  return (
    <div className="flex min-h-screen bg-slate-100 text-slate-900">
      <Sidebar
        fullName={user.fullName}
        email={user.email}
        initials={user.initials}
      />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar
          firstName={user.firstName}
          companyName={user.companyName}
          initials={user.initials}
          spectrumLevel={user.spectrumLevel}
          notificationCount={user.notificationCount}
        />
        <main className="flex-1 overflow-y-auto px-4 py-6 sm:px-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
