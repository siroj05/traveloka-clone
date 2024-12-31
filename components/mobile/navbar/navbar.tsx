"use client";
import { Menu, Search } from "lucide-react";
import { useState } from "react";
import MobileSidebar from "./sidebar";
import ButtonAuth from "@/components/button-auth";
export default function MobileNavbar() {
  // warna #1BA0E2
  const [search, setSearch] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <nav
        className={`sticky top-0 z-20 bg-black transition-opacity duration-300 ${
          isOpen && "opacity-10"
        }`}
      >
        <div className="w-full flex bg-color p-2 gap-2">
          <button className="text-white px-2" onClick={() => setIsOpen(true)}>
            <Menu />
          </button>
          <div className="relative w-full">
            <Search className="text-slate-500 absolute h-4 w-4 top-2 left-2" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-sm pl-8 pr-8 p-1 focus:outline-none focus:ring-2 focus:ring-sky-300 font-medium"
              type="text"
            />
          </div>
          <div className="absolute right-4 top-4">
            {search.length > 0 && (
              <button
                onClick={() => setSearch("")}
                className="bg-slate-600 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center"
              >
                x
              </button>
            )}
          </div>
        </div>
      </nav>
      <MobileSidebar setIsOpen={setIsOpen} isOpen={isOpen} />
      <div className="bg-color">
        <p className="text-white text-center text-sm font-semibold">
          Enjoy TravelokaPay and cheaper prices
        </p>
        <div className="flex justify-center gap-4 p-2">
          <ButtonAuth className="bg-color text-white text-center">
            Log In
          </ButtonAuth>
          <ButtonAuth className="bg-white text-color text-white text-center">
            RegIster
          </ButtonAuth>
        </div>
      </div>
    </>
  );
}
