$(document).ready(function () {
    $("#login_button").click(function () {
        login();
    });

    $("#user_reg_form_btn").click(function () {

        $("#section-login").addClass("hidden");
        $("#sec-user-reg").removeClass("hidden");
    });

    $("#form_reg_user").submit(function (e) {
        e.preventDefault();

        var formData = new FormData(this);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Do it!'
        }).then((result) => {

            if (result.isConfirmed) {

                $.ajax({
                    url: 'http://localhost:8080/api/user/register',
                    type: 'POST',
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function (data) {
                        // Handle success response here
                        Swal.fire(
                            'Registered!',
                            'You have been registered with user Id : ' + formData.get('userId') + '.',
                            'success'
                        )
                    },
                    error: function (xhr, status, error) {
                        // Handle error response here
                        Swal.fire(
                            'Error!',
                            'Failed to register. ' + xhr.responseText,
                            'error'
                        )
                    }
                });
            }
        })

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
