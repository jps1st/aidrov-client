const PROXY_CONFIG = {
    "/api": {
        "target": "http://localhost:8099",
        "secure": false
    },
    "/auth": {
        "target": "http://localhost:8099",
        "secure": false
    }
};

module.exports = PROXY_CONFIG;
