"use client";

import { RiNotification2Line, RiArrowDownSLine, RiSettings3Line, RiLogoutCircleRLine } from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
//import { getServerSession } from "next-auth";
//import { authOptions } from "@/lib/auth";

import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import Link from "next/link";
import { signOut } from "next-auth/react";

interface Props {
  name: string;
}

const Header = ({ name }: Props) => {
  return (
    <div className="h-[7vh] md:h-[10vh] border-b border-secondary-100 p-8 flex items-center justify-end">
      <nav className="flex items-center gap-x-2">
        <Menu
          menuButton={<MenuButton className="relative hover:bg-secondary-100 p-2 rounded-lg transition-colors">
            <RiNotification2Line />
            <span className="absolute -top-0 -right-0 box-content bg-primary py-0.5 px-[5px] text-black rounded-full text-[8px] font-bold">2</span>
          </MenuButton>}
          transition
          menuClassName="bg-secondary-100 p-4">
          <MenuItem className="text-gray-300 hover:bg-secondary-900 transition-colors rounded-lg">
            Opción 1
          </MenuItem>
        </Menu>
        <Menu
          menuButton={<MenuButton className="flex items-center gap-x-2 hover:bg-secondary-100 py-2 px-4 rounded-lg transition-colors">
            <img src="https://img.freepik.com/vector-gratis/avatar-personaje-empresario-aislado_24877-60111.jpg" className="w-6 h-6 object-cover rounded-full" />
            <span>{name}</span>
            <RiArrowDownSLine />
          </MenuButton>}
          menuClassName="bg-secondary-100 p-4"
          transition>
          <MenuItem className="text-gray-300 hover:bg-secondary-900 transition-colors rounded-lg">
            <Link href="/settings" className="flex items-center gap-x-4">
              <img src="https://img.freepik.com/vector-gratis/avatar-personaje-empresario-aislado_24877-60111.jpg" className="w-8 h-8 object-cover rounded-full" />
              <div className="flex flex-col text-sm">
                <span>{name}</span>
                <span className="text-gray-500">Nombre de usuario</span>
              </div>
            </Link>
          </MenuItem>
          <hr className="my-4 border-gray-500" />
          <MenuItem className="text-gray-300 hover:bg-secondary-900 transition-colors rounded-lg">
            <Link href="/profile" className="flex items-center gap-x-4">
              <RiSettings3Line /> Configuración
            </Link>
          </MenuItem>
          <MenuItem className="text-gray-300 hover:bg-secondary-900 transition-colors rounded-lg">
            <button
              onClick={() => signOut({
                redirect: true,
                callbackUrl: `${window.location.origin}/sign-in`
              })}
              className="flex items-center gap-x-4"
            >
              <RiLogoutCircleRLine /> Cerrar Sesión
            </button>
          </MenuItem>
        </Menu>
      </nav>
    </div>
  );
};

export default Header;