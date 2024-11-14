import { NavLink } from "react-router-dom";

export function Menu() {
  return (
    <aside className="w-[300px]">
      <ul className="p-4 flex flex-col gap-4">
        <li className="w-full px-4 rounded">
          <NavLink
            to="/store"
            className={({ isActive }) =>
              `w-full block p-4 rounded ${isActive ? "bg-pink-500" : "bg-zinc-900"}`
            }
          >
            Lojas
          </NavLink>
        </li>

        <li className="w-full px-4 rounded">
          <NavLink
            to="/product"
            className={({ isActive }) =>
              `w-full block p-4 rounded ${isActive ? "bg-pink-500" : "bg-zinc-900"}`
            }
          >
            Produtos
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}
