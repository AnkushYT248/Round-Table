"use client";
import { usePathname } from "next/navigation";

const AdminLayout = ({ children }) => {
  const pathname = usePathname();

  if (pathname === "/protected/admin/login") {
    return <main>
        {children}
    </main>
  }
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <header className="bg-gray-900 text-white p-4 shadow-md border-b border-gray-800 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-wide">Admin Panel</h1>
        <span className="text-xs text-gray-400 font-mono">Round Table</span>
      </header>
      <main className="flex-1 p-6 md:p-10 flex flex-col items-center justify-start">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
