import { describe, it, expect, afterEach, vi } from "vitest";
import {
  render,
  screen,
  cleanup,
  waitFor,
  fireEvent,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { MemoryRouter, Route, Routes } from "react-router-dom";
import SignInPage from "../components/signin/SignInForm";
import HomePage from "../pages/HomePage";
import { SignIn } from "../service/SignInService";

const renderLoginPage = () => {
  render(
    <MemoryRouter initialEntries={["/signin"]}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </MemoryRouter>
  );
};

describe("Sign in form behavior", async () => {
  afterEach(() => {
    cleanup();
  });

  it("Invalid form if empty fields:", async () => {
    renderLoginPage();
    const user = userEvent.setup();
    const signInForm = await screen.getByTestId(/sign-in-form/i);
    const emailError = await screen.queryByText(/Please enter email./i);
    const passwordError = await screen.queryByText(/Please enter password./i);
    const signInBtn = await screen.queryByRole("button", { name: /Sign In/i });

    expect(signInBtn).not.toBeNull();

    await user.click(signInBtn as HTMLElement);

    await waitFor(async () => {
      expect(emailError).toBeVisible();
      expect(passwordError).toBeVisible();
      expect(signInForm).toBeInvalid();
    });
  });

  it("Invalid form if email field is empty:", async () => {
    renderLoginPage();
    const user = userEvent.setup();
    const signInForm = await screen.getByTestId(/sign-in-form/i);
    const emailError = await screen.queryByText(/Please enter email./i);
    const passwordInput = (await screen.getByPlaceholderText(
      /Enter password/i
    )) as HTMLInputElement;
    const signInBtn = await screen.queryByRole("button", { name: /Sign In/i });
    expect(passwordInput).not.toBeNull();
    expect(signInBtn).not.toBeNull();

    fireEvent.change(passwordInput, { target: { value: "P4s$W0rD" } });

    await user.click(signInBtn as HTMLElement);

    await waitFor(async () => {
      expect(passwordInput.value).toBe("P4s$W0rD");
      expect(emailError).toBeVisible();
      expect(signInForm).toBeInvalid();
    });
  });

  it("Valid form:", async () => {
    vi.mock("../service/SignInService", { spy: true });
    renderLoginPage();
    const user = userEvent.setup();
    const signInForm = await screen.getByTestId(/sign-in-form/i);
    const emailInput = (await screen.getByPlaceholderText(
      /Enter email/i
    )) as HTMLInputElement;
    const passwordInput = (await screen.getByPlaceholderText(
      /Enter password/i
    )) as HTMLInputElement;
    const signInBtn = await screen.queryByRole("button", { name: /Sign In/i });
    expect(emailInput).not.toBeNull();
    expect(passwordInput).not.toBeNull();
    expect(signInBtn).not.toBeNull();

    fireEvent.change(emailInput, { target: { value: "email@email.com" } });
    fireEvent.change(passwordInput, { target: { value: "P4s$W0rD" } });

    await user.click(signInBtn as HTMLElement);

    await waitFor(async () => {
      expect(emailInput.value).toBe("email@email.com");
      expect(passwordInput.value).toBe("P4s$W0rD");
      expect(signInForm).toBeValid();
      expect(SignIn).toHaveBeenCalled();
    });
  });
});
