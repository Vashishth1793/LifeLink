const API_URL = "http://localhost:5000/api/blood-requests";

async function fetchBloodRequests() {

    try {

        const response = await fetch(API_URL);
const data = await response.json();

const bloodRequests = data.requests;

console.log(bloodRequests);

    } catch (error) {

        console.log("Error fetching blood requests:");
        console.log(error);

    }

}

fetchBloodRequests();