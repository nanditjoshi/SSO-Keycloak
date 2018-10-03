let keycloakConfig = {
    "realm": "myrealm",
    "auth-server-url": "http://127.0.0.1:8090/auth",
    "ssl-required": "external",
    "resource": "web-app2",
    "credentials": {
      "secret": "585c3f65-1307-45da-9877-60193ee86e5e"
    },
    "confidential-port": 0,
    "clientId": "web-app2"
};
window.keycloak = new Keycloak(keycloakConfig);

$(function() {
    // console.log(keycloakConfig);
    window.keycloak.init({
        flow: 'implicit',
        checkLoginIframe: false,
        onLoad: 'check-sso'
    }).success(function(authenticated) {
        console.log(authenticated ? 'authenticated' : 'not authenticated');
    }).error(function() {
        console.log('failed to initialize');
    });
});
