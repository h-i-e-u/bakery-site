import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

const LeftBar = () => (
  <aside className="sticky top-16 bg-base-200 min-h-screen w-56 p-6 flex flex-col gap-4">
    <h2 className="text-2xl font-bold mb-6 font-amaranth">Admin Panel</h2>
    <NavLink
      to="/admin/dashboard"
      className={({ isActive }) =>
        `flex items-center gap-2 px-3 py-2 rounded hover:bg-base-300 transition ${
          isActive ? "bg-base-300 font-bold" : ""
        }`
      }
    >
      <Icon icon="mdi:view-dashboard" className="text-xl" />
      Dashboard
    </NavLink>
    <NavLink
      to="/admin/orders"
      className={({ isActive }) =>
        `flex items-center gap-2 px-3 py-2 rounded hover:bg-base-300 transition ${
          isActive ? "bg-base-300 font-bold" : ""
        }`
      }
    >
      <Icon icon="mdi:clipboard-list-outline" className="text-xl" />
      Orders
    </NavLink>
    <NavLink
      to="/admin/customers"
      className={({ isActive }) =>
        `flex items-center gap-2 px-3 py-2 rounded hover:bg-base-300 transition ${
          isActive ? "bg-base-300 font-bold" : ""
        }`
      }
    >
      <Icon icon="mdi:account-group-outline" className="text-xl" />
      Customers
    </NavLink>
    <NavLink
      to="/admin/add-product"
      className={({ isActive }) =>
        `flex items-center gap-2 px-3 py-2 rounded hover:bg-base-300 transition ${
          isActive ? "bg-base-300 font-bold" : ""
        }`
      }
    >
      <Icon icon="mdi:box-variant-closed-add" className="text-xl" />
      Add Product
    </NavLink>
    <NavLink
      to="/admin/settings"
      className={({ isActive }) =>
        `flex items-center gap-2 px-3 py-2 rounded hover:bg-base-300 transition ${
          isActive ? "bg-base-300 font-bold" : ""
        }`
      }
    >
      <Icon icon="mdi:cog-outline" className="text-xl" />
      Settings
    </NavLink>
  </aside>
);

export default LeftBar;
