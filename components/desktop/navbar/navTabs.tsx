import {
  Hotel,
  Plane,
  RailSymbol,
  BusFront,
  CarTaxiFront,
  CarFront,
  MapPinCheck,
  EllipsisVertical,
} from "lucide-react";
import ButtonTabs from "./buttonTabs";

export function NavigationTabs() {
  return (
    <div className="flex justify-between p-2">
      <ButtonTabs>
        <Hotel width={25} height={25} />
        Hotels
      </ButtonTabs>
      <ButtonTabs>
        <Plane width={25} height={25} />
        Flights
      </ButtonTabs>
      <ButtonTabs>
        <RailSymbol width={25} height={25} />
        Trains
      </ButtonTabs>
      <ButtonTabs>
        <BusFront width={25} height={25} />
        Bus & Travel
      </ButtonTabs>
      <ButtonTabs>
        <div className="flex relative">
          <CarTaxiFront width={25} height={25} />
          <Plane className="absolute right-3 bottom-4" width={18} height={18} />
        </div>
        Aiport Transfer
      </ButtonTabs>
      <ButtonTabs>
        <CarFront width={25} height={25} />
        Car Rental
      </ButtonTabs>
      <ButtonTabs>
        <MapPinCheck width={25} height={25} />
        Things to Do
      </ButtonTabs>
      <ButtonTabs>
        <div className="flex relative">
          <EllipsisVertical
            className="absolute right-2"
            width={25}
            height={25}
          />
          <EllipsisVertical width={25} height={25} />
          <EllipsisVertical
            className="absolute left-2"
            width={25}
            height={25}
          />
        </div>
        More
      </ButtonTabs>
    </div>
  );
}

export function NavigationCategory() {
  return (
    <>
      <button className="flex gap-2 rounded-3xl text-sm font-semibold px-3 py-2 bg-primary text-white">
        <Hotel width={18} height={18} className="my-auto" />
        Hotels
      </button>
      <button className="flex gap-2 rounded-3xl text-sm font-semibold px-3 py-2 bg-sky-900 text-white">
        <Hotel width={18} height={18} className="my-auto" />
        Villa
      </button>
      <button className="flex gap-2 rounded-3xl text-sm font-semibold px-3 py-2 bg-sky-900 text-white">
        <Hotel width={18} height={18} className="my-auto" />
        Apartment
      </button>
    </>
  );
}
