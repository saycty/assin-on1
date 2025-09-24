import Image from "next/image";
import { WorkerType } from "@/types/workers";
import { useRef } from "react";
import { cardStyles } from "@/styles/tailwind-utilities";

interface WorkerCardProps {
  worker: WorkerType;
  onContact?: (workerId: number) => void;
  onMouseEnter?: (element: HTMLElement) => void;
  onMouseLeave?: (element: HTMLElement) => void;
}

export default function WorkerCard({
  worker,
  onContact,
  onMouseEnter,
  onMouseLeave,
}: WorkerCardProps) {
  const cardRef = useRef<HTMLElement>(null);

  const handleContact = () => {
    onContact?.(worker.id);
  };

  const handleMouseEnter = () => {
    if (cardRef.current && onMouseEnter) {
      onMouseEnter(cardRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current && onMouseLeave) {
      onMouseLeave(cardRef.current);
    }
  };

  return (
    <article
      ref={cardRef}
      data-worker-card
      className={cardStyles.card}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="button"
      tabIndex={0}
      aria-label={`${worker.name}, ${worker.service} - ₹${Math.round(
        worker.pricePerDay * 1.18
      )} per day`}
    >
      {/* Image Section */}
      <div className="w-full h-72 relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        <Image
          src={worker.image}
          alt={`${worker.name} - ${worker.service}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className="object-cover object-center transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
          priority={worker.id <= 12}
          quality={95}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+85dSxa4rds="
        />

        {/* Modern Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Decorative Corner */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary-500/20 to-transparent rounded-bl-3xl" />

        {/* Enhanced Service Badge */}
        <div className="absolute top-4 right-4 transform group-hover:scale-105 transition-transform duration-300">
          <span className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-gray-800 shadow-lg border border-white/30 ring-1 ring-gray-200/50">
            {worker.service}
          </span>
        </div>
      </div>

      {/* Enhanced Content Section */}
      <div className="p-4 relative">
        {/* Background Pattern */}
        <div className={cardStyles.contentBackground} />

        <div className={cardStyles.contentInner}>
          <header className={cardStyles.header}>
            <h2 className={cardStyles.name}>{worker.name}</h2>
            <div className={cardStyles.serviceContainer}>
              <span className={cardStyles.statusDot}></span>
              <p className={cardStyles.service}>{worker.service}</p>
            </div>
          </header>

          {/* Enhanced Pricing Section */}
          <div className={cardStyles.pricingContainer}>
            <div className={cardStyles.pricingLeft}>
              <span className={cardStyles.pricingLabel}>Starting from</span>
              <div className={cardStyles.price}>
                ₹{Math.round(worker.pricePerDay * 1.18)}
              </div>
            </div>
            <div className={cardStyles.pricingRight}>
              <div className={cardStyles.pricingPeriod}>per day</div>
            </div>
          </div>

          {/* Enhanced Action Button */}
          <button
            onClick={handleContact}
            className={cardStyles.contactButton}
            aria-label={`Contact ${worker.name} for ${worker.service} services`}
          >
            <span className={cardStyles.contactButtonContent}>
              <span>Contact Now</span>
              <svg
                className={cardStyles.contactButtonIcon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </article>
  );
}
