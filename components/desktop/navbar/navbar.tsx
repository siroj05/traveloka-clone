'use client'
import Image from "next/image";
import { ChevronDown, Hotel } from "lucide-react";
import ButtonAuth from "@/components/button-auth";
import { useEffect, useState } from "react";
import { NavigationCategory, NavigationTabs } from "./navTabs";
import FilterHotels from "./filter";
import PopupLogin from "../login/popupLogin";
import PopupSuccess from "../login/popupSucces";

export type DataUserModel = {
  username : string,
  success : boolean
}

export default function DesktopNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false)
  const [dataUser, setDataUser] = useState<DataUserModel>({username : '', success : false})

  const togglePopup = () => {
    setIsVisible(!isVisible)
  }

  useEffect(() => {
    if (dataUser.success) {
      setIsSuccess(true);
      setIsVisible(false)
      const timeout = setTimeout(() => {
        setIsSuccess(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [dataUser]);

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
                <ButtonAuth toggle={togglePopup} className={`text-center my-auto w-[80px]  ${isScrolled ? `border-sky-500 hover:bg-slate-200` : 'border-white hover:bg-sky-900'}`}>
                  Log In
                </ButtonAuth>
                <ButtonAuth toggle={togglePopup} className={`text-center my-auto w-[80px] text-white ${isScrolled ? 'hover:bg-slate-200' : 'hover:bg-sky-900'}  bg-blue-500`}>
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
        {/* Nav Tabs */}
        <div className="absolute top-1/4 left-0 w-full h-50 z-10">
          <div className="w-[1200px] mx-auto">
            <NavigationTabs/>
            <hr />
            
            {/* nav category */}
            <div>
              <div className="flex gap-3 my-7 px-2">
                <NavigationCategory/>
              </div>
              {/* filter */}
              <FilterHotels/>
            </div>
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

      {/* popup login / regis */}
      <PopupLogin
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        togglePopup={togglePopup}
        setDataUser={setDataUser}
        dataUser={dataUser}
      />
      <PopupSuccess
        isVisible={isSuccess}
      />

    </>
  );
}
