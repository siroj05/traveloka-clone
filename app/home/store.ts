import { create } from "zustand";

export interface stateData{
  setDataHotels : (value : any) => void
  dataHotels : any
}

export const usestoreDataHotels = create<stateData>()((set) => ({
  dataHotels : undefined,
  setDataHotels : (value : any) => {
    set({
      dataHotels : value
    })
  }
}))