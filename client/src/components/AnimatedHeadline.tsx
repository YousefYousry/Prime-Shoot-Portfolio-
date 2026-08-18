/* Style direction: Olive Noir Editorial — restrained upward editorial reveals, warm typography, and no decorative motion that competes with the imagery. */
import { createElement, useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type HeadlineTag = "h1" | "h2" | "h3" | "p";

interface AnimatedHeadlineProps {
  as?: HeadlineTag;
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

export default function AnimatedHeadline({ as = "h2", children, className = "", delay = 0, id }: AnimatedHeadlineProps) {
  const elementRef = useRef<HTMLElement | null>(null);
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
      { rootMargin: "0px 0px -7%", threshold: 0.08 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return createElement(as, {
    ref: elementRef,
    id,
    className: `headline-reveal ${isVisible ? "is-visible" : ""} ${className}`.trim(),
    style: { "--headline-delay": `${delay}ms` } as CSSProperties,
  }, children);
}
