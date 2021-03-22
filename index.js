onInit();
var users = ["", "Employee", "Employer", "Contractor"];
var employeeDetails = ["Employee name", "Employee id"];
var employerDetails = ["Employer name", "Employer id"];
var contractorDetails = ["Contractor name", "Contractor id"];
function onInit() {
    var options = "";
    var users = ["", "Employee", "Employer", "Contractor"];
    for (var index = 0; index < users.length; index++) {
        options += "<option>" + users[index] + "</option>";
    }
    document.getElementById("users").innerHTML = options;
}

function onUserSelection(value) {
    console.log(value);
    document.getElementById("selectedUser").innerHTML = ("The selected user is : " + value);


    if (value === 'Employee') {
        addInputDetails(employeeDetails);
    } else if (value === 'Employer') {
        addInputDetails(employerDetails);
    } else if (value === 'Contractor') {
        addInputDetails(contractorDetails);
    } else {
        document.getElementById("userForm").innerHTML = '';
    }
}

function addInputDetails(user) {
    var inputs = "";
    for (var index = 0; index < user.length; index++) {
        inputs += "<label>" + user[index] + "</label>" + "<br>"
            + "<input id=\"" + user[index] + "\" type=\"text\"/> <br> <br>";

    }
    document.getElementById("userForm").innerHTML = inputs;
}

function formSubmit() {
    var userType = document.getElementById("users").value;
    var userDetails = "";
    if (userType === users[1]) {
        userDetails += "<label> ------Employee Detalis----- <br></label>";
        for (var index = 0; index < employeeDetails.length; index++) {
            userDetails += "<label>" + employeeDetails[index] + " is : "
                + document.getElementById(employeeDetails[index]).value + " <br></label>"
        }
    } else if (userType === users[2]) {
        userDetails += "<label> ------Employer Detalis----- <br></label>";
        for (var index = 0; index < employerDetails.length; index++) {
            userDetails += "<label>" + employerDetails[index] + " is : "
                + document.getElementById(employerDetails[index]).value + " <br></label>"
        }
    }
    else if (userType === users[3]) {
        userDetails += "<label> ------Contractor Detalis----- <br></label>";
        for (var index = 0; index < contractorDetails.length; index++) {
            userDetails += "<label>" + contractorDetails[index] + " is : "
                + document.getElementById(contractorDetails[index]).value + " <br></label>"
        }
    }
    document.getElementById("userDetails").innerHTML  = userDetails;
}
