import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows
// i miss cypress :(


test("form header renders", () => {
    render("/checkout")
    expect(CheckoutForm).toBeDefined()
});

test("form shows success message on submit with form details", () => {
    render("/checkout")
    fireEvent.click(screen.getByText('Checkout'))
    expect().toContain("success-messege")
});

