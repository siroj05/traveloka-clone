'use client'
import MobileContent from "@/components/mobile/content/content";
import MobileNavbar from "@/components/mobile/navbar/navbar";
import{ useMediaQuery, useBreakpoints} from "@/lib/hook/useMediaQuery";

export default function Home() {
  const matches = useMediaQuery("(min-width: 600px)");

  return (
    <div>
      <MobileNavbar/>
      {/* content */}
      <MobileContent/>
    </div>
  );
}
