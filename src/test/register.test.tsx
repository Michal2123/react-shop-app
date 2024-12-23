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
import RegisterComponent from "../components/register/Register";
import RegisterStepController from "../components/register/RegisterStepController";
import { Register } from "../service/RegisterService";

const renderLoginPage = () => {
  render(
    <MemoryRouter initialEntries={["/register"]}>
      <Routes>
        <Route path="/register" element={<RegisterComponent />} />
      </Routes>
    </MemoryRouter>
  );
};

describe("Register step one form behavior", async () => {
  afterEach(() => {
    cleanup();
  });

  it("Invalid form if empty fields:", async () => {
    renderLoginPage();
    const user = userEvent.setup();
    const stepOneForm = await screen.getByTestId(/step-one-register-form/i);
    const emailError = await screen.queryByText(/Please enter email./i);
    const passwordError = await screen.queryByText(/Please enter password./i);
    const repeatePasswordError = await screen.queryByText(
      /Please repeate password./i
    );
    const nextStepBtn = await screen.queryByRole("button", {
      name: /Next step/i,
    });

    expect(stepOneForm).not.toBeNull();
    expect(nextStepBtn).not.toBeNull();

    await user.click(nextStepBtn as HTMLElement);

    await waitFor(async () => {
      expect(emailError).toBeVisible();
      expect(passwordError).toBeVisible();
      expect(repeatePasswordError).toBeVisible();
      expect(stepOneForm).toBeInvalid();
    });
  });

  it("Invalid form if email field is empty:", async () => {
    renderLoginPage();
    const user = userEvent.setup();
    const stepOneForm = await screen.getByTestId(/step-one-register-form/i);
    const emailError = await screen.queryByText(/Please enter email./i);

    const passwordInput = (await screen.queryByPlaceholderText(
      /Enter password/i
    )) as HTMLInputElement;
    const repeatePasswordInput = (await screen.queryByPlaceholderText(
      /Repeat password/i
    )) as HTMLInputElement;

    const nextStepBtn = await screen.queryByRole("button", {
      name: /Next step/i,
    });

    expect(stepOneForm).not.toBeNull();
    expect(nextStepBtn).not.toBeNull();

    fireEvent.change(passwordInput, { target: { value: "P4s$W0rD" } });
    fireEvent.change(repeatePasswordInput, { target: { value: "P4s$W0rD" } });

    await user.click(nextStepBtn as HTMLElement);

    await waitFor(async () => {
      expect(repeatePasswordInput.value).toBe(passwordInput.value);
      expect(emailError).toBeVisible();
      expect(stepOneForm).toBeInvalid();
    });
  });

  it("Invalid form if repeat password field is different than password field:", async () => {
    renderLoginPage();
    const user = userEvent.setup();
    const stepOneForm = await screen.getByTestId(/step-one-register-form/i);
    const repeatPasswordError = await screen.queryByText(
      /Please repeate password./i
    );

    const emailInput = (await screen.queryByPlaceholderText(
      /Enter email/i
    )) as HTMLInputElement;

    const passwordInput = (await screen.queryByPlaceholderText(
      /Enter password/i
    )) as HTMLInputElement;
    const repeatePasswordInput = (await screen.queryByPlaceholderText(
      /Repeat password/i
    )) as HTMLInputElement;

    const nextStepBtn = await screen.queryByRole("button", {
      name: /Next step/i,
    });

    expect(stepOneForm).not.toBeNull();
    expect(nextStepBtn).not.toBeNull();

    fireEvent.change(emailInput, { target: { value: "email@email.com" } });
    fireEvent.change(passwordInput, { target: { value: "P4s$W0rD" } });
    fireEvent.change(repeatePasswordInput, { target: { value: "password" } });

    await user.click(nextStepBtn as HTMLElement);

    await waitFor(async () => {
      expect(emailInput.value).toBe("email@email.com");
      expect(repeatePasswordInput.value).not.toBe(passwordInput.value);
      expect(repeatPasswordError).toBeVisible();
      expect(stepOneForm).toBeInvalid();
    });
  });
  it("Valid form:", async () => {
    renderLoginPage();
    const user = userEvent.setup();
    const stepOneForm = await screen.getByTestId(/step-one-register-form/i);

    const emailInput = (await screen.queryByPlaceholderText(
      /Enter email/i
    )) as HTMLInputElement;

    const passwordInput = (await screen.queryByPlaceholderText(
      /Enter password/i
    )) as HTMLInputElement;
    const repeatePasswordInput = (await screen.queryByPlaceholderText(
      /Repeat password/i
    )) as HTMLInputElement;

    const nextStepBtn = await screen.queryByRole("button", {
      name: /Next step/i,
    });

    expect(stepOneForm).not.toBeNull();
    expect(nextStepBtn).not.toBeNull();

    fireEvent.change(emailInput, { target: { value: "email@email.com" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });
    fireEvent.change(repeatePasswordInput, { target: { value: "password" } });

    await user.click(nextStepBtn as HTMLElement);

    await waitFor(async () => {
      expect(emailInput.value).toBe("email@email.com");
      expect(passwordInput.value).toBe("password");
      expect(repeatePasswordInput.value).toBe(passwordInput.value);
      expect(stepOneForm).toBeValid();
    });
  });
});

describe("Register step two form behavior", async () => {
  afterEach(() => {
    cleanup();
  });

  const renderLoginPage = () => {
    render(
      <MemoryRouter initialEntries={["/register"]}>
        <Routes>
          <Route
            path="/register"
            element={
              <RegisterStepController
                isStepTwo={true}
                handleNextStep={vi.fn()}
              />
            }
          />
        </Routes>
      </MemoryRouter>
    );
  };

  it("Invalid form if empty fields:", async () => {
    renderLoginPage();

    const user = userEvent.setup();
    const stepTwoForm = await screen.getByTestId(/shipping-detail-form/i);
    const firstNameError = await screen.queryByText(
      /Please enter first name./i
    );
    const lastNameError = await screen.queryByText(/Please enter last name./i);
    const cityError = await screen.queryByText(/Please enter city./i);
    const zipCodeError = await screen.queryByText(/Please enter zip code./i);
    const addressError = await screen.queryByText(/Please enter address./i);
    const registerBtn = await screen.queryByRole("button", {
      name: /Register/i,
    });

    expect(stepTwoForm).not.toBeNull();
    expect(registerBtn).not.toBeNull();

    await user.click(registerBtn as HTMLElement);
    await waitFor(async () => {
      expect(firstNameError).toBeVisible();
      expect(lastNameError).toBeVisible();
      expect(cityError).toBeVisible();
      expect(zipCodeError).toBeVisible();
      expect(addressError).toBeVisible();
      expect(stepTwoForm).toBeInvalid();
    });
  });

  it("Invalid form if zip code field is invalid:", async () => {
    renderLoginPage();

    const user = userEvent.setup();
    const stepTwoForm = await screen.getByTestId(/shipping-detail-form/i);
    const firstNameInput = (await screen.queryByPlaceholderText(
      /Enter first name/i
    )) as HTMLInputElement;
    const lastNameInput = (await screen.queryByPlaceholderText(
      /Enter last name/i
    )) as HTMLInputElement;
    const cityInput = (await screen.queryByPlaceholderText(
      /Enter city/i
    )) as HTMLInputElement;
    const zipcodeInput = (await screen.queryByPlaceholderText(
      /Enter zip code./i
    )) as HTMLInputElement;
    const addressInput = (await screen.queryByPlaceholderText(
      /Enter address./i
    )) as HTMLInputElement;

    const registerBtn = await screen.queryByRole("button", {
      name: /Register/i,
    });

    expect(stepTwoForm).not.toBeNull();
    expect(registerBtn).not.toBeNull();

    fireEvent.change(firstNameInput, { target: { value: "Bob" } });
    fireEvent.change(lastNameInput, { target: { value: "John" } });
    fireEvent.change(cityInput, { target: { value: "Warsaw" } });
    fireEvent.change(zipcodeInput, { target: { value: "11-23456" } });
    fireEvent.change(addressInput, { target: { value: "Plac Unii" } });

    await user.click(registerBtn as HTMLElement);
    await waitFor(async () => {
      const zipcodeError = await screen.queryByText(/Invalid zip code./i);
      expect(firstNameInput.value).toBe("Bob");
      expect(lastNameInput.value).toBe("John");
      expect(cityInput.value).toBe("Warsaw");
      expect(zipcodeInput.value).toBe("11-23456");
      expect(addressInput.value).toBe("Plac Unii");
      expect(zipcodeError).toBeVisible();
      expect(stepTwoForm).toBeInvalid();
    });
  });

  it("Valid form:", async () => {
    vi.mock("../service/RegisterService", { spy: true });

    renderLoginPage();

    const user = userEvent.setup();
    const stepTwoForm = await screen.getByTestId(/shipping-detail-form/i);
    const firstNameInput = (await screen.queryByPlaceholderText(
      /Enter first name/i
    )) as HTMLInputElement;
    const lastNameInput = (await screen.queryByPlaceholderText(
      /Enter last name/i
    )) as HTMLInputElement;
    const cityInput = (await screen.queryByPlaceholderText(
      /Enter city/i
    )) as HTMLInputElement;
    const zipcodeInput = (await screen.queryByPlaceholderText(
      /Enter zip code./i
    )) as HTMLInputElement;
    const addressInput = (await screen.queryByPlaceholderText(
      /Enter address./i
    )) as HTMLInputElement;

    const registerBtn = await screen.queryByRole("button", {
      name: /Register/i,
    });

    expect(stepTwoForm).not.toBeNull();
    expect(registerBtn).not.toBeNull();

    fireEvent.change(firstNameInput, { target: { value: "Bob" } });
    fireEvent.change(lastNameInput, { target: { value: "John" } });
    fireEvent.change(cityInput, { target: { value: "Warsaw" } });
    fireEvent.change(zipcodeInput, { target: { value: "11-234" } });
    fireEvent.change(addressInput, { target: { value: "Plac Unii" } });

    await user.click(registerBtn as HTMLElement);

    await waitFor(async () => {
      expect(firstNameInput.value).toBe("Bob");
      expect(lastNameInput.value).toBe("John");
      expect(cityInput.value).toBe("Warsaw");
      expect(zipcodeInput.value).toBe("11-234");
      expect(addressInput.value).toBe("Plac Unii");
      expect(stepTwoForm).toBeValid();
      expect(Register).toHaveBeenCalled();
    });
  });
});
