import { ChefHat, Coffee } from "lucide-react";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
            <Menu />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow lg:hidden"
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
        <a className="font-medium text-xl flex items-center gap-2">
          👨🏻‍🍳👩🏻‍🍳ANusa Resto
        </a>
      </div>
      <div className=" hidden md:dropdown dropdown-hover hover:cursor-pointer w-35 ">
        <div
          tabIndex={0}
          role="button"
          className="btn hover:bg-orange-900 hover:rounded-box hover:text-white m-1 "
        >
          <span className="hidden lg:inline ">Tentang Kami</span>
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow "
        >
          <li>
            <a className="hover:bg-orange-900 hover:rounded-box hover:text-white">
              Beverages
            </a>
          </li>
          <li>
            <a className="hover:bg-orange-900 hover:rounded-box hover:text-white">
              Food
            </a>
          </li>
          <li>
            <a className="hover:bg-orange-900 hover:rounded-box hover:text-white">
              Drinks
            </a>
          </li>
          <li>
            <a className="hover:bg-orange-900 hover:rounded-box hover:text-white">
              Other
            </a>
          </li>
        </ul>
      </div>
      <div className=" hidden md:dropdown dropdown-hover w-35">
        <div
          tabIndex={0}
          role="button"
          className="btn btn m-1 hover:bg-orange-900 hover:rounded-box hover:text-white m-1"
        >
          <span className="hidden lg:inline">Kontak Kami</span>
        </div>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow ">
          <li>
            <a className="hover:bg-orange-900:rounded-box hover:text-white">
              {" "}
              Whatsap
            </a>
          </li>
          <li>
            <a className="hover:bg-orange-900 hover:rounded-box hover:text-white">
              Email
            </a>
          </li>
          <li>
            <a>Phone</a>
          </li>
        </ul>
      </div>
      <div className="hidden md:dropdown dropdown-hover">
        <div
          tabIndex={0}
          role="button"
          className="btn hover:bg-orange-900 hover:rounded-box hover:text-white m-1 btn m-1 "
        >
          <span className="hidden lg:inline">Menu</span>
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow "
        >
          <li>
            <a className="hover:bg-orange-900 hover:rounded-box hover:text-white">
              Beverages
            </a>
          </li>
          <li>
            <a className="hover:bg-orange-900 hover:rounded-box hover:text-white">
              Food
            </a>
          </li>
          <li>
            <a className="hover:bg-orange-900 hover:rounded-box hover:text-white">
              Drinks
            </a>
          </li>
          <li>
            <a className="hover:bg-orange-900 hover:rounded-box hover:text-white">
              Other
            </a>
          </li>
        </ul>
      </div>
      <div className="hidden md:dropdown dropdown-hover">
        <div
          tabIndex={0}
          role="button"
          className="btn hover:bg-orange-900 hover:rounded-box hover:text-white m-1 btn m-1 "
        >
          <span className="hidden lg:inline">Tentang Kami</span>
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow "
        >
          <li>
            <a className="hover:bg-orange-900 hover:rounded-box hover:text-white">
              Instagram
            </a>
          </li>
          <li>
            <a className="hover:bg-orange-900 hover:rounded-box hover:text-white">
              TikTok
            </a>
          </li>
          <li>
            <a className="hover:bg-orange-900 hover:rounded-box hover:text-white">
              WhattApp
            </a>
          </li>
          <li>
            <a className="hover:bg-orange-900 hover:rounded-box hover:text-white">
              Email
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn hover:bg-orange-900 hover:rounded-box hover:text-white">
          Pesan Sekarang!
        </a>
      </div>
    </div>
  );
}