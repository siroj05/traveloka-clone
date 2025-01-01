
import { usestoreDataHotels } from "@/app/home/store";
import Hotels from "./hotels";
export default function DesktopContent() {
  const data = usestoreDataHotels((state) => state.dataHotels)
  return (
    <div>
      <Hotels data={data}/>
    </div>
    // landing page disini
  );
}
