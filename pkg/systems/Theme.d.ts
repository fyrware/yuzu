import { Context } from 'cortex';
export declare class Theme extends Context<Theme.Context> {
    value: {
        action: {
            critical: Theme.Color;
            discover: Theme.Color;
            failure: Theme.Color;
            success: Theme.Color;
            warning: Theme.Color;
        };
        common: {
            black: Theme.Color;
            white: Theme.Color;
        };
        font: {
            family: string;
            size: number;
        };
        palette: {
            primary: Theme.Color;
            secondary: Theme.Color;
            tertiary: Theme.Color;
            quaternary: Theme.Color;
        };
    };
}
export declare namespace Theme {
    class Color {
        private opacity;
        private format;
        private values;
        constructor(format: Color.Format, ...values: number[]);
        alpha(percent: number): Color;
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
    interface Context {
        action: {
            critical: Color;
            discover: Color;
            success: Color;
            warning: Color;
        };
        common: {
            black: Color;
            white: Color;
        };
        font: Font;
        palette: {
            primary: Color;
            secondary: Color;
            tertiary: Color;
            quaternary: Color;
        };
    }
    interface Font {
        family: string;
        size: number;
    }
    enum Palette {
        Primary = 0,
        Secondary = 1,
        Tertiary = 2,
        Quaternary = 3
    }
    enum Size {
        Small = 0,
        Medium = 1,
        Large = 2
    }
}
