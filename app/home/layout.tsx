'use client'

import DesktopNavbar from "@/components/desktop/navbar/navbar"
import MobileNavbar from "@/components/mobile/navbar/navbar"
import { useMediaQuery } from "@/lib/hook/useMediaQuery"
import { ReactNode } from "react"

interface Props {
  children : ReactNode
}

export default function Layout({children} : Props){
  const matches = useMediaQuery("(max-width: 600px)");
  
  return(
    <div>
       {matches && <MobileNavbar/>}
       {!matches && <DesktopNavbar/>}
       <div>
          {children}
       </div>
    </div>
  )
}