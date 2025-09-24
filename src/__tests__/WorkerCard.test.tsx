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
    expect(screen.getAllByText(/welder/i).length).toBeGreaterThanOrEqual(1);
    const expectedPrice = Math.round(mockWorker.pricePerDay * 1.18);
    expect(
      screen.getByText((content) =>
        content.replace(/[\s,]/g, "").includes(`₹${expectedPrice}`)
      )
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText(/contact john doe for welder services/i)
    ).toBeInTheDocument();
  });

  it("calls onContact when contact button is clicked", () => {
    const mockOnContact = jest.fn();
    render(<WorkerCard worker={mockWorker} onContact={mockOnContact} />);

    const contactButton = screen.getByLabelText(
      /contact john doe for welder services/i
    );
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

    // the component renders both an outer article with role=button and an inner CTA button
    // select the outer card by its aria-label to avoid ambiguity
    const card = screen.getByLabelText("John Doe, Welder - ₹590 per day");
    expect(card).toHaveAttribute(
      "aria-label",
      "John Doe, Welder - ₹590 per day"
    );
    expect(card).toHaveAttribute("tabIndex", "0");
  });
});
