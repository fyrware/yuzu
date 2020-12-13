"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
const Cortex = __importStar(require("cortex"));
/**
 * Simplifies contract of cortex for use in framework
 */
class Component extends Cortex.Component {
}
exports.Component = Component;
(function (Component) {
    Component.createElement = Cortex.createElement;
})(Component = exports.Component || (exports.Component = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3N5c3RlbXMvQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBZ0M7QUFFaEM7O0dBRUc7QUFDSCxNQUFhLFNBQVUsU0FBUSxNQUFNLENBQUMsU0FBUztDQUU5QztBQUZELDhCQUVDO0FBRUQsV0FBaUIsU0FBUztJQU1ULHVCQUFhLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQTtBQUNyRCxDQUFDLEVBUGdCLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBT3pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgQ29ydGV4IGZyb20gJ2NvcnRleCdcclxuXHJcbi8qKlxyXG4gKiBTaW1wbGlmaWVzIGNvbnRyYWN0IG9mIGNvcnRleCBmb3IgdXNlIGluIGZyYW1ld29ya1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudCBleHRlbmRzIENvcnRleC5Db21wb25lbnQge1xyXG5cclxufVxyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBDb21wb25lbnQge1xyXG4gICAgZXhwb3J0IHR5cGUgRm48UHJvcHMgPSB1bmtub3duPiA9IENvcnRleC5Db21wb25lbnQuRm48UHJvcHM+XHJcbiAgICBleHBvcnQgdHlwZSBGblByb3BzPFByb3BzPiA9IENvcnRleC5Db21wb25lbnQuUHJvcHNXaXRoQ2hpbGRyZW48UHJvcHM+XHJcbiAgICBleHBvcnQgdHlwZSBTdHlsZVNoZWV0ID0gc3RyaW5nXHJcbiAgICBleHBvcnQgdHlwZSBUZW1wbGF0ZSA9IENvcnRleC5FbGVtZW50LkNoaWxkW11cclxuICAgIFxyXG4gICAgZXhwb3J0IGNvbnN0IGNyZWF0ZUVsZW1lbnQgPSBDb3J0ZXguY3JlYXRlRWxlbWVudFxyXG59Il19