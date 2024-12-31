'use client'
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import ButtonAuth from "@/components/button-auth";
import { useEffect, useState } from "react";
export default function DesktopNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav className={`z-20 fixed w-full transition-colors duration-300 ${
        isScrolled ? "bg-white text-black" : "bg-transparent text-white"
      }`}>
        <div className=" w-[1300px] mx-auto">
          {/* section 1 */}
          <div className="flex justify-between mx-10 p-2">
            {isScrolled ? <Image
              src="traveloka.svg"
              alt="Background Navbar"
              width={130}
              height={50}
              className="px-2"
            />
              :
              <Image
              src="traveloka-light.svg"
              alt="Background Navbar"
              width={130}
              height={50}
              className="px-2"
            />
          }
            <div className="flex justify-between gap-5">
              <button className={`my-auto flex ${isScrolled ? 'hover:bg-slate-200' : 'hover:bg-sky-900'} py-2 rounded-sm`}>
                <div className="my-auto mx-2 relative w-5 h-5 border-2 border-sky-700 rounded-full overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-red-600" />
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white" />
                </div>
                <div className="flex text-sm">
                  EN | IDR
                  <ChevronDown className={`my-auto h-4 w-4 ${isScrolled && 'text-sky-600'}`} />
                </div>
              </button>
              <button className={`my-auto flex ${isScrolled ? 'hover:bg-slate-200' : 'hover:bg-sky-900'} py-2 rounded-sm`}>
                <div className="mx-2">
                  <Image
                    src="sale.svg"
                    alt="Background Navbar"
                    width={25}
                    height={25}
                  />
                </div>
                <div className="flex text-sm my-auto mx-1">
                  Year End Sale
                </div>
              </button>
              <button className={`my-auto flex ${isScrolled ? 'hover:bg-slate-200' : 'hover:bg-sky-900'} py-2 rounded-sm`}>
                <div className="flex text-sm my-auto mx-2">
                  Support
                  <ChevronDown className={`my-auto h-3 w-3 ${isScrolled && `text-slate-600`}`} />
                </div>
              </button>
              <button className={`my-auto flex ${isScrolled ? 'hover:bg-slate-200' : 'hover:bg-sky-900'} py-2 rounded-sm`}>
                <div className="flex text-sm my-auto mx-2">
                  Partnership
                </div>
              </button>
              <button className={`my-auto flex ${isScrolled ? 'hover:bg-slate-200' : 'hover:bg-sky-900'} py-2 rounded-sm`}>
                <div className="flex text-sm my-auto mx-2">
                  For Corporates
                </div>
              </button>
              <button className={`my-auto flex ${isScrolled ? 'hover:bg-slate-200' : 'hover:bg-sky-900'} py-2 rounded-sm`}>
                <div className="flex text-sm my-auto mx-2">
                  Bookings
                </div>
              </button>
              <div className="flex gap-1">
                <ButtonAuth href={"/login"} className={`text-center my-auto w-[80px]  ${isScrolled ? `border-sky-500 hover:bg-slate-200` : 'border-white hover:bg-sky-900'}`}>
                  Log In
                </ButtonAuth>
                <ButtonAuth href={"/login"} className={`text-center my-auto w-[80px] text-white ${isScrolled ? 'hover:bg-slate-200' : 'hover:bg-sky-900'}  bg-blue-500`}>
                  RegIster
                </ButtonAuth>
              </div>
            </div>
          </div>

          {/* section 2 */}
          <div className={`mx-10 p-2 flex gap-7 ${isScrolled && 'text-slate-500'}`}>
            <div className="flex">
              <button className={`my-auto flex ${isScrolled ? 'hover:bg-slate-200' : 'hover:bg-sky-900'} py-2 rounded-sm`}>
                <div className="flex text-sm font-semibold my-auto px-2">
                  Hotels
                </div>
              </button>
            </div>
            <div className="flex">
              <button className={`my-auto flex ${isScrolled ? 'hover:bg-slate-200' : 'hover:bg-sky-900'} py-2 rounded-sm`}>
                <div className="flex text-sm font-semibold my-auto px-2">
                  Flights
                </div>
              </button>
            </div>
            <div className="flex">
              <button className={`my-auto flex ${isScrolled ? 'hover:bg-slate-200' : 'hover:bg-sky-900'} py-2 rounded-sm`}>
                <div className="flex text-sm font-semibold my-auto px-2">
                  Bus & Travel
                </div>
              </button>
            </div>
            <div className="flex">
              <button className={`my-auto flex ${isScrolled ? 'hover:bg-slate-200' : 'hover:bg-sky-900'} py-2 rounded-sm`}>
                <div className="flex text-sm font-semibold my-auto px-2">
                  Airport Transfer
                </div>
              </button>
            </div>
            <div className="flex">
              <button className={`my-auto flex ${isScrolled ? 'hover:bg-slate-200' : 'hover:bg-sky-900'} py-2 rounded-sm`}>
                <div className="flex text-sm font-semibold my-auto px-2">
                  Car Rental
                </div>
              </button>
            </div>
            <div className="flex">
              <button className={`my-auto flex ${isScrolled ? 'hover:bg-slate-200' : 'hover:bg-sky-900'} py-2 rounded-sm`}>
                <div className="flex text-sm font-semibold my-auto px-2">
                  Things to Do
                </div>
              </button>
            </div>
            <div className="flex">
              <button className={`my-auto flex ${isScrolled ? 'hover:bg-slate-200' : 'hover:bg-sky-900'} py-2 rounded-sm`}>
                <div className="flex text-sm font-semibold my-auto px-2">
                  More
                  <ChevronDown className={`my-auto h-3 w-3 ${isScrolled && `text-slate-600`}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="relative w-full h-[50vh]">
        {/* Konten Overlay */}
        <div className="absolute top-1/4 left-0 w-full h-full z-10">
          <div className="w-[1200px] mx-auto">
            <div className="flex justify-between p-2">
              Hotels
            </div>
            <hr />
          </div>
        </div>

        {/* Background Image */}
        <Image
          src="bgnavbar.svg"
          alt="Background Navbar"
          layout="fill"
          objectFit="cover"
          priority
          className="z-0"
        />
      </div>
    </>
  );
}
