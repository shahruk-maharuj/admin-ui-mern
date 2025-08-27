import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Login from "./login";

describe("Login page", () => {
  it("should render with required fields", () => {
    render(<Login />);

    expect(screen.getByPlaceholderText("Username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /sign in/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("checkbox", { name: /remember me/i })
    ).toBeInTheDocument();
    expect(screen.getByText("Forgot password?")).toBeInTheDocument();
  });
});
