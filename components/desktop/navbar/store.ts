import { create } from "zustand";
import { DataUserModel } from "./navbar";

export interface stateData{
  setIsVisible : (value : boolean) => void
  isVisible : boolean
  
  setIsFocused : (value : boolean) => void
  isFocused : boolean

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
  isFocused : false,
  setIsFocused : (value : boolean) => {
    set({
      isFocused : value
    })
  },
  dataUser : {username : '', success : false},
  setDataUser : (value : DataUserModel ) => {
    set({
      dataUser : { username : value.username, success : value.success}
    })
  }
}))