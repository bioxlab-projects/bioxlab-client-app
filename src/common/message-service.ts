declare var bootbox: any;
"use strict";
export enum MessageType {
    success = "green",
    warning = "#fcf8e3",
    info = "#d9edf7",
    error = "red",
};
export default class MessageService {
    public id;
    public bootBox;
    /* constructor(id: string) {
        this.id = id;
        this.bootBox = bootbox;
    } */
    public inlineMessage(id: string, msg: string, type: MessageType = MessageType.success) {
        if (!id) return;
        // var color = _defaults[type] || _defaults["d"];
        var control = document.getElementById(id);
        if (!control) return;
        control.innerHTML = "";
        control.style["color"] = type;
        control.innerHTML = msg;
    }
    public showMessage(id: string, msg: string, type: MessageType) {
        if (!id) return;
        // var color = _defaults[type] || _defaults["d"];
        var control = document.getElementById(id);
        if (!control) return;
        control.innerHTML = "";
        control.style["color"] = type;
        control.innerHTML = msg;
    }
    public messageWithReplace(id: string, msg: string, type: MessageType) {
        if (!id) return;
        // var color = _defaults[type] || _defaults["d"];
        var control = document.getElementById(id);
        if (!control) return;
        control.innerHTML = "";
        control.style["color"] = type;
        control.innerHTML = msg;
    }
    public alertMessage(msg) {
        alert(msg);
    }
    public bootBoxAlert(msg, callback) {
        this.bootBox.alert({
            message: msg,
            callback(c) {
                if (callback === "function") callback(c);
            }
        });
    }
    public bootBoxConfirm(title, msg, callback) {
        this.bootBox.confirm({
            title: title,
            message: msg,
            buttons: {
                cancel: {
                    label: '<i class="fa fa-times"></i> Cancel'
                },
                confirm: {
                    label: '<i class="fa fa-check"></i> Confirm'
                }
            },
            callback(result) {
                callback(result);
            }
        });
    }
    public bootBoxLoading(title) {
        var dialog = this.bootBox.dialog({
            title: title,
            message: '<p><i class="fa fa-spin fa-spinner"></i> Loading...</p>'
        });
        return dialog;
    }
};


