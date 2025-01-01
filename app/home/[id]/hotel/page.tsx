import { hotelsApi } from "@/api/hotels-api";
import Image from "next/image";
import Link from "next/link";

export default async function DetailHotel({
  params,
}: {
  params: { id: string };
}) {
  const data = hotelsApi();
  const detail = data.hotels.find((item) => item.id.toString() == params.id);
  return (
    <div className="p-10 w-full flex flex-col gap-3">
      <Image
        src={detail!.images[0]}
        alt={""}
        width={400}
        height={400}
        className="object-cover"
      />
      <div className="border-transparent shadow-xl flex justify-between p-5 rounded-lg">
        <div className="text-3xl font-bold">{detail?.name}</div>
        <div className="flex gap-3">
          <div className="text-orange-600 font-semibold text-lg my-auto">
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(detail!.pricePerNight)}
          </div>

          <Link href={`/home/${detail?.id}/booking`} className="bg-orange-600 hover:bg-orange-700 text-white px-1 py-2 rounded-lg text-sm font-bold">
            Choose
          </Link>
        </div>
      </div>
    </div>
  );
}
