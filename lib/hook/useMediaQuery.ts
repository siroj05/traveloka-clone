import { useEffect, useState } from "react";

export function useMediaQuery(query : string) {
  const media = window.matchMedia(query);
  const [matches, setMatches] = useState(media.matches);

  useEffect(() => {
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [media]);

  return matches;
}

export function useBreakpoints() {
  const [breakpoint, setBreakpoint] = useState("");

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;

      if (width <= 768) setBreakpoint("mobile");
      else if (width > 768 && width <= 1024) setBreakpoint("tablet");
      else setBreakpoint("desktop");
    };

    updateBreakpoint();
    window.addEventListener("resize", updateBreakpoint);

    return () => window.removeEventListener("resize", updateBreakpoint);
  }, []);

  return breakpoint;
}

