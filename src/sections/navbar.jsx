import { Coffee } from "lucide-react";
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
          <Coffee className="text-amber-800" />
          Aroma Sriwijaya
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
        <a className="btn">Pesan Sekarang!</a>
      </div>
    </div>
  );
}
