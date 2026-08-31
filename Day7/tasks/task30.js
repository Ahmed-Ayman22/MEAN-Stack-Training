const APP_CONFIG = {
  name: "SuperApp",
  version: "1.0.0",
  api: {
    baseUrl: "https://api.example.com",
    timeout: 5000
  },
  features: ["auth"]
};

APP_CONFIG.api.timeout = 10000;
APP_CONFIG.features.push("notifications");

try {
  APP_CONFIG = {};
} catch (err) {
  console.log("error: " + err.message);
}
