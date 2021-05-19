# ssosilent-sample

This sample shows how to use msal.js V2 in an application hosted in an iframe to acquire the token silently using the Browser SSO session.  The scnario is this application is hosted in an iframe using msal.js v2.  The parent page already authenticates the user with AAD so when the iframe app loads they want to take advanatage of the underlying browser SSO session to get a token via MSAL.JS V2 without prompting the user to log in again.  The sample uses ssosilent to acquire an access token with a login_hint param.
