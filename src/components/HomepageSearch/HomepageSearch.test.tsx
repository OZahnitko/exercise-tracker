import userEvent from "@testing-library/user-event";

import { render, screen } from "../../utility/test";

import HomepageSearch from "./HomepageSearch";

describe("renders the search component", () => {
  beforeEach(() => render(<HomepageSearch />));

  it("should", () => {
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });

  it("should allow typing", () => {
    userEvent.type(
      screen.getByPlaceholderText(/search/i),
      "Hello from the other side"
    );
  });

  it("should allow blur", () => {
    userEvent.type(
      screen.getByPlaceholderText(/search/i),
      "Hello from the other side"
    );
    userEvent.tab();
  });
});
