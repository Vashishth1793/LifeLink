const API_URL = "http://localhost:5000/api/blood-requests";

const bloodRequestsContainer = document.getElementById(
    "bloodRequestsContainer"
);

async function fetchBloodRequests() {

    try {

        const response = await fetch(API_URL);

        const data = await response.json();

        const bloodRequests = data.requests;

        bloodRequestsContainer.innerHTML = "";

        // Check if there are no blood requests
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

        // Display all blood requests
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

    }

}

fetchBloodRequests();