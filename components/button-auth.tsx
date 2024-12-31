import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  children : ReactNode
  className? : string
  href : string
}

export default function ButtonAuth ({children, className, href} : Props) {
  return(
    <Link href={href} className={`text-sm rounded-md p-1 border font-semibold w-[120px] ${className}`}>
      {children}
    </Link>
  )
}