import { BadgeCheck} from "lucide-react";

interface Props {
  isVisible : boolean
}

const PopupSuccess = ({
  isVisible,
}:Props) => {
  
  return (
    <div className="relative">
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Popup */}
        <div
          className={`fixed left-1/2 transform -translate-x-1/2 bg-white rounded-lg p-6 max-w-md w-full md:w-auto transition-all duration-300 ${
            isVisible ? "top-1/2 -translate-y-1/2 opacity-100" : "top-full opacity-100"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <>
            <div className="w-[400px]">
              <div className="w-full flex justify-center">
                <BadgeCheck className="text-color w-[250px] h-[250px]"/>
              </div>
              <div className="flex flex-col gap-4 mb-4 text-center">
                <p className="text-3xl font-bold">
                  Log In Successful!
                </p>
                <p>Welcome back. It's so nice to see you again!</p>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default PopupSuccess;
