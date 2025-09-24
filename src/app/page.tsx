"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import {
  PageHeader,
  WorkersGrid,
  Container,
  LoadingSpinner,
  LoadingScreen,
  SearchFilter,
} from "@/components";
import Navigation from "@/components/Navigation";
import { useWorkers } from "@/hooks/useWorkers";
import { useGSAPAnimations } from "@/hooks/useGSAPAnimations";
import { pageStyles } from "@/styles/tailwind-utilities";

// Lazy load WorkerCard component
const WorkerCard = dynamic(() => import("@/components/WorkerCard"), {
  loading: () => <div className={pageStyles.loadingCard} />,
  ssr: false,
});

export default function WorkersPage() {
  const {
    workers,
    availableServices,
    loading,
    error,
    setSearchQuery,
    setSelectedService,
    setSortBy,
    loadMoreWorkers,
    loadingMore,
    hasMore,
  } = useWorkers();

  const [showLoadingScreen, setShowLoadingScreen] = useState(true);
  const { containerRef, headerRef, cardsRef, animateCardHover } =
    useGSAPAnimations();

  const handleLoadingComplete = () => {
    setShowLoadingScreen(false);
  };

  const handleContactWorker = (workerId: number) => {
    // TODO: Implement contact functionality
    console.log(`Contacting worker with ID: ${workerId}`);
    // This could open a modal, redirect to a contact form, etc.
    alert(
      `Contact functionality would be implemented here for worker ID: ${workerId}`
    );
  };

  const handleCardMouseEnter = (element: HTMLElement) => {
    animateCardHover(element, true);
  };

  const handleCardMouseLeave = (element: HTMLElement) => {
    animateCardHover(element, false);
  };

  if (showLoadingScreen) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  if (loading) {
    return (
      <Container>
        <div className="flex items-center justify-center min-h-screen">
          <div className={pageStyles.loadingCenter}>
            <LoadingSpinner size="lg" className="mx-auto mb-4" />
            <p className={pageStyles.loadingText}>Loading workers...</p>
          </div>
        </div>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <div className="flex items-center justify-center min-h-screen">
          <div className={pageStyles.errorContainer}>
            <div className={pageStyles.errorIcon}>⚠️</div>
            <h2 className={pageStyles.errorTitle}>
              Oops! Something went wrong
            </h2>
            <p className={pageStyles.errorMessage}>{error}</p>
            <button
              onClick={() => window.location.reload()}
              className={pageStyles.errorButton}
            >
              Try Again
            </button>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <>
      <Navigation />
      <Container ref={containerRef}>
        <div ref={headerRef}>
          <PageHeader
            title="Find Professional Workers"
            subtitle="Connect with skilled professionals for all your service needs. Browse through our verified workers and find the perfect match."
          />
        </div>

        <SearchFilter
          onSearch={setSearchQuery}
          onFilterService={setSelectedService}
          onSortChange={setSortBy}
          services={availableServices}
        />

        <div ref={cardsRef}>
          <WorkersGrid>
            {workers.length > 0 ? (
              workers.map((worker) => (
                <WorkerCard
                  key={worker.id}
                  worker={worker}
                  onContact={handleContactWorker}
                  onMouseEnter={handleCardMouseEnter}
                  onMouseLeave={handleCardMouseLeave}
                />
              ))
            ) : (
              <div className={pageStyles.emptyContainer}>
                <div className={pageStyles.emptyIcon}>🔍</div>
                <h3 className={pageStyles.emptyTitle}>No workers found</h3>
                <p className={pageStyles.emptyDescription}>
                  Try adjusting your search or filters
                </p>
              </div>
            )}
          </WorkersGrid>
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="flex justify-center mt-12 mb-8">
            <button
              onClick={loadMoreWorkers}
              disabled={loadingMore}
              className={pageStyles.loadMoreButton}
            >
              {loadingMore ? (
                <span className="flex items-center space-x-3">
                  <div className={pageStyles.loadingSpinner}></div>
                  <span>Loading More Workers...</span>
                </span>
              ) : (
                <span className="flex items-center space-x-2">
                  <span>Load More</span>
                  {/* <span className="text-sm opacity-75">(Click to show 12 more)</span> */}
                </span>
              )}
            </button>
          </div>
        )}

        {/* Debug Info - Remove this later */}
        {/* <div className="text-center text-sm text-gray-500 mt-4">
          Showing {workers.length} workers • Has More: {hasMore ? "Yes" : "No"}
        </div> */}
      </Container>
    </>
  );
}
