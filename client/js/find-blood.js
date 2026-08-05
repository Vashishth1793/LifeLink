const API_URL = "http://localhost:5000/api/blood-requests";

async function fetchBloodRequests() {

    try {

        const response = await fetch(API_URL);

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.log("Error fetching blood requests:");
        console.log(error);

    }

}

fetchBloodRequests();