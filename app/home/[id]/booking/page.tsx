import { hotelsApi } from "@/api/hotels-api";
import Image from "next/image";
import Payment from "./payment";

export default async function DetailHotel({
  params,
}: {
  params: { id: string };
}) {
  const data = hotelsApi();
  const detail = data.hotels.find((item) => item.id.toString() == params.id);

  return (
    <div className="p-10 w-full flex gap-3">
      <div className="border-transparent shadow-xl w-full flex flex-col p-5 rounded-lg">
        <div className="flex flex-col justify-between text-xl font-bold gap-3 h-full">
          <div>Contact Details (for E-voucher)</div>
          <hr />
          <div className="w-full">
            <div className="mb-10">
              <div>Price details</div>
              <div className="font-normal">
                <div className="flex justify-between">
                  Room Price
                  <div className="text-orange-600 font-semibold my-auto">
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(detail!.pricePerNight)}
                  </div>
                </div>
                <div className="flex justify-between">
                  Total Price
                  <div className="text-orange-600 font-semibold my-auto">
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(detail!.pricePerNight)}
                  </div>
                </div>
              </div>
            </div>
            {/* Payment disini */}
            <Payment/>
          </div>
        </div>
      </div>
      <div className="border flex flex-col gap-3 rounded-md shadow-xl">
        <div className="text-xl font-bold p-2">{detail?.name}</div>
        <Image
          src={detail!.images[0]}
          alt={""}
          width={400}
          height={400}
          className="object-cover"
        />
        <div className="font-bold p-2">(1x) Superior - Room Only</div>
        <hr />
        <div className="font-bold p-2 flex justify-between">
          Total Room Price
          <div className="text-orange-600 font-semibold my-auto">
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(detail!.pricePerNight)}
          </div>
        </div>
      </div>
    </div>
  );
}
