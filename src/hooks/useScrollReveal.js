import { useEffect, useRef } from "react";

function getTransitionDelay(animation = "animate-slideUp") {
  switch (animation) {
    case "animate-slideUp200":
    case "animate-fadeIn200":
      return "200ms";
    case "animate-slideUp400":
    case "animate-fadeIn400":
      return "400ms";
    case "animate-fadeIn600":
      return "600ms";
    default:
      return "0ms";
  }
}

export function useScrollReveal(animation = "animate-slideUp", threshold = 0.2) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      el.classList.add("is-visible");
      return undefined;
    }

    el.classList.add("scroll-reveal");
    el.style.transitionDelay = getTransitionDelay(animation);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        window.requestAnimationFrame(() => {
          el.classList.add("is-visible");
          el.classList.add(animation);
          observer.unobserve(el);
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animation, threshold]);

  return ref;
}