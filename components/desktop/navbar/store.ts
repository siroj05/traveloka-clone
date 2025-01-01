import { create } from "zustand";
import { DataUserModel } from "./navbar";

export interface stateData{
  setIsVisible : (value : boolean) => void
  isVisible : boolean

  setDataUser : (value : DataUserModel) => void
  dataUser : DataUserModel
}

export const usestorePopup = create<stateData>()((set) => ({
  isVisible : false,
  setIsVisible : (value : boolean) => {
    set({
      isVisible : value
    })
  },
  dataUser : {username : '', success : false},
  setDataUser : (value : DataUserModel ) => {
    set({
      dataUser : { username : value.username, success : value.success}
    })
  }
}))