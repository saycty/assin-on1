"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { headerStyles, animationDelays } from "@/styles/tailwind-utilities";

// Register GSAP plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const decorativeRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (
      titleRef.current &&
      subtitleRef.current &&
      decorativeRef.current &&
      headerRef.current
    ) {
      // Initial animation
      const tl = gsap.timeline();

      tl.fromTo(
        titleRef.current,
        { y: 100, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }
      )
        .fromTo(
          subtitleRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          "-=0.6"
        )
        .fromTo(
          decorativeRef.current,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
          "-=0.3"
        );

      // Scroll direction detection and animation
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        const isScrollingUp = currentScrollY < lastScrollY.current;

        if (isScrollingUp && titleRef.current) {
          // Scoot in animation when scrolling up
          gsap.to(titleRef.current, {
            x: 0,
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          });
        }

        lastScrollY.current = currentScrollY;
      };

      // Scroll-triggered parallax effect with enhanced animations
      ScrollTrigger.create({
        trigger: headerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const scrollDirection = self.direction;

          if (titleRef.current) {
            if (scrollDirection === -1) {
              // Scrolling up - scoot in effect
              gsap.set(titleRef.current, {
                y: progress * 50 - 20, // Offset to create scoot effect
                scale: 1 - progress * 0.1 + 0.05, // Slight scale increase
                opacity: 1 - progress * 0.3 + 0.1,
                x: progress * -30 + 15, // Horizontal scoot movement
              });
            } else {
              // Scrolling down - normal parallax
              gsap.set(titleRef.current, {
                y: progress * 100,
                scale: 1 - progress * 0.2,
                opacity: 1 - progress * 0.5,
                x: 0,
              });
            }
          }

          if (subtitleRef.current) {
            gsap.set(subtitleRef.current, {
              y: progress * 50,
              opacity: 1 - progress * 0.3,
            });
          }
        },
      });

      // Add scroll listener for additional effects
      window.addEventListener("scroll", handleScroll);

      // Cleanup
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  return (
    <header ref={headerRef} className={headerStyles.header}>
      {/* Background Pattern */}
      <div className={headerStyles.backgroundPattern}>
        <div className={headerStyles.backgroundOrb1}></div>
        <div
          className={headerStyles.backgroundOrb2}
          style={{ animationDelay: animationDelays.short }}
        ></div>
        <div
          className={headerStyles.backgroundOrb3}
          style={{ animationDelay: animationDelays.medium }}
        ></div>
      </div>

      <div className={headerStyles.container}>
        <div className={headerStyles.contentWrapper}>
          <h1 ref={titleRef} className={headerStyles.title}>
            {title}
          </h1>
          <p ref={subtitleRef} className={headerStyles.subtitle}>
            {subtitle}
          </p>

          {/* Enhanced Decorative Elements */}
          <div ref={decorativeRef} className={headerStyles.decorativeContainer}>
            <div className={headerStyles.decorativeDots}>
              <div className={headerStyles.decorativeDot1}></div>
              <div
                className={headerStyles.decorativeDot2}
                style={{ animationDelay: animationDelays.short }}
              ></div>
              <div
                className={headerStyles.decorativeDot3}
                style={{ animationDelay: animationDelays.medium }}
              ></div>
            </div>
          </div>

          {/* Additional Visual Element */}
          <div className={headerStyles.decorativeLine}>
            <div className={headerStyles.decorativeLineInner}></div>
          </div>
        </div>
      </div>
    </header>
  );
}
