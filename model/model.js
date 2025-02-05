export function loadPage(pageID) {
    let url = "pages/home.html"; // Default to home

    if (pageID && pageID === "home") {
        url = "pages/home.html";
    }

    $.ajax({
        url: url,
        type: "GET",
        success: function (data) {
            $("#app").html(data);
        },
        error: function (xhr, status, error) {
            console.error("Error loading page:", error);
        },
    });
}
