import DashboardLayout from "../components/dashboard/DashboardLayout";

const mockUser = {
  fullName: "Krianna Asante",
  firstName: "Krianna",
  email: "krianna@company.com",
  phoneNumber: "1112223333",
  initials: "KA",
  companyName: "Company",
  spectrumLevel: 5,
  notificationCount: 3,
};

const DashboardAdvisoryProgram = () => {
  return (
    <DashboardLayout user={mockUser}>
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          Advisory Program
        </h1>
        <div className="bg-white rounded-lg p-8 text-center">
          <p className="text-slate-600">
            Advisory Program page content coming soon...
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardAdvisoryProgram;
