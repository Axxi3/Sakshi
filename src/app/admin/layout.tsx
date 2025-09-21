'use client';

import { usePathname } from "next/navigation";
import AdminSidebar from "../component/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isSigninPage = pathname === "/admin/signin";

  // If it's /admin/signin → render children only (no sidebar, no header)
  if (isSigninPage) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Fixed Sidebar */}
      <AdminSidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Optional Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-gray-800">
              Admin Dashboard
            </h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Profile</span>
            </div>
          </div>
        </header>

        {/* Scrollable Main Content */}
        <main className="flex-1 p-6 overflow-x-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
