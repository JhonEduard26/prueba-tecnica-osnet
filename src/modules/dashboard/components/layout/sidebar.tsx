import Link from "next/link";

import { BagIcon } from "@/modules/shared/icons/bag-icon";
import { ChartPieIcon } from "@/modules/shared/icons/chart-pie-icon";
import { LogoutIcon } from "@/modules/shared/icons/logout-icon";

export const Sidebar = () => {
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              href="/dashboard"
              className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
            >
              <ChartPieIcon />
              <span className="ms-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/productos"
              className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
            >
              <BagIcon />
              <span className="flex-1 ms-3 whitespace-nowrap">Productos</span>
            </Link>
          </li>
          <li>
            <a
              href="/auth/logout"
              className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 hover:text-red-500 group"
            >
              <LogoutIcon />
              <span className="flex-1 ms-3 whitespace-nowrap">
                Cerrar sesión
              </span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};
