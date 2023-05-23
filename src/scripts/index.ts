import Index, { baseAddress } from "../common/index";
import { appLib } from "../lib";
import axios, { } from "axios";
console.log('Before document ready');
$(function () {
    var index = new Index("Snehal");
    // var n = index.printName("Snehal Pawar");
    // appLib.openWin("https://google.co.in", { target: "popup", width: "150px", height: "200px" });
    // $("#uname").html(n);
    $("#password-addon").on("click", () => {
        var username = $("#username").val();
        var pwd = $("#password").val();
        var url: string = `${baseAddress}/user-master-controller/user-login`;
        axios.post(url, { userName: username, password: pwd }).then((res) => {
            console.log(res.data);
        }).catch(e => console.log(e));
    });

});