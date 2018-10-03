let keycloakConfig = {
    "realm": "myrealm",
    "auth-server-url": "http://localhost:8090/auth",
    "ssl-required": "external",
    "resource": "web-app1",
    "credentials": {
        "secret": "726a9782-dda1-4154-90e3-fc369c4cc775"
    },
    "confidential-port": 0,
    "clientId": "web-app1"
};
window.keycloak = new Keycloak(keycloakConfig);

// $(function() {
    // console.log(keycloakConfig);
    window.keycloak.init({
        flow: 'implicit',
        checkLoginIframe: false,
        onLoad: 'check-sso'
    }).success(function(authenticated) {
        console.log(window.keycloak);
        console.log(window.location.href);
        console.log(authenticated ? 'authenticated!!!!' : 'not authenticated');
    }).error(function() {
        console.log('failed to initialize');
    });
// });
