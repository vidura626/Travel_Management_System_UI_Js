$(document).ready(function () {
    toggle();
})

export function toggle(event) {
    $("#toggle").click(function () {
        document.documentElement.classList.toggle("dark");
    });
}