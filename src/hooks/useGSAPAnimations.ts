import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const useGSAPAnimations = () => {
  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
          }
        );
      }

      // Cards stagger animation
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll("[data-worker-card]");

        gsap.fromTo(
          cards,
          {
            y: 100,
            opacity: 0,
            scale: 0.8,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.7)",
            delay: 0.5,
          }
        );

        // Scroll-triggered animations for cards
        cards.forEach((card) => {
          gsap.fromTo(
            card,
            {
              y: 50,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const animateCardHover = (element: HTMLElement, isHovering: boolean) => {
    gsap.to(element, {
      y: isHovering ? -10 : 0,
      scale: isHovering ? 1.02 : 1,
      duration: 0.3,
      ease: "power2.out",
    });

    const image = element.querySelector("img");
    if (image) {
      gsap.to(image, {
        scale: isHovering ? 1.1 : 1,
        duration: 0.4,
        ease: "power2.out",
      });
    }
  };

  return {
    containerRef,
    headerRef,
    cardsRef,
    animateCardHover,
  };
};
