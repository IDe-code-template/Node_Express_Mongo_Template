/**
* @fileoverview JWT secrets for authService
*/
const secret = "winter is coming";
const signOptions = {
  issuer: "audience",
  subject: "JWT",
  audience: "audience-users",
  expiresIn: "12h",
  algorithm: "RS256"
};

var verifyOptions = {
  issuer: "audience",
  subject: "JWT",
  audience: "audience-users",
  expiresIn: "12h",
  algorithm: ["RS256"]
 };

module.exports = {
  secret: secret,
  signOptions: signOptions,
  verifyOptions: verifyOptions
}
