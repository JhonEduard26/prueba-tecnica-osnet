import { Navbar } from "@/modules/dashboard/components/layout/navbar";
import { Sidebar } from "@/modules/dashboard/components/layout/sidebar";
import { auth0 } from "@/modules/core/lib/auth0";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth0.getSession();

  if (!session) {
    redirect('/auth/login')
  }

  return (
    <>
      <Navbar />
      <Sidebar />

      <div className="p-4 sm:ml-64">{children}</div>
    </>
  );
}
