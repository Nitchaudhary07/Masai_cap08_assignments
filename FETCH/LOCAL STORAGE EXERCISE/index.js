document.getElementById('userDataForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    localStorage.setItem('userData', JSON.stringify({ name, age }));
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
});

document.getElementById('retrieveDataBtn').addEventListener('click', function() {
    let userData = JSON.parse(localStorage.getItem('userData'));
    // if (userData) {
    let displayArea = document.getElementById('displayArea');
    //     displayArea.innerHTML = 
    //         <table>
    //             <tr>
    //                 <th>Name</th>
    //                 <th>Age</th>
    //             </tr>
    //             <tr>
    //                 <td>${userData.name}</td>
    //                 <td>${userData.age}</td>
    //             </tr>
    //         </table>
    //     ;
    // } else {
    //     alert("No data found in local storage.");
    // }
});
