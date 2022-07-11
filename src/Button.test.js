import React from "react"
import Button from "./Button"
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

let container = null;

beforeEach(() => {
    //setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

// afterEach(() => {
//     // cleanup on exiting
//     unmountComponentAtNode(container);
//     container.remove();
//     container = null;
// });

describe("Testing Button component", () => {

    it("Button Text test", () => {
        act(() => {
            render(<Button buttonText="btnTest" />, container);
        });

        expect(container.textContent).toBe("btnTest")

    });

});