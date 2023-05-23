import MessageService from "./message-service";
import { MessageType } from "./message-service";
export const baseAddress: string = "http://127.0.0.1:9000/api";
export default class Index extends MessageService {
    public name: string = null;
    constructor() {
        super();
    }
    printName(name: string) {
        this.inlineMessage("msg-div", "Test message", MessageType.error);
        return `Hello, ${name}`;
    };
    openWindow(url: string, features: { target?: string, height?: number, width?: number } = { target: "popup", height: 600, width: 1000 }) {
        var left = (screen.width - 1000) / 2;
        var top = (screen.height - 600) / 4;
        var winFeature = `height=${features.height},width=${features.width},toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0, top=${top}, left=${left}`;
        // var feature = winFeature !== null ? winFeature : 'height=' + screen.height + ',width=' + screen.width + ',toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,';
        window.open(url, features.target, winFeature);
    };
    openTab(url: string) {
        window.open(url);
    };
    getParameterByName(name: string) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp(`[\\?&]${name}=([^&#]*)`);
        var results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    };
    bindDatatable(eleId: string, data: Array<any>, columns: Array<{ title: string, data: string }>) {
        var table: any = $(`#${eleId}`).html("");
        table.DataTable({
            bJQueryUI: true,
            pagingType: "simple_numbers",
            stateSave: false,
            retrieve: false,
            destroy: true,
            rowId: '_id',
            data: data,
            columns: columns
        });
    };

}
const common = new Index();
export { common };

