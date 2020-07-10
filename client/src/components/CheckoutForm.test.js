import React from "react";
import { render, screen, fireEvent} from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);

    const header = screen.getByText(/checkout form/i);
    expect(header).toBeVisible;
});

test("form shows success message on submit with form details", () => {
    const container = render(<CheckoutForm />);

    const firstNameInput = container.getByLabelText(/first name/i);
    const lastNameInput = container.getByLabelText(/last name/i);
    const addressInput = container.getByLabelText(/address/i);
    const cityInput = container.getByLabelText(/city/i);
    const stateInput = container.getByLabelText(/state/i);
    const zipInput = container.getByLabelText(/zip/i);

    fireEvent.change(firstNameInput, { target: { value: 'Brad'} })
    fireEvent.change(lastNameInput, { target: { value: 'Pitt'} })
    fireEvent.change(addressInput, { target: { value: '100 Hollywood Blvd'} })
    fireEvent.change(cityInput, { target: { value: 'LA'} })
    fireEvent.change(stateInput, { target: { value: 'CA'} })
    fireEvent.change(zipInput, { target: { value: '12345'} })

    const submitButton = container.getByRole('button');
    fireEvent.click(submitButton)

    const message = container.getByTestId('successMessage');
    expect(message).toBeVisible();
});
