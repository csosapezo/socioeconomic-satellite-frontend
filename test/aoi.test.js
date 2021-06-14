import AOI from "../src/components/sidebar_items/aoi"
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils"


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

    let bounds = {
        "north": 0,
        "south": 0,
        "west": 0,
        "east": 0
    };

    act(() => {


        render(<AOI bounds={bounds}/>, container)

    });

    expect(container.querySelector("#top").value).toBe((Math.round(bounds.north * 10000) / 10000).toString());
    expect(container.querySelector("#bottom").value).toBe((Math.round(bounds.south * 10000) / 10000).toString());
    expect(container.querySelector("#left").value).toBe((Math.round(bounds.west * 10000) / 10000).toString());
    expect(container.querySelector("#right").value).toBe((Math.round(bounds.east * 10000) / 10000).toString());
    expect(container.querySelector(".aoi-title").textContent).toBe("Área de Interés (AOI)")
    expect(container.querySelector(".btn1").textContent).toBe("Seleccionar")
    expect(container.querySelector(".btn2").textContent).toBe("Borrar Todo")
});