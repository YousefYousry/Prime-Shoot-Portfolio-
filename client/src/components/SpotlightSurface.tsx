/* Style direction: Olive Noir Editorial — a local, low-contrast olive light follows a precise cursor to reveal material depth without competing with photography. */
import { createElement, type ComponentPropsWithoutRef, type ElementType, type PointerEvent, useRef } from "react";

type SpotlightSurfaceProps<T extends ElementType> = {
  as?: T;
} & ComponentPropsWithoutRef<T>;

export default function SpotlightSurface<T extends ElementType = "div">({
  as,
  children,
  className,
  onPointerMove,
  onPointerLeave,
  ...props
}: SpotlightSurfaceProps<T>) {
  const surfaceRef = useRef<HTMLElement | null>(null);
  const Component = as ?? "div";

  const setPointerPosition = (event: PointerEvent<HTMLElement>) => {
    const surface = surfaceRef.current;
    if (!surface) return;

    const bounds = surface.getBoundingClientRect();
    surface.style.setProperty("--spotlight-x", `${event.clientX - bounds.left}px`);
    surface.style.setProperty("--spotlight-y", `${event.clientY - bounds.top}px`);
  };

  return createElement(
    Component,
    {
      ...props,
      ref: (node: HTMLElement | null) => {
        surfaceRef.current = node;
      },
      className: `spotlight-surface ${className ?? ""}`.trim(),
      onPointerMove: (event: PointerEvent<HTMLElement>) => {
        setPointerPosition(event);
        onPointerMove?.(event as never);
      },
      onPointerLeave: (event: PointerEvent<HTMLElement>) => {
        onPointerLeave?.(event as never);
      },
    },
    children,
  );
}
