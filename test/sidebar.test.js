import Sidebar from "../src/components/sidebar"
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

it('renders sidebar items', () => {

    act(() => {
        let bounds = {
            "north": 0,
            "south": 0,
            "west": 0,
            "east": 0
        };

        render(<Sidebar coords={bounds} images={[]}/>, container)

    });
    expect(document.querySelector("img").alt).toBe("Visualización de imágenes");
    expect(document.getElementById("aoi")).not.toBe(null);
    expect(document.getElementById("imagelist")).not.toBe(null);
    expect(document.getElementsByClassName("info")[0]).not.toBe(null);

});
