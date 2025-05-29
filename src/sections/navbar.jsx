import { Utensils } from "lucide-react";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <Menu />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Beranda</a>
            </li>
            <li>
              <a>Tentang Kami</a>
            </li>
            <li>
              <a>Produk Kami</a>
            </li>
            <li>
              <a>Kontak Kami</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl flex items-center gap-2">
          <Utensils className="text-amber-800" />
          ANusa Resto
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Beranda</a>
          </li>
          <li>
            <a>Tentang Kami</a>
          </li>
          <li>
            <a>Produk Kami</a>
          </li>
          <li>
            <a>Kontak Kami</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Order Now!</a>
      </div>
      <div className="navbar bg-orange-100 shadow-sm p-1 min-h-8 h-10">
  <div className="flex-1">
    <a className="btn btn-ghost text-sm">NUSANTARA</a>
  </div>
  <div className="flex gap-2">
    <input type="text" placeholder="Search" className="input input-sm input-bordered w-24 md:w-48" />
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="kafe.jpg" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
  </div>
    </div>
  );
}
