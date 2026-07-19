import * as React from "react";

export function useReveal<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = React.useRef<T | null>(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15, ...options },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  from?: "up" | "left" | "right";
};

export function Reveal({ children, delay = 0, className = "", from = "up" }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const hidden =
    from === "left"
      ? "opacity-0 -translate-x-8"
      : from === "right"
        ? "opacity-0 translate-x-8"
        : "opacity-0 translate-y-10";
  const shown = "opacity-100 translate-x-0 translate-y-0";
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform ${visible ? shown : hidden} ${className}`}
    >
      {children}
    </div>
  );
}
