function findAllUsers() {
    if(localStorage.getItem("Authorization") == null) {
        window.location.href = "login.html";
        return;
    }
    $.ajax({
        url: 'http://localhost:8080/api/user/all',
        headers: {
            "Authorization": "Bearer "+localStorage.getItem("Authorization")
        },
        type: 'GET',
        success: function (data) {
            // Handle success response here
            console.log(data);
            var tbody = $("#table_user_body");
            tbody.empty();
            const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            for (var i = 0; i < data.length; i++) {
                var user = data[i];
                let dob = new Date(user.dob);
                let created = '';
                if(user.createdDate!=null){
                    created = new Date(user.regDate);
                    created = `${months[created.getMonth()]} ${created.getDate()}, ${created.getFullYear()}`;
                }
                let modified = '';
                if(user.modifiedDate!=null){
                    modified = new Date(user.modifiedDate);
                    modified = `${months[modified.getMonth()]} ${modified.getDate()}, ${modified.getFullYear()}`;
                }
                console.log(modified);
                let dateOfBirth = `${months[dob.getMonth()]} ${dob.getDate()}, ${dob.getFullYear()}`;


                var row = `
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="w-4 p-4">
                <label>${user.userId}</label>
            </td>
            <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                <img class="w-10 h-10 rounded-full" src="data:image/jpeg;base64,${user.proPic}" alt="${user.name}">
                <div class="pl-3">
                    <div class="text-base font-semibold">${user.name}</div>
                    <div class="font-normal text-gray-500">${user.email}</div>
                    <!--create edit user-->
                    <span class="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">Edit user</span>
                </div>
            </th>
            <td class="px-6 py-4">
                <div class="pl-3">
                    <div class="text-base">${user.address}</div>
                    <div class="font-normal text-gray-500">${user.contact}</div>
                </div>
            </td>
            <td class="px-6 py-4">
                <div class="flex items-center">
                    <div class="ml-3">${created}</div>
                    <span class="ml-3 font-medium text-slate-600 dark:text-slate-500">Created</span>
                </div>
                <div class="flex items-center">
                    <div class="ml-3">${modified}</div>
                    <span class="ml-3 font-medium text-slate-600 dark:text-slate-500">Last Modified</span>
                </div>
            </td>
            <td class="px-6 py-4">
                <div class="pl-3">
                    <div class="text-base font-semibold">${user.niCorPassportDto.id}</div>
                    <div class="font-normal text-gray-500">NIC</div>
                    <!--create edit user-->
                    <span class="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">See more..</span>
                </div>
            </td>
            <td class="px-6 py-4">
                <div class="pl-3">
                    <div class="text-base">${dateOfBirth}</div>
                    <div class="font-normal text-gray-500">${user.gender}</div>
                </div>
            </td>
            <td class="px-6 py-4">
                <div class="pl-3 w-10">
                    <div>${user.remarks}</div>
                </div>
            </td>
        </tr>
                `;
                tbody.append(row);
            }
        },
        error: function (xhr, status, error) {
            // Handle error response here
            console.log(xhr.responseText);
        }
    });
}