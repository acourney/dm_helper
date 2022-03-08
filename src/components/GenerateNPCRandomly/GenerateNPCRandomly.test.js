import React from "react";
import { render, screen } from "@testing-library/react";
import GenerateNPCRandomly from "./GenerateNPCRandomly";

test("renders loading screen", () => {
  render(<GenerateNPCRandomly />); //render is from @testing-library/react
  expect(screen.getByText(/Generating Info.../i)).toBeInTheDocument();
});

test("Promises work", () => {
  const successResult = "Some data";
  const getSuccess = jest.fn(() => Promise.resolve(successResult));
  const getFail = jest.fn(() => Promise.reject(new Error()));
});

it("displays npc class after fetching API data", async () => {
  const { getByTestId, getByText } = render(<GenerateNPCRandomly />);

  await waitFor(() => {
    expect(getByText("Class")).toBeVisible();
  });
});
