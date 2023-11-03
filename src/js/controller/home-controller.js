$(document).ready(function () {
// Close notice bar
    $("#btnHomePageNotify").click(function () {
        $("#homePageNotify").addClass("hidden");
    });

// Toggle nav button menu
    $("#btnService").click(function () {
        console.log("Clicked");
        let $showServices = $("#showServices");
        // Toggle between the "entering" and "leaving" states
        if ($showServices.hasClass("transition")) {
            $showServices.removeClass("transition").addClass("entering");
        } else {
            $showServices.removeClass("entering").addClass("transition");
        }
    });

    $("#open_main_menu").click(function () {
        let hiddenNavMenu = $("#hidden_nav_menu");
        if (hiddenNavMenu.hasClass("hidden")) {
            hiddenNavMenu.removeClass("hidden");
        }
    })
    // $("body").change(function () {
    //     let $showServices = $("#showServices");
    //     if ($showServices.hasClass("transition")) {
    //         $showServices.removeClass("transition").addClass("entering");
    //     } else {
    //         $showServices.removeClass("entering").addClass("transition");
    //     }
    // })
})

var loadFile = function (event) {

    var input = event.target;
    var file = input.files[0];
    var type = file.type;

    var output = document.getElementById('preview_img');


    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
        URL.revokeObjectURL(output.src) // free memory
    }
};