import { hotelsApi } from "@/api/hotels-api";
import { usestoreDataHotels } from "@/app/home/store";
import { usestorePopup } from "@/components/desktop/navbar/store";
import { Search, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function FilterMobile() {
  const [searchName, setSearchName] = useState<string>("");
  const {isFocused, setIsFocused} = usestorePopup((state) => state);
  const [isLoading, setIsLoading] = useState(false);
  const [temp, setTemp] = useState(hotelsApi());
  const { setDataHotels } = usestoreDataHotels((state) => state);

  const onSearch = async () => {
    setIsLoading(true);
    const data = hotelsApi();
    if (searchName.length === 0) {
      setDataHotels(data);
      setIsLoading(false);
      return;
    }

    const filterDataHotels = data.hotels.filter((hotel) =>
      hotel.name.toLowerCase().includes(searchName.toLowerCase())
    );
    setDataHotels({ hotels: filterDataHotels });
    setIsLoading(false);
  };

  useEffect(() => {
    const data = hotelsApi();
    const filterDataHotels = data.hotels.filter((hotel) =>
      hotel.name.toLowerCase().includes(searchName.toLowerCase())
    );
    setTemp({ hotels: filterDataHotels });
  }, [searchName]);

  return (
    <>
      <div className="relative w-full">
        <Search className="text-slate-500 absolute h-4 w-4 top-2 left-2" />
        <input
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="w-full rounded-sm pl-8 pr-8 p-1 focus:outline-none focus:ring-2 focus:ring-sky-300 font-medium"
          type="text"
          onFocus={() => setIsFocused(true)}
        />
      </div>
      <div className="absolute right-4 top-4">
        {searchName.length > 0 && (
          <button
            onClick={() => setSearchName("")}
            className="bg-slate-600 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center"
          >
            x
          </button>
        )}
      </div>
     {isFocused && <div className="absolute bg-white left-0 w-full mt-10 p-3">
        <div className="w-full flex flex-col gap-5">
          <div className="flex justify-between">
            <div className="flex gap-2">
              <Search className="my-auto text-slate-500 h-4 w-4 mx-2 text-primary" />
              {searchName.length>0&&<p className="text-primary">
                {` Search Traveloka for "${searchName}"`}
              </p>}
            </div>
            <ArrowRight className="text-primary h-5 w-5 my-auto" />
          </div>
          <hr />
          <p className="text-xs text-gray-600">SUGGESTED FOR YOU</p>
          {temp.hotels.map((item, i) => {
            return (
              <div key={i} className="flex gap-2">
                <div>
                  <Image src={item.images[0]} width={60} height={20} alt={""} />
                </div>
                <div className="flex flex-col my-auto">
                  <p className="text-xs font-bold ">{item.name}</p>
                  <div className="text-orange-600 font-semibold text-xs">
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(item.pricePerNight)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>}
    </>
  );
}
