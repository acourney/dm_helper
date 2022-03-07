import { render, screen } from "@testing-library/react";
import PartyInput from "./PartyInput";

test("renders Input form", () => {
  render(<PartyInput />);
  const linkElement = screen.getByText(/Input/i);
  expect(linkElement).toBeInTheDocument();
});
