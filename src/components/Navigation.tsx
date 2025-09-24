"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { navigationStyles, cn } from "@/styles/tailwind-utilities";

interface NavigationProps {
  title?: string;
}

export default function Navigation({ title = "WorkerHub" }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);

      // Animate title based on scroll
      if (titleRef.current) {
        const scrollProgress = Math.min(scrollTop / 300, 1);
        gsap.to(titleRef.current, {
          scale: 1 - scrollProgress * 0.1,
          opacity: 1 - scrollProgress * 0.3,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Initial animation on mount
  useEffect(() => {
    if (navRef.current && titleRef.current && logoRef.current) {
      const tl = gsap.timeline();

      tl.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      )
        .fromTo(
          logoRef.current,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6, ease: "power2.out" },
          "-=0.6"
        )
        .fromTo(
          titleRef.current,
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.4"
        );
    }
  }, []);

  return (
    <nav
      ref={navRef}
      className={cn(
        navigationStyles.nav.base,
        isScrolled
          ? navigationStyles.nav.scrolled
          : navigationStyles.nav.default
      )}
    >
      <div className={navigationStyles.container}>
        <div className={navigationStyles.flexContainer}>
          {/* Enhanced Logo/Brand */}
          <div className={navigationStyles.logoContainer}>
            <div ref={logoRef} className={navigationStyles.logo}>
              <span className={navigationStyles.logoText}>W</span>
            </div>
            <h1 ref={titleRef} className={navigationStyles.title}>
              {title}
            </h1>
          </div>

          {/* Enhanced Navigation Links */}
          <div className={navigationStyles.linksContainer}>
            <a
              href="#workers"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("workers")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className={navigationStyles.link}
            >
              Browse Workers
              <span className={navigationStyles.linkUnderline}></span>
            </a>
            <a href="#services" className={navigationStyles.link}>
              Services
              <span className={navigationStyles.linkUnderline}></span>
            </a>
            <a href="#about" className={navigationStyles.link}>
              About
              <span className={navigationStyles.linkUnderline}></span>
            </a>
          </div>

          {/* Enhanced CTA Button */}
          <div className={navigationStyles.ctaContainer}>
            <button className={navigationStyles.ctaButton}>
              <span className="mr-2">✨</span>
              Post Job
            </button>

            {/* Mobile Menu Button */}
            <button className={navigationStyles.mobileButton}>
              <svg
                className={navigationStyles.mobileIcon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
