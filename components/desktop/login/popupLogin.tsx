import { X } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
  setIsVisible : (value : boolean) => void
  isVisible : boolean
  togglePopup : () => void
}

const PopupLogin = ({
  setIsVisible,
  isVisible,
  togglePopup
}:Props) => {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  useEffect(() => {
    
  })

  return (
    <div className="relative">
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={togglePopup}
      >
        {/* Popup */}
        <div
          className={`fixed left-1/2 transform -translate-x-1/2 bg-white rounded-lg p-6 max-w-md w-full md:w-auto transition-all duration-300 ${
            isVisible ? "top-1/2 -translate-y-1/2 opacity-100" : "top-full opacity-100"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative mb-4 w-[380px]">
            <div className="w-full flex justify-center">
              <div className="text-xl font-bold text-center">Log In/Register</div>
            </div>
          </div>
            <button
              onClick={togglePopup}
              className="absolute top-6 right-5 text-slate-500"
            >
              <X/>
            </button>
          <div className="flex flex-col gap-5">
              <form action="">
                <div className="flex flex-col">
                  <label className="block mb-2 text-sm text-gray-500 font-semibold" htmlFor="email">Email/Mobile Number</label>
                  <input onChange={(e) => setEmail(e.target.value)} value={email}  placeholder="Example: +62812345678 or yourname@email.com" name="email" type="text" className="border rounded-md p-1 focus:ring-1 focus:ring-sky-100/50 focus:border-sky-400 outline-none"/>
                  
                  <label className="block mb-2 text-sm mt-5 text-gray-500 font-semibold" htmlFor="email">Password</label>
                  <input onChange={(e) => setPassword(e.target.value)} value={password}  placeholder="**********" name="email" type="password" className="border rounded-md p-1 focus:ring-1 focus:ring-sky-100/50 focus:border-sky-400 outline-none"/>
                </div>
                <div className="mt-4">
                  <button disabled className="bg-gray-100 w-full p-3 rounded-full font-semibold text-gray-400">Continue</button>
                </div>
              </form>
            <div className="flex">
              <div className="border-t flex-grow mx-2 my-auto" />
              <div className="text-sm text-gray-500 font-semibold whitespace-nowrap">
                or log in/register with
              </div>
              <div className="border-t flex-grow mx-2 my-auto" />
            </div>
            <button className="bg-sosmed w-full p-3 rounded-full font-semibold text-sosmed">Google</button>
            <button className="bg-sosmed w-full p-3 rounded-full font-semibold text-sosmed">Facebook</button>
            <div className="text-center text-sm mt-3 font-semibold">
              <p className=" text-gray-500">By continuing, you agree to this <span className="text-primary">Terms & Conditions</span>  and acknowledge that you have been informed about our</p>
              <p><span className="text-primary">Privacy Notice.</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupLogin;
