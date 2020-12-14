import { Context } from 'cortex';
export declare class Theme<Value extends Theme.Context = Theme.Context> extends Context<Value> {
    value: Value;
}
export declare namespace Theme {
    class Color {
        private opacity;
        private format;
        private values;
        constructor(format: Color.Format, ...values: number[]);
        alpha(percent: number): Color;
        darken(amount: number): Color;
        lighten(amount: number): Color;
        negate(): Color;
        rotate(amount: any): Color;
        toString(): string;
    }
    namespace Color {
        enum Format {
            HEX = 0,
            HSL = 1,
            RGB = 2
        }
        const HEX = Format.HEX;
        const HSL = Format.HSL;
        const RGB = Format.RGB;
    }
    class Font {
        private family;
        private size;
        private serif;
        constructor(family: string, size?: number, serif?: boolean);
        resize(size: number): Font;
        toString(): string;
    }
    class Gradient {
        private angle;
        private steps;
        constructor(angle: number, steps: Gradient.Step[]);
        toString(): string;
    }
    namespace Gradient {
        type Step = [Color, number];
    }
    class Shadow {
    }
    interface Context {
        colors: Color[];
        fonts: Font[];
        gradients: Gradient[];
        shadows: Shadow[];
    }
    const Default: Context;
}
