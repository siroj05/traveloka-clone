import { checkEmailApi, loginApi } from "@/api/login-api";
import { X, CircleCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { DataUserModel } from "../navbar/navbar";

interface Props {
  setDataUser: (value: DataUserModel) => void;
  isVisible: boolean;
  togglePopup: () => void;
}

const PopupLogin = ({
  setDataUser,
  isVisible,
  togglePopup,
}: Props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [response, setResponse] = useState<any>();
  const [passwordValid, setPasswordValid] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await checkEmailApi(email);
      setResponse(result);
    };
    fetchData();
  }, [email]);

  const handleSubmit = async () => {
    if (password.length === 0) {
      setPasswordValid(false);
      return;
    }
    setPasswordValid(true);
    const result = await loginApi(email, password);
    setDataUser({ username: result.username ?? "", success: result.success });
  };

  useEffect(() => {
    if (password.length > 0) {
      setPasswordValid(true);
    }
  }, [password]);

  return (
    <div className="relative">
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isVisible
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={togglePopup}
      >
        {/* Popup */}
        <div
          className={`fixed left-1/2 transform -translate-x-1/2 bg-white rounded-lg p-6 max-w-md w-full md:w-auto transition-all duration-300 ${
            isVisible
              ? "top-1/2 -translate-y-1/2 opacity-100"
              : "top-full opacity-100"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <>
            <div className="relative mb-4 w-[380px]">
              <div className="w-full flex justify-center">
                <div className="text-xl font-bold text-center">
                  Log In/Register
                </div>
              </div>
            </div>
            <button
              onClick={togglePopup}
              className="absolute top-6 right-5 text-slate-500"
            >
              <X />
            </button>
            <div className="flex flex-col gap-5">
              <form action="">
                <div className="flex flex-col">
                  <label
                    className="block mb-2 text-sm text-gray-500 font-semibold"
                    htmlFor="email"
                  >
                    Email/Mobile Number
                  </label>
                  <div className="w-full flex flex-col relative">
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      placeholder="Example: +62812345678 or yourname@email.com"
                      name="email"
                      type="text"
                      className="border rounded-md p-1 focus:ring-1 focus:ring-sky-100/50 focus:border-sky-400 outline-none"
                    />
                    {response?.success && (
                      <CircleCheck className="bg-green-700 w-5 h-5 rounded-full text-white absolute right-2 top-2" />
                    )}
                  </div>
                  {response?.success && (
                    <p className="text-green-600 text-sm">
                      This account is already connected to a Traveloka account.
                      You can simply enter your password below to login.
                    </p>
                  )}
                  {response?.success && (
                    <>
                      <label
                        className="block mb-2 text-sm mt-5 text-gray-500 font-semibold"
                        htmlFor="email"
                      >
                        Password
                      </label>
                      <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder="**********"
                        name="email"
                        type="password"
                        className={`${
                          passwordValid
                            ? "focus:ring-1 focus:ring-sky-100/50 focus:border-sky-400"
                            : "ring-1 ring-red-600 border-red-600"
                        } border rounded-md p-1  outline-none`}
                      />
                      {!passwordValid && (
                        <p className="text-red-600 text-sm">
                          This section must be filled.
                        </p>
                      )}
                    </>
                  )}
                </div>
                <div className="mt-4">
                  <button
                    onClick={handleSubmit}
                    type="button"
                    disabled={!response?.success}
                    className={`${
                      response?.success
                        ? "bg-orange-600 text-white"
                        : "bg-gray-100"
                    } w-full p-3 rounded-full font-semibold text-gray-400`}
                  >
                    {response?.success ? "Log in" : "Continue"}
                  </button>
                </div>
              </form>
              <div className="flex">
                <div className="border-t flex-grow mx-2 my-auto" />
                <div className="text-sm text-gray-500 font-semibold whitespace-nowrap">
                  or log in/register with
                </div>
                <div className="border-t flex-grow mx-2 my-auto" />
              </div>
              <button className="bg-sosmed w-full p-3 rounded-full font-semibold text-sosmed">
                Google
              </button>
              <button className="bg-sosmed w-full p-3 rounded-full font-semibold text-sosmed">
                Facebook
              </button>
              <div className="text-center text-sm mt-3 font-semibold">
                <p className=" text-gray-500">
                  By continuing, you agree to this{" "}
                  <span className="text-primary">Terms & Conditions</span> and
                  acknowledge that you have been informed about our
                </p>
                <p>
                  <span className="text-primary">Privacy Notice.</span>
                </p>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default PopupLogin;
