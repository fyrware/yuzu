import * as Cortex from 'cortex'

/**
 * Simplifies contract of cortex for use in framework
 */
export class Component extends Cortex.Component {

}

export namespace Component {
    export type Fn<Props = unknown> = Cortex.Component.Fn<Props>
    export type FnProps<Props> = Cortex.Component.PropsWithChildren<Props>
    export type StyleSheet = string
    export type Template = Cortex.Element.Child[]
    
    export const createElement = Cortex.createElement
}