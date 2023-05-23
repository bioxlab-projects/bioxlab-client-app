import axios from "axios";
import Index, { baseAddress } from "../common";
import { HomeFunctions } from "../lib/home-functions";

var index = new Index();
const homeFunctions = new HomeFunctions();
$(function () {
     index.printName("");
    var processTbl = $("#processed-modules-tbl tbody").html("");
    homeFunctions.getAllModules(processTbl);
    var table = $("#missing-module-table tbody").html("");
    homeFunctions.bindMissingModuleTable(table);
    var url = `${baseAddress}/ticker-controller/get-ticker`;
    axios.get(url).then((res) => {
        var data = res.data;
        var countRes = data.countRes;
        $("#workflows").html(countRes.Workflows);
        $("#rules").html(countRes.Rules);
        $("#loc").html(countRes.Lines);
        $("#entities").html(`${countRes.Entities}/${countRes.Attributes}`);
        $("#storeProcs").html(data.TotalStoreProcs);
    }).catch(e => console.log(e));
});