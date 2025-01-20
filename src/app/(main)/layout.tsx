import { Header } from "@/modules/shared/components/layout/header";
import { getCategories } from "@/modules/core/services/fakestore";

export default async function InnerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = await getCategories();
  return (
    <>
      <Header categories={categories} />
      {children}
    </>
  );
}
