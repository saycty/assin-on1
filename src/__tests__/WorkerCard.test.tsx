import { render, screen, fireEvent } from "@testing-library/react";
import WorkerCard from "../components/WorkerCard";
import { WorkerType } from "../types/workers";

const mockWorker: WorkerType = {
  id: 1,
  name: "John Doe",
  service: "Welder",
  pricePerDay: 500,
  image: "https://example.com/image.jpg",
};

describe("WorkerCard", () => {
  it("renders worker information correctly", () => {
    render(<WorkerCard worker={mockWorker} />);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Welder")).toBeInTheDocument();
    expect(screen.getByText("₹590")).toBeInTheDocument(); // 500 * 1.18
    expect(screen.getByText("Contact Now")).toBeInTheDocument();
  });

  it("calls onContact when contact button is clicked", () => {
    const mockOnContact = jest.fn();
    render(<WorkerCard worker={mockWorker} onContact={mockOnContact} />);

    const contactButton = screen.getByText("Contact Now");
    fireEvent.click(contactButton);

    expect(mockOnContact).toHaveBeenCalledWith(1);
  });

  it("displays image with correct alt text", () => {
    render(<WorkerCard worker={mockWorker} />);

    const image = screen.getByAltText("John Doe - Welder");
    expect(image).toBeInTheDocument();
  });

  it("has proper accessibility attributes", () => {
    render(<WorkerCard worker={mockWorker} />);

    const card = screen.getByRole("button");
    expect(card).toHaveAttribute(
      "aria-label",
      "John Doe, Welder - ₹590 per day"
    );
    expect(card).toHaveAttribute("tabIndex", "0");
  });
});
