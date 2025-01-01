import Image from "next/image";
import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Props {
  data: any;
}

export default function Hotels({ data }: Props) {
  return (
    <div>
      {data?.hotels &&
        data.hotels.map((item: any, i: number) => {
          return(
            <Link key={item.name} href={`home/${item.id}/hotel`}>
              <div>
                <div className="border w-full flex my-5 rounded-lg shadow-lg">
                  <div className="relative">
                    <Image
                      src={item.images[0]}
                      alt={""}
                      width={400}
                      height={400}
                      className="rounded-l-lg object-cover"
                    />
                  </div>
                  <div className="flex flex-1 w-full flex-col gap-5 p-3">
                    <div className="font-bold">{item.name}</div>
                    <div className="text-sm font-semibold flex">
                      <MapPin className="text-primary w-5 h-5" />{" "}
                      {item.address.street}, {item.address.city}
                    </div>
                    <div className="text-xs">
                      {item.facilities.map((facility: any, i: number) => {
                        if (i < 3) {
                          return (
                            <Badge key={i} className="bg-gray-200 text-black">
                              {facility}
                            </Badge>
                          );
                        } else if (i === 3) {
                          return (
                            <Badge key={i} className="bg-gray-200 text-black">
                              {`+${item.facilities.length - 3}`}
                            </Badge>
                          );
                        }
                        return null;
                      })}
                    </div>
                  </div>
                  <div className="border-l shadow-left w-[300px] flex flex-col justify-end ">
                    <div className="flex justify-end">
                      <div className="flex flex-col gap-4 mx-4 mb-4">
                        <div className="text-orange-600 font-semibold text-lg">
                          {new Intl.NumberFormat("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          }).format(item.pricePerNight)}
                        </div>
                        <button className="bg-orange-600 hover:bg-orange-700 text-white px-1 py-2 rounded-xl text-sm font-bold">
                          Select Room
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
    </div>
  );
}
