import Image from "next/image"
import Link from "next/link"
export default function MobileContent(){
  return(
    <main className="mx-5">
      <div className="flex justify-between text-center text-sm font-semibold mx-3 my-5">
        <Link href={'#'}>
          <Image width={50} height={50} alt="" src={'sale.svg'} /> SALE
        </Link>
        <Link href={'#'}>
          <Image width={50} height={50} alt="" src={'flights.svg'} /> SALE
        </Link>
        <Link href={'#'}>
          <Image width={50} height={50} alt="" src={'hotels 1.svg'} /> SALE
        </Link>
        <Link href={'#'}>
          <Image width={50} height={50} alt="" src={'experience.svg'} /> SALE
        </Link>
        <Link href={'#'}>
          <Image width={50} height={50} alt="" src={'trains.svg'} /> SALE
        </Link>
      </div>
    </main>
  )
}