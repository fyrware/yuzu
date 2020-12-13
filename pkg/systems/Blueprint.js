"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blueprint = void 0;
const Component_1 = require("./Component");
class Blueprint {
    constructor(pattern, parameters) {
        Object.assign(this, {
            parameters,
            pattern
        });
    }
    Pattern({ children, ...properties }) {
        return [
            Component_1.Component.createElement(Blueprint.Controller, undefined, ...[
                Component_1.Component.createElement(this.pattern, properties)
            ])
        ];
    }
}
exports.Blueprint = Blueprint;
(function (Blueprint) {
    class Controller extends Component_1.Component {
        handleComponentReady() {
            this.addEventListener('mouseenter', () => {
                const { height, width } = this.getBoundingClientRect();
                this.update({
                    height,
                    width
                });
            });
            this.addEventListener('mouseleave', () => {
                this.update({
                    height: 0,
                    width: 0
                });
            });
        }
        render() {
            return [
                Component_1.Component.createElement(HTMLSlotElement),
                Component_1.Component.createElement(HTMLDivElement, { id: 'controls' }, ...[
                // ...
                ])
            ];
        }
        theme() {
            return `
                :host {
                    display: contents;
                    position: relative;
                }

                #controls {
                    height: ${this.height}px;
                    position: absolute;
                    width: ${this.width}px;
                }
            `;
        }
    }
    Blueprint.Controller = Controller;
    let Type;
    (function (Type) {
        Type[Type["Date"] = 0] = "Date";
        Type[Type["BigInt"] = 1] = "BigInt";
        Type[Type["Boolean"] = 2] = "Boolean";
        Type[Type["Number"] = 3] = "Number";
        Type[Type["String"] = 4] = "String";
    })(Type = Blueprint.Type || (Blueprint.Type = {}));
})(Blueprint = exports.Blueprint || (exports.Blueprint = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmx1ZXByaW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3N5c3RlbXMvQmx1ZXByaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUF1QztBQUV2QyxNQUFhLFNBQVM7SUFhbEIsWUFBbUIsT0FBeUIsRUFBRSxVQUFrRDtRQUM1RixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtZQUNoQixVQUFVO1lBQ1YsT0FBTztTQUNWLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFiTSxPQUFPLENBQUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxVQUFVLEVBQThCO1FBQ2xFLE9BQU87WUFDSCxxQkFBUyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxHQUFHO2dCQUN4RCxxQkFBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQWlCLENBQUM7YUFDM0QsQ0FBQztTQUNMLENBQUE7SUFDTCxDQUFDO0NBUUo7QUFuQkQsOEJBbUJDO0FBRUQsV0FBaUIsU0FBUztJQU90QixNQUFhLFVBQVcsU0FBUSxxQkFBUztRQUszQixvQkFBb0I7WUFDMUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUU7Z0JBQ3JDLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUE7Z0JBRXRELElBQUksQ0FBQyxNQUFNLENBQUM7b0JBQ1IsTUFBTTtvQkFDTixLQUFLO2lCQUNSLENBQUMsQ0FBQTtZQUNOLENBQUMsQ0FBQyxDQUFBO1lBQ0YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUM7b0JBQ1IsTUFBTSxFQUFFLENBQUM7b0JBQ1QsS0FBSyxFQUFFLENBQUM7aUJBQ1gsQ0FBQyxDQUFBO1lBQ04sQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDO1FBRU0sTUFBTTtZQUNULE9BQU87Z0JBQ0gscUJBQVMsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDO2dCQUN4QyxxQkFBUyxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsR0FBRztnQkFDM0QsTUFBTTtpQkFDVCxDQUFDO2FBQ0wsQ0FBQTtRQUNMLENBQUM7UUFFTSxLQUFLO1lBQ1IsT0FBTzs7Ozs7Ozs4QkFPWSxJQUFJLENBQUMsTUFBTzs7NkJBRWIsSUFBSSxDQUFDLEtBQU07O2FBRTVCLENBQUE7UUFDTCxDQUFDO0tBQ0o7SUE3Q1ksb0JBQVUsYUE2Q3RCLENBQUE7SUF3QkQsSUFBWSxJQU1YO0lBTkQsV0FBWSxJQUFJO1FBQ1osK0JBQUksQ0FBQTtRQUNKLG1DQUFNLENBQUE7UUFDTixxQ0FBTyxDQUFBO1FBQ1AsbUNBQU0sQ0FBQTtRQUNOLG1DQUFNLENBQUE7SUFDVixDQUFDLEVBTlcsSUFBSSxHQUFKLGNBQUksS0FBSixjQUFJLFFBTWY7QUFDTCxDQUFDLEVBbkZnQixTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQW1GekIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuL0NvbXBvbmVudCdcclxuXHJcbmV4cG9ydCBjbGFzcyBCbHVlcHJpbnQ8UGF0dGVybiBleHRlbmRzIENvbXBvbmVudD4ge1xyXG5cclxuICAgIHByaXZhdGUgcGFyYW1ldGVyczogQmx1ZXByaW50LlBhcmFtZXRlcnM8UGFydGlhbDxQYXR0ZXJuPj5cclxuICAgIHByaXZhdGUgcGF0dGVybjogbmV3KCkgPT4gUGF0dGVyblxyXG5cclxuICAgIHB1YmxpYyBQYXR0ZXJuKHsgY2hpbGRyZW4sIC4uLnByb3BlcnRpZXMgfTogQ29tcG9uZW50LkZuUHJvcHM8UGF0dGVybj4pOiBDb21wb25lbnQuVGVtcGxhdGUge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIENvbXBvbmVudC5jcmVhdGVFbGVtZW50KEJsdWVwcmludC5Db250cm9sbGVyLCB1bmRlZmluZWQsIC4uLltcclxuICAgICAgICAgICAgICAgIENvbXBvbmVudC5jcmVhdGVFbGVtZW50KHRoaXMucGF0dGVybiwgcHJvcGVydGllcyBhcyBhbnkpXHJcbiAgICAgICAgICAgIF0pXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihwYXR0ZXJuOiBuZXcoKSA9PiBQYXR0ZXJuLCBwYXJhbWV0ZXJzOiBCbHVlcHJpbnQuUGFyYW1ldGVyczxQYXJ0aWFsPFBhdHRlcm4+Pikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywge1xyXG4gICAgICAgICAgICBwYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBwYXR0ZXJuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBCbHVlcHJpbnQge1xyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ2hvaWNlPFZhbHVlPiB7XHJcbiAgICAgICAgbGFiZWw6IHN0cmluZ1xyXG4gICAgICAgIHZhbHVlOiBWYWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBDb250cm9sbGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICAgICAgcHVibGljIGhlaWdodDogbnVtYmVyXHJcbiAgICAgICAgcHVibGljIHdpZHRoOiBudW1iZXJcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGhhbmRsZUNvbXBvbmVudFJlYWR5KCk6IHZvaWQge1xyXG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGhlaWdodCwgd2lkdGggfSA9IHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSh7IFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCwgXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGggXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSh7IFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMCwgXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDAgXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHJlbmRlcigpOiBDb21wb25lbnQuVGVtcGxhdGUge1xyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50LmNyZWF0ZUVsZW1lbnQoSFRNTFNsb3RFbGVtZW50KSxcclxuICAgICAgICAgICAgICAgIENvbXBvbmVudC5jcmVhdGVFbGVtZW50KEhUTUxEaXZFbGVtZW50LCB7IGlkOiAnY29udHJvbHMnIH0sIC4uLltcclxuICAgICAgICAgICAgICAgICAgICAvLyAuLi5cclxuICAgICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB0aGVtZSgpOiBDb21wb25lbnQuU3R5bGVTaGVldCB7XHJcbiAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICA6aG9zdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogY29udGVudHM7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICNjb250cm9scyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAkeyB0aGlzLmhlaWdodCB9cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAkeyB0aGlzLndpZHRoIH1weDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgdHlwZSBEYXR1bSA9XHJcbiAgICAgICAgfCBEYXRlXHJcbiAgICAgICAgfCBiaWdpbnRcclxuICAgICAgICB8IGJvb2xlYW5cclxuICAgICAgICB8IG51bWJlclxyXG4gICAgICAgIHwgc3RyaW5nXHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBQYXJhbWV0ZXJzPE9wdGlvbnMgZXh0ZW5kcyBvYmplY3Q+IHtcclxuICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogc3RyaW5nXHJcbiAgICAgICAgICAgIGxhYmVsOiBzdHJpbmdcclxuICAgICAgICB9XHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICBbIGtleSBpbiBrZXlvZiBPcHRpb25zIF06IHtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ/OiBPcHRpb25zWyBrZXkgXVxyXG4gICAgICAgICAgICAgICAgbGFiZWw6IHN0cmluZ1xyXG4gICAgICAgICAgICAgICAgbXVsdGlwbGU/OiBib29sZWFuXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zPzogQmx1ZXByaW50LkNob2ljZTxPcHRpb25zWyBrZXkgXT5bXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBlbnVtIFR5cGUge1xyXG4gICAgICAgIERhdGUsXHJcbiAgICAgICAgQmlnSW50LFxyXG4gICAgICAgIEJvb2xlYW4sXHJcbiAgICAgICAgTnVtYmVyLFxyXG4gICAgICAgIFN0cmluZ1xyXG4gICAgfVxyXG59Il19