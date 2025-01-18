import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";

import { Navbar } from "@/modules/dashboard/components/navbar";
import { Sidebar } from "@/modules/dashboard/components/sidebar";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/api/auth/login");
  }

  return (
    <>
      <Navbar />
      <Sidebar />

      <div className="p-4 sm:ml-64">{children}</div>
    </>
  );
}
