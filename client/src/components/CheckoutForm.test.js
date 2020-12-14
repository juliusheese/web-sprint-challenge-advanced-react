import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows
// i miss cypress :(


test("form header renders", async () => {
    render(<Fetch url="/checkout" />)
    await waitFor(() => screen.getByRole('heading'))
    expect(screen.getByRole('heading')).toHaveTextContent
});

test("form shows success message on submit with form details", async () => {
    render(<Fetch url="/checkout" />)
    fireEvent.click(screen.getByText('Checkout'))
    expect(screen.getByRole('success-message')).toHaveTextContent('You have ordered some plants!')
});

