import { auth0 } from "@/modules/core/lib/auth0";
import Image from "next/image";
import Link from "next/link";

export const Navbar = async () => {
  const session = await auth0.getSession();
  const user = session?.user;

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <span className="sr-only">Abrir menú lateral</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
            <a href="/dashboard" className="flex ms-2 md:me-24">
              <Image
                src="/logo.png"
                alt="Logo de Osnet"
                width={80}
                height={40}
              />
            </a>
          </div>
          <div className="flex items-center">
            <div className="flex items-center ms-3">
              <div>
                <button
                  type="button"
                  className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown-user"
                >
                  <span className="sr-only">Abrir menu del usuario</span>
                  <Image
                    className="rounded-full"
                    src={user?.picture || "https://i.pravatar.cc"}
                    alt={user?.nickname || "Sin nombre"}
                    width={32}
                    height={32}
                  />
                </button>
              </div>
              <div
                className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow"
                id="dropdown-user"
              >
                <div className="px-4 py-3" role="none">
                  <p className="text-sm text-gray-900" role="none">
                    {user?.nickname || "Sin nombre"}
                  </p>
                  <p
                    className="text-sm font-medium text-gray-900 truncate"
                    role="none"
                  >
                    {user?.email || "Sin correo"}
                  </p>
                </div>
                <ul className="py-1" role="none">
                  <li>
                      <Link
                        href="/"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Ir a la página principal
                      </Link>
                    </li>
                  <li>
                    <a
                      href="/auth/logout"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Cerrar sesión
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
