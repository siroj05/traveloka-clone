import { ReactNode } from "react"

interface Props {
  children : ReactNode
}

export default function ButtonTabs ({children} : Props) {
  return(
    <button className="flex gap-1 text-slate-300 hover:text-white font-semibold border border-transparent hover:border-white px-3 py-2 rounded-3xl">
      {children}
    </button>
  )
}