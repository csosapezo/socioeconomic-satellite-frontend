import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils"
import Infobox from "../src/components/sidebar_items/infobox";

let container = null;

beforeEach(() => {
    jest.spyOn(console, 'error')
    console.error.mockImplementation(() => null);
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    console.error.mockRestore()
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('renders AOI text', () => {
    act(() => {


        render(<Infobox/>, container)

    });

    expect(container.querySelector(".info-title").textContent).toBe("Instrucciones de uso")
});