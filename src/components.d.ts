/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface FiberDemo {
        "elapsed": number;
    }
    interface FiberDot {
        "size": number;
        "text": string;
        "x": number;
        "y": number;
    }
    interface FiberTriangle {
        "s": number;
        "seconds": number;
        "x": number;
        "y": number;
    }
}
declare global {
    interface HTMLFiberDemoElement extends Components.FiberDemo, HTMLStencilElement {
    }
    var HTMLFiberDemoElement: {
        prototype: HTMLFiberDemoElement;
        new (): HTMLFiberDemoElement;
    };
    interface HTMLFiberDotElement extends Components.FiberDot, HTMLStencilElement {
    }
    var HTMLFiberDotElement: {
        prototype: HTMLFiberDotElement;
        new (): HTMLFiberDotElement;
    };
    interface HTMLFiberTriangleElement extends Components.FiberTriangle, HTMLStencilElement {
    }
    var HTMLFiberTriangleElement: {
        prototype: HTMLFiberTriangleElement;
        new (): HTMLFiberTriangleElement;
    };
    interface HTMLElementTagNameMap {
        "fiber-demo": HTMLFiberDemoElement;
        "fiber-dot": HTMLFiberDotElement;
        "fiber-triangle": HTMLFiberTriangleElement;
    }
}
declare namespace LocalJSX {
    interface FiberDemo {
        "elapsed"?: number;
    }
    interface FiberDot {
        "size"?: number;
        "text"?: string;
        "x"?: number;
        "y"?: number;
    }
    interface FiberTriangle {
        "s"?: number;
        "seconds"?: number;
        "x"?: number;
        "y"?: number;
    }
    interface IntrinsicElements {
        "fiber-demo": FiberDemo;
        "fiber-dot": FiberDot;
        "fiber-triangle": FiberTriangle;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "fiber-demo": LocalJSX.FiberDemo & JSXBase.HTMLAttributes<HTMLFiberDemoElement>;
            "fiber-dot": LocalJSX.FiberDot & JSXBase.HTMLAttributes<HTMLFiberDotElement>;
            "fiber-triangle": LocalJSX.FiberTriangle & JSXBase.HTMLAttributes<HTMLFiberTriangleElement>;
        }
    }
}