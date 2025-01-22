import Image from "next/image";
import Link from "next/link";

import { Category } from "@/modules/core/types";
import { CategoryList } from "@/modules/shared/components/ui/category-list";
import { HamburgerMenuIcon } from "@/modules/shared/icons/hamburger-menu-icon";
import { auth0 } from "@/modules/core/lib/auth0";

interface Props {
  categories: Category[];
}

export const Header = async ({ categories = [] }: Props) => {
  const session = await auth0.getSession();
  const user = session?.user;

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Logo de Osnet" width={72} height={50} />
          </Link>
          <div className="flex items-center lg:order-2">
            {user ? (
              <a
                href="/dashboard"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Ir al dashboard
              </a>
            ) : (
              <a
                href="/auth/login"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Iniciar sesión
              </a>
            )}
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal main menu</span>
              <HamburgerMenuIcon />
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            {/* CategoryList */}
            <CategoryList categories={categories} />
          </div>
        </div>
      </nav>
    </header>
  );
};
