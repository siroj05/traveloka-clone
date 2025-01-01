import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  children : ReactNode
  className? : string
  href? : string
  toggle? : () => void 
}

export default function ButtonAuth ({children, className, href = '#', toggle} : Props) {
  return(
    <Link onClick={toggle} href={href} className={`text-sm rounded-md p-1 border font-semibold w-[120px] ${className}`}>
      {children}
    </Link>
  )
}