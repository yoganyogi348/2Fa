const speakeasy = require("speakeasy");

// Replace 'secret' with your secret key
const secretKey = "GY7FGOJIIYYW2UZTGU7WISKUJRITAZSR";

// Generate a time-based OTP
const token = speakeasy.totp({
  secret: secretKey,
  encoding: "base32",
});

// Prints the OTP
module.exports = { token };
// console.log(token);
