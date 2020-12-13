import { Context } from 'cortex'

export class Theme<Value extends Theme.Context = Theme.Context> extends Context<Value> {
    public value = {
        font: {
            family: 'Arial, sans-serif',
            size: 16
        },
        gradients: [
            new Theme.Gradient(0, [
                [ new Theme.Color(Theme.Color.HEX, 0x000000), 0 ],
                [ new Theme.Color(Theme.Color.HEX, 0xFFFFFF), 1 ],
            ])
        ],
        palette: [
            new Theme.Color(Theme.Color.HEX, 0x000000),
            new Theme.Color(Theme.Color.HEX, 0xFFFFFF)
        ]
    } as Value
}

export namespace Theme {

    export class Color {
        
        private opacity: number
        private format: Color.Format
        private values: number[]

        public constructor(format: Color.Format, ...values: number[]) {
            this.opacity = 1
            this.format = format
            this.values = values
        }

        public alpha(percent: number): Color {
            return Object.assign(new Color(this.format, ...this.values), { opacity: percent / 100 })
        }

        public toString(): string {
            switch (this.format) {
                case Color.Format.HEX:
                    return `#${ this.values[ 0 ].toString(16) }${ Math.round(this.opacity * 255).toString(16) }`
                case Color.Format.HSL:
                    return `hsla(${ this.values.join(', ') }, ${ this.opacity })`
                case Color.Format.RGB:
                    return `rgba(${ this.values.join(', ') }, ${ this.opacity })`
            }
        }
    }

    export namespace Color {
        
        export enum Format {
            HEX,
            HSL,
            RGB
        }

        export const HEX = Format.HEX
        export const HSL = Format.HSL
        export const RGB = Format.RGB
    }

    export interface Font {
        family: string
        size: number
    }

    export class Gradient {

        private angle: number
        private steps: Gradient.Step[]

        public constructor(angle: number, steps: Gradient.Step[]) {
            this.angle = angle
            this.steps = steps
        }
    }

    export namespace Gradient {
        export type Step = [ Color, number ]
    }

    export enum Size {
        Small,
        Medium,
        Large,
    }

    export interface Context {
        font: Font
        gradients: Gradient[]
        palette: Color[]
    }
}