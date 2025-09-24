import { paginationStyles, cn } from "@/styles/tailwind-utilities";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const getVisiblePages = (): (number | string)[] => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...");
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages);
    } else {
      if (totalPages > 1) {
        rangeWithDots.push(totalPages);
      }
    }

    return rangeWithDots;
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page: number | string) => {
    if (typeof page === "number") {
      onPageChange(page);
    }
  };

  if (totalPages <= 1) return null;

  return (
    <nav className={paginationStyles.container} aria-label="Pagination">
      {/* Mobile Pagination */}
      <div className={paginationStyles.mobileContainer}>
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={paginationStyles.mobileButton}
        >
          Previous
        </button>
        <div className={paginationStyles.mobileInfo}>
          <span className={paginationStyles.mobileText}>
            Page {currentPage} of {totalPages}
          </span>
        </div>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={cn(paginationStyles.mobileButton, "ml-3")}
        >
          Next
        </button>
      </div>

      {/* Desktop Pagination - Centered */}
      <div className={paginationStyles.desktopContainer}>
        <nav
          className={cn("isolate inline-flex -space-x-px rounded-md shadow-sm")}
          aria-label="Pagination"
        >
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={paginationStyles.navButtonPrev}
            aria-label="Previous page"
          >
            <span className="sr-only">Previous</span>
            <svg
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Page Numbers */}
          {getVisiblePages().map((page, index) => {
            const isActive = page === currentPage;
            const isDots = page === "...";
            const base = paginationStyles.pageButton;
            const active = cn(
              base,
              paginationStyles.activePageButton,
              "font-semibold"
            );
            const dotsClass = cn(paginationStyles.dots, "cursor-default");

            return (
              <button
                key={index}
                onClick={() => handlePageClick(page)}
                disabled={isDots}
                className={cn(
                  "transition-colors duration-200",
                  isActive ? active : isDots ? dotsClass : base
                )}
                aria-label={`${isActive ? "Current page, " : ""}Page ${page}`}
                aria-current={isActive ? "page" : undefined}
              >
                {page}
              </button>
            );
          })}

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={paginationStyles.navButtonNext}
            aria-label="Next page"
          >
            <span className="sr-only">Next</span>
            <svg
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </nav>
      </div>
    </nav>
  );
}
