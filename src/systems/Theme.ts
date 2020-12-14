import color from 'color'
import { Context } from 'cortex'

export class Theme<Value extends Theme.Context = Theme.Context> extends Context<Value> {
    public value = Theme.Default as Value
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

        public darken(amount: number): Color {
            return new Color(this.format, ...color(this.toString()).darken(amount).array())
        }

        public lighten(amount: number): Color {
            return new Color(this.format, ...color(this.toString()).lighten(amount).array())
        }

        public negate(): Color {
            return new Color(this.format, ...color(this.toString()).negate().array())
        }

        public rotate(amount): Color {
            return new Color(this.format, ...color(this.toString()).rotate(amount).array())
        }

        public toString(): string {
            switch (this.format) {
                case Color.Format.HEX:
                    return `#${ this.values.map(n => n.toString(16)).join('') }${ Math.round(this.opacity * 255).toString(16) }`
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

    export class Font {

        private family: string
        private size: number
        private serif: boolean

        public constructor(family: string, size: number = 1, serif: boolean = false) {
            this.family = family
            this.size = size
            this.serif = serif
        }

        public resize(size: number): Font {
            return new Font(this.family, size, this.serif)
        }

        public toString(): string {
            return `${ this.size }rem ${ this.family }, ${ this.serif ? 'serif' : 'sans-serif' }`
        }
    }

    export class Gradient {

        private angle: number
        private steps: Gradient.Step[]

        public constructor(angle: number, steps: Gradient.Step[]) {
            this.angle = angle
            this.steps = steps
        }

        public toString(): string {
            return `linear-gradient(${ this.angle }deg, ${ this.steps.map(([ color, stop ]) => `${ color } ${ stop * 100 }%`) })`
        }
    }

    export namespace Gradient {
        export type Step = [ Color, number ]
    }

    export class Shadow {}

    export interface Context {
        colors: Color[]
        fonts: Font[]
        gradients: Gradient[]
        shadows: Shadow[]
    }

    export const Default: Context = {
        colors: [
            new Theme.Color(Theme.Color.HEX, 0x000000),
            new Theme.Color(Theme.Color.HEX, 0xFFFFFF)
        ],
        fonts: [
            new Theme.Font('Arial', 1)
        ],
        gradients: [
            new Theme.Gradient(0, [
                [ new Theme.Color(Theme.Color.HEX, 0x000000), 0 ],
                [ new Theme.Color(Theme.Color.HEX, 0xFFFFFF), 1 ],
            ])
        ],
        shadows: []
    } 
}