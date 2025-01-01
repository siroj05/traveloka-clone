'use client'
import DesktopContent from "@/components/desktop/content/desktopContent";
import MobileContent from "@/components/mobile/content/content";
import{ useMediaQuery } from "@/lib/hook/useMediaQuery";

export default function Home() {
  const matches = useMediaQuery("(max-width: 768px)");
  return (
    <div>
      {/* content */}
      {matches && <MobileContent/>}
      {!matches && <DesktopContent/>}
    </div>
  );
}
