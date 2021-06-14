import Imagelist  from "../src/components/sidebar_items/imagelist"
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

    let images = [{"name": "foo"}, {"name": "bar"}]

    act(() => {


        render(<Imagelist images={images}/>, container)

    });

    expect(document.getElementById("0").textContent).toBe("foo");
    expect(document.getElementById("1").textContent).toBe("bar");
    expect(container.querySelector(".list-title").textContent).toBe("Selección de Imágenes")
    expect(container.querySelector(".header").textContent).toBe("Nombre de archivo")
    expect(container.querySelector(".btn1").textContent).toBe("Seleccionar")
    expect(container.querySelector(".btn2").textContent).toBe("Regresar")
});