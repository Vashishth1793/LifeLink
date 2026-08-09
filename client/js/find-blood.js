const API_URL = "http://localhost:5000/api/blood-requests";

const bloodRequestsContainer = document.getElementById(
    "bloodRequestsContainer"
);


async function fetchBloodRequests() {

    try {

        // Show loading message
        bloodRequestsContainer.innerHTML = `
            <div class="loading-message">
                <p>Loading blood requests...</p>
            </div>
        `;


        // Send GET request to backend
        const response = await fetch(API_URL);


        // Check if server returned an error
        if (!response.ok) {

            throw new Error(
                `Server error: ${response.status}`
            );

        }


        // Convert response into JavaScript object
        const data = await response.json();


        // Get blood requests
        const bloodRequests = data.requests;


        // Clear loading message
        bloodRequestsContainer.innerHTML = "";


        // Check if no requests exist
        if (bloodRequests.length === 0) {

            bloodRequestsContainer.innerHTML = `
                <div class="no-requests">

                    <h2>No Active Blood Requests</h2>

                    <p>
                        There are currently no active blood requests.
                        Please check again later.
                    </p>

                </div>
            `;

            return;
        }


        // Display blood requests
        bloodRequests.forEach(function(request) {

            const requestCard = document.createElement("div");

            requestCard.classList.add("blood-request-card");


            requestCard.innerHTML = `
                <div class="blood-group-badge">
                    ${request.bloodGroup}
                </div>

                <p>
                    <strong>Patient:</strong>
                    ${request.patientName}
                </p>

                <p>
                    <strong>Hospital:</strong>
                    ${request.hospitalName}
                </p>

                <p>
                    <strong>City:</strong>
                    ${request.city}
                </p>

                <p>
                    <strong>Units Required:</strong>
                    ${request.units}
                </p>

                <div class="urgency-badge ${request.urgency}">
                    ${request.urgency}
                </div>
            `;


            bloodRequestsContainer.appendChild(requestCard);

        });


    } catch (error) {

        console.log("Error fetching blood requests:");
        console.log(error);


        // Show error to user
        bloodRequestsContainer.innerHTML = `
            <div class="api-error">

                <h2>Unable to Load Blood Requests</h2>

                <p>
                    We couldn't connect to the LifeLink server.
                    Please try again later.
                </p>

            </div>
        `;

    }

}


// Start fetching blood requests
fetchBloodRequests();