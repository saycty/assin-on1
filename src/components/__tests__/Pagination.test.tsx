import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Pagination from "../Pagination";
import { paginationStyles } from "@/styles/tailwind-utilities";

const mockOnPageChange = jest.fn();

const defaultProps = {
  currentPage: 1,
  totalPages: 10,
  onPageChange: mockOnPageChange,
};

describe("Pagination", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders pagination buttons correctly", () => {
    render(<Pagination {...defaultProps} />);

    expect(screen.getByLabelText("Previous page")).toBeInTheDocument();
    expect(screen.getByLabelText("Next page")).toBeInTheDocument();
    expect(screen.getByLabelText("Current page, Page 1")).toBeInTheDocument();
  });

  it("disables previous button on first page", () => {
    render(<Pagination {...defaultProps} />);

    const prevButton = screen.getByLabelText("Previous page");
    expect(prevButton).toBeDisabled();
  });

  it("disables next button on last page", () => {
    render(<Pagination {...defaultProps} currentPage={10} />);

    const nextButton = screen.getByLabelText("Next page");
    expect(nextButton).toBeDisabled();
  });

  it("calls onPageChange when page number is clicked", () => {
    render(<Pagination {...defaultProps} />);

    const pageButton = screen.getByLabelText("Page 2");
    fireEvent.click(pageButton);

    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });

  it("calls onPageChange when next button is clicked", () => {
    render(<Pagination {...defaultProps} />);

    const nextButton = screen.getByLabelText("Next page");
    fireEvent.click(nextButton);

    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });

  it("calls onPageChange when previous button is clicked", () => {
    render(<Pagination {...defaultProps} currentPage={5} />);

    const prevButton = screen.getByLabelText("Previous page");
    fireEvent.click(prevButton);

    expect(mockOnPageChange).toHaveBeenCalledWith(4);
  });

  it("shows ellipsis for large page ranges", () => {
    render(<Pagination {...defaultProps} currentPage={5} totalPages={20} />);

    const ellipses = screen.getAllByText("...");
    expect(ellipses).toHaveLength(2); // Should show ellipses before and after
  });

  it("does not render when totalPages is 1", () => {
    const { container } = render(
      <Pagination {...defaultProps} totalPages={1} />
    );

    expect(container.firstChild).toBeNull();
  });

  it("shows mobile pagination on small screens", () => {
    render(<Pagination {...defaultProps} />);

    // Check for mobile-specific elements
    const mobileInfo = screen.getByText("Page 1 of 10");
    expect(mobileInfo).toBeInTheDocument();
  });

  it("highlights current page correctly", () => {
    render(<Pagination {...defaultProps} currentPage={3} />);

    const currentPageButton = screen.getByLabelText("Current page, Page 3");
    expect(currentPageButton).toHaveAttribute("aria-current", "page");
    expect(currentPageButton.className).toEqual(
      expect.stringContaining(paginationStyles.activePageButton.split(" ")[0])
    );
  });
});
