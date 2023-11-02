$(document).ready(function () {
    findAllUsers();

    $("#toggle").click(function () {
        document.documentElement.classList.toggle("dark");
    });

    $("#form_reg_user").submit(function (e) {
        saveUser();
    });


})

/**
 * Save User
 */
function saveUser() {
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
                        'Deleted!',
                        'Failed to register. ' + xhr.responseText,
                        'error'
                    )
                }
            });
        }
    })
}

/**
 * Find All Users
 */
function findAllUsers() {
    $.ajax({
        url: 'http://localhost:8080/api/user/all',
        type: 'GET',
        success: function (data) {
            // Handle success response here
            console.log(data);
        },
        error: function (xhr, status, error) {
            // Handle error response here
            console.log(xhr.responseText);
        }
    });
}