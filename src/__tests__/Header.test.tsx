import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Header from "../components/Header";



describe("Header", () => {
  it("should be present", () => {
    render(<Header />);
    const element = screen.getByTestId("header-component");
    expect(element).toBeInTheDocument();
  });


});
