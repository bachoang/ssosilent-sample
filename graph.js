// Helper function to call MS Graph API endpoint 
// using authorization bearer token scheme

function callWebAPI(endpoint, accessToken) {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers
    };

    console.log('request made to API at: ' + new Date().toString());

    fetch(endpoint, options)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
}

async function seeProfile() {
    const currentAcc = myMSALObj.getAccountByHomeId(accountId);
    if (currentAcc) {
        const response = await getTokenPopup(loginRequest, currentAcc).catch(error => {
            console.log(error);
        });
        callWebAPI(apiConfig.myAPIEndpoint, response.accessToken);
        profileButton.style.display = 'none';
    }
}

