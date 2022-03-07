import React from "react";
import { render, screen } from "@testing-library/react";
import GenerateNPCRandomly from "./GenerateNPCRandomly";

test("renders loading screen", () => {
  render(<GenerateNPCRandomly />); //render is from @testing-library/react
  expect(screen.getByText(/Generating Info.../i)).toBeInTheDocument();
});
