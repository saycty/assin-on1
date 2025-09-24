import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import WorkerCard from "../WorkerCard";
import { WorkerType } from "../../types/workers";

// Mock GSAP to avoid issues in test environment
jest.mock("gsap", () => ({
  fromTo: jest.fn(),
  to: jest.fn(),
}));

const mockWorker: WorkerType = {
  id: 1,
  name: "John Doe",
  service: "Plumber",
  pricePerDay: 1000,
  image: "https://example.com/john-doe.jpg",
};

const mockProps = {
  worker: mockWorker,
  onContact: jest.fn(),
  onMouseEnter: jest.fn(),
  onMouseLeave: jest.fn(),
};

describe("WorkerCard", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders worker information correctly", () => {
    render(<WorkerCard {...mockProps} />);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getAllByText(/plumber/i).length).toBeGreaterThanOrEqual(1);
    const expectedPrice = Math.round(mockWorker.pricePerDay * 1.18);
    expect(
      screen.getByText((content) =>
        content.replace(/[\s,]/g, "").includes(`₹${expectedPrice}`)
      )
    ).toBeInTheDocument();
  });

  it("displays worker image with correct alt text", () => {
    render(<WorkerCard {...mockProps} />);

    const image = screen.getByAltText("John Doe - Plumber");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", mockWorker.image);
  });

  it("calls onContact when contact button is clicked", () => {
    render(<WorkerCard {...mockProps} />);

    const contactButton = screen.getByLabelText(
      `Contact ${mockWorker.name} for ${mockWorker.service} services`
    );
    fireEvent.click(contactButton);

    expect(mockProps.onContact).toHaveBeenCalledWith(1);
  });

  it("has proper accessibility attributes", () => {
    render(<WorkerCard {...mockProps} />);

    const expectedAria = `${mockWorker.name}, ${
      mockWorker.service
    } - ₹${Math.round(mockWorker.pricePerDay * 1.18)} per day`;
    const article = screen.getByLabelText(expectedAria);
    expect(article).toHaveAttribute("aria-label", expectedAria);
    expect(article).toHaveAttribute("tabIndex", "0");
  });

  it("shows online status indicator", () => {
    render(<WorkerCard {...mockProps} />);

    // Check for the green dot indicating online status
    const statusIndicator = document.querySelector(".bg-green-500");
    expect(statusIndicator).toBeInTheDocument();
  });

  it("applies hover classes for interactive states", () => {
    render(<WorkerCard {...mockProps} />);

    const expectedAria = `${mockWorker.name}, ${
      mockWorker.service
    } - ₹${Math.round(mockWorker.pricePerDay * 1.18)} per day`;
    const card = screen.getByLabelText(expectedAria);
    expect(card).toHaveClass("group");
    expect(card).toHaveClass("hover:shadow-2xl");
    expect(card).toHaveClass("hover:border-primary-200");
  });

  it("handles keyboard navigation", () => {
    render(<WorkerCard {...mockProps} />);

    const expectedAria = `${mockWorker.name}, ${
      mockWorker.service
    } - ₹${Math.round(mockWorker.pricePerDay * 1.18)} per day`;
    const card = screen.getByLabelText(expectedAria);
    card.focus();

    fireEvent.keyDown(card, { key: "Enter", code: "Enter" });
    // The card should be focusable and handle keyboard events
    expect(card).toHaveFocus();
  });
});
