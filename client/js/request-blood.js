// =========================================
// SELECT FORM ELEMENTS
// =========================================

const bloodRequestForm = document.getElementById("bloodRequestForm");

const patientName = document.getElementById("patientName");
const bloodGroup = document.getElementById("bloodGroup");
const units = document.getElementById("units");
const hospitalName = document.getElementById("hospitalName");
const city = document.getElementById("city");
const contactNumber = document.getElementById("contactNumber");
const urgency = document.getElementById("urgency");
const requiredDate = document.getElementById("requiredDate");
const message = document.getElementById("message");

const successMessage = document.getElementById("successMessage");



// =========================================
// SET MINIMUM DATE
// =========================================

const today = new Date().toISOString().split("T")[0];
requiredDate.min = today;

// =========================================
// INPUT STYLING
// =========================================

function markInvalid(input) {
    input.classList.add("input-error");
}

function markValid(input) {
    input.classList.remove("input-error");
}
// =====================================
// Helper Functions
// =====================================

// Show an error message
function showError(input, errorElement, message) {

    markInvalid(input);

    errorElement.textContent = message;
}

// Clear an existing error message
function clearError(input, errorElement) {

    markValid(input);

    errorElement.textContent = "";
}

// Validate required fields
function validateRequiredField(input, errorElement, message) {

    clearError(input, errorElement);

    if (input.value.trim() === "") {

        showError(input, errorElement, message);

        return false;
    }

    return true;
}
patientName.addEventListener("input", () => {

    if (patientName.value.trim() !== "") {
        clearError(
            patientName,
            document.getElementById("patientNameError")
        );
    }

});





// =====================================
// Listen for Form Submission
// =====================================
bloodRequestForm.addEventListener("submit", function (event) {
    // Prevent page refresh
    event.preventDefault();
    successMessage.textContent = "";


    // =====================================
    // Patient Name
    // =====================================
const patientNameError = document.getElementById("patientNameError");

if (
    !validateRequiredField(
        patientName,
        patientNameError,
        "Patient name is required."
    )
) {
    patientName.focus();
    return;
}


    // =====================================
    // Blood Group
    // =====================================

    const bloodGroupError = document.getElementById("bloodGroupError");

if (
    !validateRequiredField(
        bloodGroup,
        bloodGroupError,
        "Please select a blood group."
    )
) {
    bloodGroup.focus();
    return;
}

    // =====================================
    // Hospital Name
    // =====================================

 const hospitalNameError = document.getElementById("hospitalNameError");

  if (
    !validateRequiredField(
        hospitalName,
        hospitalNameError,
        "Hospital name is required."
    )
) {
    hospitalName.focus();
    return;
}


    // =====================================
    // City
    // =====================================
const cityError = document.getElementById("cityError");

if (
    !validateRequiredField(
        city,
        cityError,
        "City is required."
    )
) {
    city.focus();
    return;
}


    // =====================================
    // Contact Number
    // =====================================

    const contactNumberError = document.getElementById("contactNumberError");
if (
    !validateRequiredField(
        contactNumber,
        contactNumberError,
        "Contact number is required."
    )
) {
    contactNumber.focus();
    return;
}

    const mobileRegex = /^[6-9]\d{9}$/;

   if (!mobileRegex.test(contactNumber.value.trim())) {
     showError(
    contactNumber,
    contactNumberError,
    "Please enter a valid 10-digit Indian mobile number."
);
        return;
    }


  


    // =====================================
    // Create Blood Request Object
    // =====================================
const bloodRequest = {

    patientName: patientName.value.trim(),

    bloodGroup: bloodGroup.value,

    units: Number(units.value),

    hospitalName: hospitalName.value.trim(),

    city: city.value.trim(),

    contactNumber: contactNumber.value.trim(),

    urgency: urgency.value,

    requiredDate: requiredDate.value,

    message: message.value.trim()

};

// =====================================
// Display Data
// =====================================

console.log("Blood Request Data:");
console.log(bloodRequest);
 
fetch("http://localhost:5000/api/blood-requests", {
    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify(bloodRequest)

})
.then(function(response) {

    return response.json();

})
.then(function(data) {

    console.log("Server Response:");
    console.log(data);

});
// =====================================
// Show Success Message
// =====================================

successMessage.textContent = "Blood request submitted successfully!";

// =====================================
// Reset Form
// =====================================

bloodRequestForm.reset();

});
