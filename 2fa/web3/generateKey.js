const speakeasy = require("speakeasy");
const secret = speakeasy.generateSecret({ length: 20 });
console.log(secret.base32);
const otpAuthUrl = speakeasy.otpauthURL({
  secret: secret.ascii,
  label: "MyApp",
  issuer: "MyCompany",
});
const verified = speakeasy.totp.verify({
  secret: secret.base32,
  encoding: "base32",
});
