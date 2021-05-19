// Config object to be passed to Msal on creation
const msalConfig = {
    auth: {
        clientId: "<SPA app id>",
        authority: "https://login.microsoftonline.com/<tenant>.onmicrosoft.com",
        redirectUri: "http://localhost"
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {	
                    return;	
                }
                switch (level) {	
                    case msal.LogLevel.Error:	
                        console.error(message);	
                        return;	
                    case msal.LogLevel.Info:	
                        console.info(message);	
                        return;	
                    case msal.LogLevel.Verbose:	
                        console.debug(message);	
                        return;	
                    case msal.LogLevel.Warning:	
                        console.warn(message);	
                        return;	
                }
            }
        }
    }
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
const loginRequest = {
    scopes: ["854a30e1-7989-47d7-ab3b-393b1d9db5ee/.default"]
};

// Add here the endpoints for MS Graph API services you would like to use.
const graphConfig = {
    graphMeEndpoint: "https://bhtestapi123.azurewebsites.net/WeatherForecast",
    graphMailEndpoint: "https://graph.microsoft.com/v1.0/me/messages"
};

const apiConfig = {
    myAPIEndpoint: "https://bhtestapi123.azurewebsites.net/WeatherForecast"
};

// Add here scopes for access token to be used at MS Graph API endpoints.
const tokenRequest = {
    scopes: ["854a30e1-7989-47d7-ab3b-393b1d9db5ee/.default"],
    forceRefresh: false // Set this to "true" to skip a cached token and go to the server to get a new token
};

const silentRequest = {
    scopes: ["openid", "profile", "User.Read", "Mail.Read"]
};