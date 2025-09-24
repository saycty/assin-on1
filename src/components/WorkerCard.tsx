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
      <div className={cardStyles.imageContainer}>
        <Image
          src={worker.image}
          alt={`${worker.name} - ${worker.service}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className={cardStyles.image}
          priority={worker.id <= 12}
          quality={95}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+85dSxa4rds="
        />

        {/* Modern Gradient Overlay */}
        <div className={cardStyles.gradientOverlay} />

        {/* Decorative Corner */}
        <div className={cardStyles.decorativeCorner} />

        {/* Enhanced Service Badge with Better Contrast */}
        <div className={cardStyles.serviceBadge}>
          <span className={cardStyles.serviceBadgeInner}>{worker.service}</span>
        </div>
      </div>

      {/* Enhanced Content Section */}
      <div className={cardStyles.contentContainer}>
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
