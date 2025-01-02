import { X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usestorePopup } from "@/components/desktop/navbar/store";

interface Props {
  setIsOpen: (value: boolean) => void;
  isOpen: boolean;
}

export default function MobileSidebar({ setIsOpen, isOpen }: Props) {
  const [mounted, setMounted] = useState(false);
  const { dataUser, setDataUser } = usestorePopup((state) => state);
  const {isFocused, setIsFocused} = usestorePopup((state) => state);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* background opacity */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${
          isOpen ? "opacity-75" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* sidebar */}
      <nav
        className={`z-50 fixed w-full top-0 left-0 h-screen overflow-hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex">
          <div
            className={`w-full bg-white transform transition-transform duration-300 ease-in-out ${
              mounted && isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex flex-col p-3 gap-5 text-slate-600 font-medium">
              <Link
                onClick={() => {
                  setIsFocused(false)  
                  setIsOpen(false)
                }}
                href={"/"}
                className="flex gap-2"
              >
                <Image alt="Home" width={25} height={25} src={"/home.svg"} />{" "}
                Home
              </Link>
              <Link
                onClick={() => setIsOpen(false)}
                href={`${dataUser.success? '#' : '/login'}`}
                className="flex gap-2"
              >
                <Image alt="Login" width={25} height={25} src={"/login.svg"} />
                {dataUser.success? 'My Account' : 'Login / Register'}
              </Link>
              <Link
                onClick={() => setIsOpen(false)}
                href={"#"}
                className="flex gap-2"
              >
                <Image
                  alt="My Booking"
                  width={25}
                  height={25}
                  src={"/booking.svg"}
                />
                My Booking
              </Link>
              <Link
                onClick={() => setIsOpen(false)}
                href={"#"}
                className="flex gap-2"
              >
                <Image
                  alt="Help Center"
                  width={25}
                  height={25}
                  src={"/help-center.svg"}
                />
                Help Center
              </Link>
              <Link
                onClick={() => setIsOpen(false)}
                href={"#"}
                className="flex gap-2"
              >
                <Image
                  alt="Contact Us"
                  width={25}
                  height={25}
                  src={"/contact-us.svg"}
                />
                Contact Us
              </Link>
              <Link
                onClick={() => setIsOpen(false)}
                href={"#"}
                className="flex gap-2"
              >
                <Image
                  alt="Contact Us"
                  width={25}
                  height={25}
                  src={"/download.svg"}
                />
                Download App
              </Link>
              <hr className="-mx-3 h-px bg-gray-200 border-0 dark:bg-gray-700" />
            </div>
          </div>
          <div className=" h-screen flex items-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
              className={`transform transition-transform duration-300 ease-in-out ${
                mounted && isOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <X className="w-[50px] h-[50px] text-slate-100 opacity-40 transition-opacity" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
