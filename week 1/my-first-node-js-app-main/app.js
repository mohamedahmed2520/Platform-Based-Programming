// src/index.js
const moment = require("moment");

/**
 * Calculate age (years, months, days) given a birthdate.
 * @param {string} birthDate - Format: YYYY-MM-DD
 * @returns {string} - Age in years, months, and days
 */
function calculateAge(birthDate) {
  const birth = moment(birthDate, "YYYY-MM-DD");
  const now = moment();

  const years = now.diff(birth, "years");
  birth.add(years, "years");

  const months = now.diff(birth, "months");
  birth.add(months, "months");

  const days = now.diff(birth, "days");

  return `${years} years, ${months} months, ${days} days`;
}

// Example run
if (require.main === module) {
  const myBirthday = "2004-05-15"; // <-- change this
  console.log("Your age is:", calculateAge(myBirthday));
}

module.exports = calculateAge;
