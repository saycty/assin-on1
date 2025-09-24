import { render } from "@testing-library/react";
import Pagination from "./Pagination";
import React from "react";

describe("Pagination basic", () => {
  it("does not render when totalPages <= 1", () => {
    const { container } = render(
      <Pagination currentPage={1} totalPages={1} onPageChange={() => {}} />
    );
    expect(container.firstChild).toBeNull();
  });

  it("renders page info for mobile text", () => {
    const { getByText } = render(
      <Pagination currentPage={2} totalPages={5} onPageChange={() => {}} />
    );

    expect(getByText(/Page 2 of 5/)).toBeInTheDocument();
  });
});
