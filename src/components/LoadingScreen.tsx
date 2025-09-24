import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const loadingRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate loading dots
      if (dotsRef.current) {
        const dots = dotsRef.current.children;
        gsap.to(dots, {
          y: -20,
          duration: 0.6,
          stagger: 0.1,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
        });
      }

      // Animate loading text
      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
        );
      }

      // Complete loading after 2 seconds
      const timer = setTimeout(() => {
        if (loadingRef.current) {
          gsap.to(loadingRef.current, {
            opacity: 0,
            y: -50,
            duration: 0.8,
            ease: "power3.in",
            onComplete,
          });
        }
      }, 2000);

      return () => clearTimeout(timer);
    }, loadingRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={loadingRef}
      className="fixed inset-0 bg-gradient-to-br from-primary-600 to-indigo-800 flex items-center justify-center z-50"
    >
      <div className="text-center">
        <h1
          ref={textRef}
          className="text-4xl md:text-6xl font-bold text-white mb-8"
        >
          WorkerHub
        </h1>

        <div ref={dotsRef} className="flex justify-center space-x-2 mb-4">
          <div className="w-4 h-4 bg-white rounded-full"></div>
          <div className="w-4 h-4 bg-white rounded-full"></div>
          <div className="w-4 h-4 bg-white rounded-full"></div>
        </div>

        <p className="text-white/80 text-lg">Loading professional workers...</p>
      </div>
    </div>
  );
}
