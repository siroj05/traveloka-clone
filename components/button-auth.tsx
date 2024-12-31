import { ReactNode } from "react";

interface Props {
  children : ReactNode
  className? : string
}

export default function ButtonAuth ({children, className} : Props) {
  return(
    <div className={`text-sm rounded-md p-1 border font-semibold w-[120px] ${className}`}>
      {children}
    </div>
  )
}