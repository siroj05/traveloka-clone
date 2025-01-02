import Image from "next/image";
import Link from "next/link";
import HotelsMobile from "./hotelsMobile";

export default function MobileContent() {
 const items = [
    { href: '#', src: 'sale.svg', alt: 'Sale icon', text: 'SALE' },
    { href: '#', src: 'flights.svg', alt: 'Flights icon', text: 'Flights' },
    { href: '#', src: 'hotels 1.svg', alt: 'Hotels icon', text: 'Hotels' },
    { href: '#', src: 'experience.svg', alt: 'Experience icon', text: 'Xperience' },
    { href: '#', src: 'trains.svg', alt: 'Trains icon', text: 'Trains' },
  ];

  return (
    <main className="px-4 py-5 flex flex-col gap-6">
      <div className="grid grid-cols-5 gap-2 text-center text-xs font-semibold">
        {items.map((item, index) => (
          <Link key={index} href={item.href} className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 relative">
              <Image
                fill
                src={item.src}
                alt={item.alt}
                className="object-contain"
              />
            </div>
            <p className="w-full">{item.text}</p>
          </Link>
        ))}
      </div>
      <HotelsMobile/>
    </main>
  );
}
