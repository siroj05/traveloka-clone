'use client'
import PopupPayment from "@/components/desktop/content/payment/popupPayment";
import { usestorePopup } from "@/components/desktop/navbar/store";
import { useState } from "react";

export default function Payment() {
  const { isVisible, setIsVisible, dataUser, setDataUser } = usestorePopup(
    (state) => state
  );
  const [success, setIsSuccess] = useState<boolean>(false)

  const onPayment = () => {
    if(!dataUser.success){
      setIsVisible(true)
      return
    }
    setIsSuccess(true)
    const timeout = setTimeout(() => {
        setIsSuccess(false);
      }, 1000);
      return () => clearTimeout(timeout);
  }
  return (
    <>
      <button
        onClick={onPayment}
        className="bg-orange-600 w-full hover:bg-orange-700 text-white px-1 py-3 rounded-lg text-xl font-bold"
      >
        Continue to Payment
      </button>
      <PopupPayment
        isVisible={success}
      />
    </>

  );
}
