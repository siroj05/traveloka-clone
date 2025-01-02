"use client";
import { Menu, Search } from "lucide-react";
import { useState } from "react";
import MobileSidebar from "./sidebar";
import ButtonAuth from "@/components/button-auth";
import NavbarBottom from "./navbarBottom";
import { usestorePopup } from "@/components/desktop/navbar/store";
import FilterMobile from "./filterMobile";

export default function MobileNavbar() {
  // warna #1BA0E2
  
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { dataUser, setDataUser } = usestorePopup((state) => state);
  
  return (
    <>
      {/* Navbar Atas */}
      <nav
        className={`sticky top-0 z-20 bg-black transition-opacity duration-300 ${
          isOpen && "opacity-10"
        }`}
      >
        <div className="w-full flex bg-color p-2 gap-2">
          <button className="text-white px-2" onClick={() => setIsOpen(true)}>
            <Menu />
          </button>
          {/* filter */}
          <FilterMobile/>
        </div>
      </nav>
      {/* Sidebar */}
      <MobileSidebar setIsOpen={setIsOpen} isOpen={isOpen} />
      {/* Promo Section */}
      <div className="bg-color">
        {!dataUser.success && <p className="text-white text-center text-sm font-semibold">
          Enjoy TravelokaPay and cheaper prices
        </p>}
        <div className="flex justify-center gap-4 p-2">
          {dataUser.success ? (
            <div className="flex justify-between text-white gap-6">
              <div>Silver</div>
              <div className="border-x px-5">Points</div>
              <div>PayLater</div>
            </div>
          ) : (
            <>
              <ButtonAuth
                href="/login"
                className="bg-color text-white text-center"
              >
                Log In
              </ButtonAuth>
              <ButtonAuth
                href="/register"
                className="bg-white text-color text-center"
              >
                Register
              </ButtonAuth>
            </>
          )}
        </div>
      </div>
      {/* Navbar Bawah */}
      <NavbarBottom />
    </>
  );
}
