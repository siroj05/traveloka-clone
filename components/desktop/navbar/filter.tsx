import { Search, MapPin } from "lucide-react"
export default function FilterHotels(){
  return (
    <div className="flex w-full font-semibold">
      <div className="w-full">
        <label htmlFor="hotel" className="block mb-2 text-white">City, destination, or hotel name</label>
        <div className="relative">
          <MapPin className="absolute top-2 left-2 text-primary"/>
          <input 
            name="hotel" 
            type="text" 
            className="w-full pl-10 p-2 border rounded-l-xl"
            placeholder="City, hotel, place to go"
          />
        </div>
      </div>
      <div className="w-full">
        <label htmlFor="check-in" className="block mb-2 text-white">Check-in & Check-out Dates</label>
        <input 
          name="check-in" 
          type="text" 
          className="w-full p-2 border"
        />
      </div>
      <div className="flex w-full">
        <div className="w-full">
          <label htmlFor="Guests" className="block mb-2 text-white">Guests and Rooms</label>
          <input 
            name="Guests" 
            type="text" 
            className="w-full p-2 border"
          />
        </div>
        <div>
          <label className="block mb-2 invisible">Search</label>
          <button className="h-[42px] px-4 bg-orange-600 border rounded-r-xl hover:bg-orange-700 transition-colors">
            <Search className="w-4 h-4 text-white"/>
          </button>
        </div>
      </div>
    </div>
  )
}