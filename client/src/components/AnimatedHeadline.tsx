/* Style direction: Olive Noir Editorial — restrained upward editorial reveals, warm typography, and no decorative motion that competes with the imagery. */
import { createElement, useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type HeadlineTag = "h1" | "h2" | "h3" | "p";

interface AnimatedHeadlineProps {
  as?: HeadlineTag;
  children: ReactNode;
  className?: string;
  delay?: number;
  drift?: "left" | "right";
  id?: string;
}

export default function AnimatedHeadline({ as = "h2", children, className = "", delay = 0, drift, id }: AnimatedHeadlineProps) {
  const elementRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const scrollDirection = drift ?? (as === "h2" || as === "p" ? "left" : "right");

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
      { rootMargin: "0px 0px -7%", threshold: 0.08 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const updateDrift = () => {
      const rect = element.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      const progress = Math.max(-1, Math.min(1, ((viewport * 0.5) - (rect.top + rect.height * 0.5)) / viewport));
      const direction = scrollDirection === "left" ? -1 : 1;
      const range = window.innerWidth <= 760 ? 8 : 18;
      element.style.setProperty("--headline-scroll-x", `${Math.round(progress * direction * range)}px`);
      frame = 0;
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateDrift);
    };

    updateDrift();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [scrollDirection]);

  return createElement(as, {
    ref: elementRef,
    id,
    className: `headline-reveal ${isVisible ? "is-visible" : ""} ${className}`.trim(),
    "data-scroll-drift": scrollDirection,
    style: { "--headline-delay": `${delay}ms` } as CSSProperties,
  }, children);
}
