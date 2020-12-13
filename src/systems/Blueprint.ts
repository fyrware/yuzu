import { Component } from './Component'

export class Blueprint<Pattern extends Component> {

    private parameters: Blueprint.Parameters<Partial<Pattern>>
    private pattern: new() => Pattern

    public Pattern({ children, ...properties }: Component.FnProps<Pattern>): Component.Template {
        return [
            Component.createElement(Blueprint.Controller, undefined, ...[
                Component.createElement(this.pattern, properties as any)
            ])
        ]
    }

    public constructor(pattern: new() => Pattern, parameters: Blueprint.Parameters<Partial<Pattern>>) {
        Object.assign(this, {
            parameters,
            pattern
        })
    }
}

export namespace Blueprint {

    export interface Choice<Value> {
        label: string
        value: Value
    }

    export class Controller extends Component {

        public height: number
        public width: number

        protected handleComponentReady(): void {
            this.addEventListener('mouseenter', () => {
                const { height, width } = this.getBoundingClientRect()

                this.update({ 
                    height, 
                    width 
                })
            })
            this.addEventListener('mouseleave', () => {
                this.update({ 
                    height: 0, 
                    width: 0 
                })
            })
        }

        public render(): Component.Template {
            return [
                Component.createElement(HTMLSlotElement),
                Component.createElement(HTMLDivElement, { id: 'controls' }, ...[
                    // ...
                ])
            ]
        }

        public theme(): Component.StyleSheet {
            return `
                :host {
                    display: contents;
                    position: relative;
                }

                #controls {
                    height: ${ this.height }px;
                    position: absolute;
                    width: ${ this.width }px;
                }
            `
        }
    }

    export type Datum =
        | Date
        | bigint
        | boolean
        | number
        | string

    export interface Parameters<Options extends object> {
        metadata: {
            description: string
            label: string
        }
        options: {
            [ key in keyof Options ]: {
                default?: Options[ key ]
                label: string
                multiple?: boolean
                options?: Blueprint.Choice<Options[ key ]>[]
            }
        }
    }

    export enum Type {
        Date,
        BigInt,
        Boolean,
        Number,
        String
    }
}