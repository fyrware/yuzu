import * as Cortex from 'cortex';
/**
 * Simplifies contract of cortex for use in framework
 */
export declare class Component extends Cortex.Component {
}
export declare namespace Component {
    type Fn<Props = unknown> = Cortex.Component.Fn<Props>;
    type FnProps<Props> = Cortex.Component.PropsWithChildren<Props>;
    type StyleSheet = string;
    type Template = Cortex.Element.Child[];
    const createElement: typeof Cortex.createElement;
}
