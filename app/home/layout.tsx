'use client'

import DesktopNavbar from "@/components/desktop/navbar/navbar"
import MobileNavbar from "@/components/mobile/navbar/navbar"
import { useMediaQuery } from "@/lib/hook/useMediaQuery"
import { ReactNode } from "react"

interface Props {
  children : ReactNode
}

export default function Layout({children} : Props){
  const matches = useMediaQuery("(max-width: 768px)");
  
  return(
    <div>
       {matches && <MobileNavbar/>}
       {!matches && <DesktopNavbar/>}
       <div className={`${!matches && 'w-[1300px] mx-auto'}`}>
          {children}
       </div>
    </div>
  )
}