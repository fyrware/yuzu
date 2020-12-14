"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blueprint = void 0;
const cortex_1 = require("cortex");
class Blueprint extends cortex_1.Component {
}
exports.Blueprint = Blueprint;
// export class Blueprint<Pattern extends Component> {
//     private parameters: Blueprint.Parameters<Partial<Pattern>>
//     private pattern: new() => Pattern
//     public Pattern({ children, ...properties }: Component.PropsWithChildren<Pattern>): Element.Child[] {
//         return [
//             createElement(Blueprint.Controller, undefined, ...[
//                 createElement(this.pattern, properties as any)
//             ])
//         ]
//     }
//     public constructor(pattern: new() => Pattern, parameters: Blueprint.Parameters<Partial<Pattern>>) {
//         Object.assign(this, {
//             parameters,
//             pattern
//         })
//     }
// }
// export namespace Blueprint {
//     export interface Choice<Value> {
//         label: string
//         value: Value
//     }
//     export class Controller extends Component {
//         public height: number
//         public width: number
//         protected handleComponentReady(): void {
//             this.addEventListener('mouseenter', () => {
//                 const { height, width } = this.getBoundingClientRect()
//                 this.update({ 
//                     height, 
//                     width 
//                 })
//             })
//             this.addEventListener('mouseleave', () => {
//                 this.update({ 
//                     height: 0, 
//                     width: 0 
//                 })
//             })
//         }
//         protected render(): Element.Child[] {
//             return [
//                 createElement(HTMLSlotElement),
//                 createElement(HTMLDivElement, { id: 'controls' }, ...[
//                     // ...
//                 ])
//             ]
//         }
//         protected theme(): string {
//             return `
//                 :host {
//                     display: contents;
//                     position: relative;
//                 }
//                 #controls {
//                     height: ${ this.height }px;
//                     position: absolute;
//                     width: ${ this.width }px;
//                 }
//             `
//         }
//     }
//     export type Datum =
//         | Date
//         | bigint
//         | boolean
//         | number
//         | string
//     export interface Parameters<Options extends object> {
//         metadata: {
//             description: string
//             label: string
//         }
//         options: {
//             [ key in keyof Options ]: {
//                 default?: Options[ key ]
//                 label: string
//                 multiple?: boolean
//                 options?: Blueprint.Choice<Options[ key ]>[]
//             }
//         }
//     }
//     export enum Type {
//         Date,
//         BigInt,
//         Boolean,
//         Number,
//         String
//     }
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmx1ZXByaW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3N5c3RlbXMvQmx1ZXByaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUEwRDtBQUUxRCxNQUFhLFNBQWlELFNBQVEsa0JBQVM7Q0FFOUU7QUFGRCw4QkFFQztBQU9ELHNEQUFzRDtBQUV0RCxpRUFBaUU7QUFDakUsd0NBQXdDO0FBRXhDLDJHQUEyRztBQUMzRyxtQkFBbUI7QUFDbkIsa0VBQWtFO0FBQ2xFLGlFQUFpRTtBQUNqRSxpQkFBaUI7QUFDakIsWUFBWTtBQUNaLFFBQVE7QUFFUiwwR0FBMEc7QUFDMUcsZ0NBQWdDO0FBQ2hDLDBCQUEwQjtBQUMxQixzQkFBc0I7QUFDdEIsYUFBYTtBQUNiLFFBQVE7QUFDUixJQUFJO0FBRUosK0JBQStCO0FBRS9CLHVDQUF1QztBQUN2Qyx3QkFBd0I7QUFDeEIsdUJBQXVCO0FBQ3ZCLFFBQVE7QUFFUixrREFBa0Q7QUFFbEQsZ0NBQWdDO0FBQ2hDLCtCQUErQjtBQUUvQixtREFBbUQ7QUFDbkQsMERBQTBEO0FBQzFELHlFQUF5RTtBQUV6RSxpQ0FBaUM7QUFDakMsK0JBQStCO0FBQy9CLDZCQUE2QjtBQUM3QixxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCLDBEQUEwRDtBQUMxRCxpQ0FBaUM7QUFDakMsa0NBQWtDO0FBQ2xDLGdDQUFnQztBQUNoQyxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCLFlBQVk7QUFFWixnREFBZ0Q7QUFDaEQsdUJBQXVCO0FBQ3ZCLGtEQUFrRDtBQUNsRCx5RUFBeUU7QUFDekUsNkJBQTZCO0FBQzdCLHFCQUFxQjtBQUNyQixnQkFBZ0I7QUFDaEIsWUFBWTtBQUVaLHNDQUFzQztBQUN0Qyx1QkFBdUI7QUFDdkIsMEJBQTBCO0FBQzFCLHlDQUF5QztBQUN6QywwQ0FBMEM7QUFDMUMsb0JBQW9CO0FBRXBCLDhCQUE4QjtBQUM5QixrREFBa0Q7QUFDbEQsMENBQTBDO0FBQzFDLGdEQUFnRDtBQUNoRCxvQkFBb0I7QUFDcEIsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixRQUFRO0FBRVIsMEJBQTBCO0FBQzFCLGlCQUFpQjtBQUNqQixtQkFBbUI7QUFDbkIsb0JBQW9CO0FBQ3BCLG1CQUFtQjtBQUNuQixtQkFBbUI7QUFFbkIsNERBQTREO0FBQzVELHNCQUFzQjtBQUN0QixrQ0FBa0M7QUFDbEMsNEJBQTRCO0FBQzVCLFlBQVk7QUFDWixxQkFBcUI7QUFDckIsMENBQTBDO0FBQzFDLDJDQUEyQztBQUMzQyxnQ0FBZ0M7QUFDaEMscUNBQXFDO0FBQ3JDLCtEQUErRDtBQUMvRCxnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaLFFBQVE7QUFFUix5QkFBeUI7QUFDekIsZ0JBQWdCO0FBQ2hCLGtCQUFrQjtBQUNsQixtQkFBbUI7QUFDbkIsa0JBQWtCO0FBQ2xCLGlCQUFpQjtBQUNqQixRQUFRO0FBQ1IsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudCwgY3JlYXRlRWxlbWVudCB9IGZyb20gJ2NvcnRleCdcclxuXHJcbmV4cG9ydCBjbGFzcyBCbHVlcHJpbnQ8UGF0dGVybiBleHRlbmRzIENvbXBvbmVudCA9IENvbXBvbmVudD4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxufVxyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBCbHVlcHJpbnQge1xyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUGFyYW1ldGVycyB7fVxyXG59XHJcblxyXG4vLyBleHBvcnQgY2xhc3MgQmx1ZXByaW50PFBhdHRlcm4gZXh0ZW5kcyBDb21wb25lbnQ+IHtcclxuXHJcbi8vICAgICBwcml2YXRlIHBhcmFtZXRlcnM6IEJsdWVwcmludC5QYXJhbWV0ZXJzPFBhcnRpYWw8UGF0dGVybj4+XHJcbi8vICAgICBwcml2YXRlIHBhdHRlcm46IG5ldygpID0+IFBhdHRlcm5cclxuXHJcbi8vICAgICBwdWJsaWMgUGF0dGVybih7IGNoaWxkcmVuLCAuLi5wcm9wZXJ0aWVzIH06IENvbXBvbmVudC5Qcm9wc1dpdGhDaGlsZHJlbjxQYXR0ZXJuPik6IEVsZW1lbnQuQ2hpbGRbXSB7XHJcbi8vICAgICAgICAgcmV0dXJuIFtcclxuLy8gICAgICAgICAgICAgY3JlYXRlRWxlbWVudChCbHVlcHJpbnQuQ29udHJvbGxlciwgdW5kZWZpbmVkLCAuLi5bXHJcbi8vICAgICAgICAgICAgICAgICBjcmVhdGVFbGVtZW50KHRoaXMucGF0dGVybiwgcHJvcGVydGllcyBhcyBhbnkpXHJcbi8vICAgICAgICAgICAgIF0pXHJcbi8vICAgICAgICAgXVxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihwYXR0ZXJuOiBuZXcoKSA9PiBQYXR0ZXJuLCBwYXJhbWV0ZXJzOiBCbHVlcHJpbnQuUGFyYW1ldGVyczxQYXJ0aWFsPFBhdHRlcm4+Pikge1xyXG4vLyAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywge1xyXG4vLyAgICAgICAgICAgICBwYXJhbWV0ZXJzLFxyXG4vLyAgICAgICAgICAgICBwYXR0ZXJuXHJcbi8vICAgICAgICAgfSlcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IG5hbWVzcGFjZSBCbHVlcHJpbnQge1xyXG5cclxuLy8gICAgIGV4cG9ydCBpbnRlcmZhY2UgQ2hvaWNlPFZhbHVlPiB7XHJcbi8vICAgICAgICAgbGFiZWw6IHN0cmluZ1xyXG4vLyAgICAgICAgIHZhbHVlOiBWYWx1ZVxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIGV4cG9ydCBjbGFzcyBDb250cm9sbGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbi8vICAgICAgICAgcHVibGljIGhlaWdodDogbnVtYmVyXHJcbi8vICAgICAgICAgcHVibGljIHdpZHRoOiBudW1iZXJcclxuXHJcbi8vICAgICAgICAgcHJvdGVjdGVkIGhhbmRsZUNvbXBvbmVudFJlYWR5KCk6IHZvaWQge1xyXG4vLyAgICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICBjb25zdCB7IGhlaWdodCwgd2lkdGggfSA9IHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuXHJcbi8vICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSh7IFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGhlaWdodCwgXHJcbi8vICAgICAgICAgICAgICAgICAgICAgd2lkdGggXHJcbi8vICAgICAgICAgICAgICAgICB9KVxyXG4vLyAgICAgICAgICAgICB9KVxyXG4vLyAgICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSh7IFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMCwgXHJcbi8vICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDAgXHJcbi8vICAgICAgICAgICAgICAgICB9KVxyXG4vLyAgICAgICAgICAgICB9KVxyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgcHJvdGVjdGVkIHJlbmRlcigpOiBFbGVtZW50LkNoaWxkW10ge1xyXG4vLyAgICAgICAgICAgICByZXR1cm4gW1xyXG4vLyAgICAgICAgICAgICAgICAgY3JlYXRlRWxlbWVudChIVE1MU2xvdEVsZW1lbnQpLFxyXG4vLyAgICAgICAgICAgICAgICAgY3JlYXRlRWxlbWVudChIVE1MRGl2RWxlbWVudCwgeyBpZDogJ2NvbnRyb2xzJyB9LCAuLi5bXHJcbi8vICAgICAgICAgICAgICAgICAgICAgLy8gLi4uXHJcbi8vICAgICAgICAgICAgICAgICBdKVxyXG4vLyAgICAgICAgICAgICBdXHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICBwcm90ZWN0ZWQgdGhlbWUoKTogc3RyaW5nIHtcclxuLy8gICAgICAgICAgICAgcmV0dXJuIGBcclxuLy8gICAgICAgICAgICAgICAgIDpob3N0IHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBjb250ZW50cztcclxuLy8gICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgI2NvbnRyb2xzIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICR7IHRoaXMuaGVpZ2h0IH1weDtcclxuLy8gICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICR7IHRoaXMud2lkdGggfXB4O1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICBgXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIGV4cG9ydCB0eXBlIERhdHVtID1cclxuLy8gICAgICAgICB8IERhdGVcclxuLy8gICAgICAgICB8IGJpZ2ludFxyXG4vLyAgICAgICAgIHwgYm9vbGVhblxyXG4vLyAgICAgICAgIHwgbnVtYmVyXHJcbi8vICAgICAgICAgfCBzdHJpbmdcclxuXHJcbi8vICAgICBleHBvcnQgaW50ZXJmYWNlIFBhcmFtZXRlcnM8T3B0aW9ucyBleHRlbmRzIG9iamVjdD4ge1xyXG4vLyAgICAgICAgIG1ldGFkYXRhOiB7XHJcbi8vICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBzdHJpbmdcclxuLy8gICAgICAgICAgICAgbGFiZWw6IHN0cmluZ1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBvcHRpb25zOiB7XHJcbi8vICAgICAgICAgICAgIFsga2V5IGluIGtleW9mIE9wdGlvbnMgXToge1xyXG4vLyAgICAgICAgICAgICAgICAgZGVmYXVsdD86IE9wdGlvbnNbIGtleSBdXHJcbi8vICAgICAgICAgICAgICAgICBsYWJlbDogc3RyaW5nXHJcbi8vICAgICAgICAgICAgICAgICBtdWx0aXBsZT86IGJvb2xlYW5cclxuLy8gICAgICAgICAgICAgICAgIG9wdGlvbnM/OiBCbHVlcHJpbnQuQ2hvaWNlPE9wdGlvbnNbIGtleSBdPltdXHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgZXhwb3J0IGVudW0gVHlwZSB7XHJcbi8vICAgICAgICAgRGF0ZSxcclxuLy8gICAgICAgICBCaWdJbnQsXHJcbi8vICAgICAgICAgQm9vbGVhbixcclxuLy8gICAgICAgICBOdW1iZXIsXHJcbi8vICAgICAgICAgU3RyaW5nXHJcbi8vICAgICB9XHJcbi8vIH0iXX0=