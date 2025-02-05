import { loadPage } from "../model/model.js";

$(document).ready(function () {
    initURLListener();
});

function initURLListener() {
    $(window).on("hashchange", function () {
        const pageID = window.location.hash.substring(1) || "home";
        loadPage(pageID);
    });

    loadPage(window.location.hash.substring(1) || "home");
}
