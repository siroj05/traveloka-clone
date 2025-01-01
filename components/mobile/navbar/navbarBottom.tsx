import { TableProperties , BookmarkCheck, Home, User, Settings } from "lucide-react";

export default function NavbarBottom () {
  return(
    <div className="fixed bottom-0 left-0 right-0 bg-white text-gray-600 flex justify-around items-center h-12 border-t shadow-xl z-30">
        <button className="flex flex-col items-center text-sm">
          <Home className="h-5 w-5" />
          <span>Home</span>
        </button>
        <button className="flex flex-col items-center text-sm">
          <BookmarkCheck  className="h-5 w-5" />
          <span>Saved</span>
        </button>
        <button className="flex flex-col items-center text-sm">
          <TableProperties  className="h-5 w-5" />
          <span>My Booking</span>
        </button>
        <button className="flex flex-col items-center text-sm">
          <User className="h-5 w-5" />
          <span>My Account</span>
        </button>
      </div>
  )
}