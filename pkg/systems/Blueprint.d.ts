import { Component } from './Component';
export declare class Blueprint<Pattern extends Component> {
    private parameters;
    private pattern;
    Pattern({ children, ...properties }: Component.FnProps<Pattern>): Component.Template;
    constructor(pattern: new () => Pattern, parameters: Blueprint.Parameters<Partial<Pattern>>);
}
export declare namespace Blueprint {
    interface Choice<Value> {
        label: string;
        value: Value;
    }
    class Controller extends Component {
        height: number;
        width: number;
        protected handleComponentReady(): void;
        render(): Component.Template;
        theme(): Component.StyleSheet;
    }
    type Datum = Date | bigint | boolean | number | string;
    interface Parameters<Options extends object> {
        metadata: {
            description: string;
            label: string;
        };
        options: {
            [key in keyof Options]: {
                default?: Options[key];
                label: string;
                multiple?: boolean;
                options?: Blueprint.Choice<Options[key]>[];
            };
        };
    }
    enum Type {
        Date = 0,
        BigInt = 1,
        Boolean = 2,
        Number = 3,
        String = 4
    }
}
