import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Header from "../components/Header";



describe("Header", () => {
  it("should be present", () => {
    render(<Header />);
    const element = screen.getByTestId("header-component");
    expect(element).toBeInTheDocument();
  });

  it("should render the name of the logged-in customer", () => {
    render(<Header />);
    const element = screen.getByTestId("customer-name");
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent("Bob Smith");
  });
});
