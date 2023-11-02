$(document).ready(function () {
    $("#login_button").click(function () {
        login();
    });
})


function login() {
    var username = $("#form_login_username").val();
    var password = $("#form_login_password").val();
    let auth = 'Basic ' + btoa(username + ':' + password);

    $.ajax({
     url: "http://localhost:8080/user/login",
     method: "GET",
     headers: {
         "Authorization": auth
     },
     success: function (data, status, xhr) {
         // Handle success response here
         if(xhr.getResponseHeader("Authorization")!=null){
             localStorage.setItem("Authorization", xhr.getResponseHeader("Authorization"));
         }
         history.back();
     },
     error: function (xhr, status, error) {
         // Handle error response here
         Swal.fire(
             'Error!',
             'Failed to login. ' + xhr.responseText,
             'error'
         )
     }
    });
}