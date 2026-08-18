/* Style direction: Olive Noir Editorial — use restrained, scroll-triggered catalog reveals so image and mark archives feel discovered rather than decorated. */
import { useEffect, useRef, useState, type ReactNode } from "react";

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
}

export default function StaggerReveal({ children, className = "" }: StaggerRevealProps) {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!element || reduceMotion || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8%", threshold: 0.06 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div ref={elementRef} className={`stagger-reveal ${isVisible ? "is-visible" : ""} ${className}`.trim()}>{children}</div>;
}
