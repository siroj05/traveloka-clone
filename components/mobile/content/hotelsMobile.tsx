import { usestoreDataHotels } from "@/app/home/store";
import Image from "next/image";

export default function HotelsMobile() {
  const { dataHotels } = usestoreDataHotels((state) => state);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {
        dataHotels && dataHotels.hotels.map((item:any, i:number) =>{
          return (
            <div key={i} className="overflow-hidden">
              <div className="relative aspect-w-16 aspect-h-9">
                <Image 
                  src={item.images[0]} 
                  alt={""}            
                  width={500}
                  height={500}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="object-cover rounded-lg"    
                />
              </div>
              <div className="">
                <h3 className="font-semibold text-sm mb-2">{item.name}</h3>
                <div className="text-orange-600 font-semibold text-xs">
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(item.pricePerNight)}
                  </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
