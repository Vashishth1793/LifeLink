// =====================================
// Helper Functions
// =====================================

// Show an error message
function showError(errorElement, message) {
    errorElement.textContent = message;
}

// Clear an existing error message
function clearError(errorElement) {
    errorElement.textContent = "";
}


// =====================================
// Get the blood request form
// =====================================

const form = document.getElementById("bloodRequestForm");


// =====================================
// Listen for form submission
// =====================================

form.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();


    // =====================================
    // Patient Name
    // =====================================

    const patientName =
        document.getElementById("patientName").value.trim();

    const patientNameError =
        document.getElementById("patientNameError");

    clearError(patientNameError);

    if (patientName === "") {
        showError(patientNameError, "Patient name is required.");
        return;
    }


    // =====================================
    // Blood Group
    // =====================================

    const bloodGroup =
        document.getElementById("bloodGroup").value;


    // =====================================
    // Units Required
    // =====================================

    const units =
        document.getElementById("units").value;


    // =====================================
    // Hospital Name
    // =====================================

    const hospitalName =
        document.getElementById("hospitalName").value.trim();


    // =====================================
    // City
    // =====================================

    const city =
        document.getElementById("city").value.trim();


    // =====================================
    // Contact Number
    // =====================================

    const contactNumber =
        document.getElementById("contactNumber").value.trim();

    const mobileRegex = /^[6-9]\d{9}$/;

    if (!mobileRegex.test(contactNumber)) {
        alert("Please enter a valid Indian mobile number.");
        return;
    }


    // =====================================
    // Urgency
    // =====================================

    const urgency =
        document.getElementById("urgency").value;


    // =====================================
    // Required Date
    // =====================================

    const requiredDate =
        document.getElementById("requiredDate").value;


    // =====================================
    // Additional Information
    // =====================================

    const message =
        document.getElementById("message").value.trim();


    // =====================================
    // Create Blood Request Object
    // =====================================

    const bloodRequest = {

        patientName,

        bloodGroup,

        units: Number(units),

        hospitalName,

        city,

        contactNumber,

        urgency,

        requiredDate,

        message

    };


    // =====================================
    // Display Data
    // =====================================

    console.log("Blood Request Data:");
    console.log(bloodRequest);

});