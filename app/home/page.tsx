'use client'
import MobileContent from "@/components/mobile/content/content";
import{ useMediaQuery } from "@/lib/hook/useMediaQuery";

export default function Home() {
  const matches = useMediaQuery("(max-width: 600px)");
  return (
    <div>
      {/* content */}
      {matches && <MobileContent/>}
    </div>
  );
}
