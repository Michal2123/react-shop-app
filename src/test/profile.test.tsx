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
import { IUser } from "../interfaces/AuthenticationInterface";
import { UpdateShippingDetails } from "../service/ProfileService";
import ProfileShippingTab from "../components/profile/ProfileShippingTab";

const mockUser: IUser = {
  firstName: "Bob",
  lastName: "John",
  email: "email@email.com",
  city: "Warsaw",
  address: "Plac Unii",
  zipCode: "00-112",
};

vi.mock("../service/ProfileService", { spy: true });
const user = userEvent.setup();

describe("User shipping detail form behavior", async () => {
  afterEach(() => {
    cleanup();
  });

  const renderProfileEmailTab = () => {
    render(
      <MemoryRouter initialEntries={["/profile"]}>
        <Routes>
          <Route
            path="/profile"
            element={<ProfileShippingTab user={mockUser} />}
          />
        </Routes>
      </MemoryRouter>
    );
  };

  it("Disable submit btn if all form fields did not change:", async () => {
    renderProfileEmailTab();
    const submitBtn = screen.getByRole("button", { name: /Save/i });

    expect(submitBtn).not.toBeNull();
    expect(submitBtn).toBeDisabled();
  });

  it("Invalid shipping detail form if one field empty:", async () => {
    renderProfileEmailTab();
    const submitBtn = screen.getByRole("button", { name: /Save/i });
    const shippingDetailForm = screen.getByTestId(/shipping-detail-form/i);
    const firstNameInput = screen.getByPlaceholderText(
      /Enter first name/i
    ) as HTMLInputElement;
    const firstNameError = screen.getByText(/Enter first name/i);

    expect(submitBtn).not.toBeNull();

    fireEvent.change(firstNameInput, { target: { value: "" } });

    expect(firstNameInput.value).toBe("");
    user.click(submitBtn);

    await waitFor(async () => {
      expect(firstNameError).toBeVisible();
      expect(shippingDetailForm).toBeInvalid();
    });
  });

  it("Valid shipping detail form:", async () => {
    renderProfileEmailTab();
    const submitBtn = screen.getByRole("button", { name: /Save/i });
    const shippingDetailForm = screen.getByTestId(/shipping-detail-form/i);
    const firstNameInput = screen.getByPlaceholderText(
      /Enter first name/i
    ) as HTMLInputElement;

    expect(submitBtn).not.toBeNull();

    fireEvent.change(firstNameInput, { target: { value: "Boby" } });

    expect(firstNameInput.value).toBe("Boby");
    user.click(submitBtn);

    await waitFor(async () => {
      expect(shippingDetailForm).toBeValid();
      expect(UpdateShippingDetails).toHaveBeenCalled();
    });
  });
});
