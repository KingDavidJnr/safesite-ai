function calculateRisk(input) {
  // Set safe defaults
  const hoursWorked = Number(input.hoursWorked) || 0; // Defaults to 0 if invalid
  const weather = ["clear", "rain", "heat"].includes(input.weather)
    ? input.weather
    : "clear";
  const phase = ["foundation", "roofing", "finishing"].includes(input.phase)
    ? input.phase
    : "foundation";
  const materialsShortage =
    typeof input.materialsShortage === "boolean"
      ? input.materialsShortage
      : false;
  const teamExperience = ["low", "medium", "high"].includes(
    input.teamExperience
  )
    ? input.teamExperience
    : "medium";
  const equipmentCondition = ["good", "worn", "faulty"].includes(
    input.equipmentCondition
  )
    ? input.equipmentCondition
    : "good";
  const timeOfDay = ["day", "night"].includes(input.timeOfDay)
    ? input.timeOfDay
    : "day";

  // Calculate risk
  let risk = 0;

  if (hoursWorked > 10) risk += 2;
  if (weather !== "clear") risk += 1;
  if (phase === "roofing") risk += 2;
  if (materialsShortage) risk += 1;
  if (teamExperience === "low") risk += 1;

  if (equipmentCondition === "faulty") {
    risk += 2;
  } else if (equipmentCondition === "worn") {
    risk += 1;
  }

  if (timeOfDay === "night") risk += 1;

  // Return final risk level
  if (risk >= 7) {
    return "High Risk";
  } else if (risk >= 4) {
    return "Medium Risk";
  } else {
    return "Low Risk";
  }
}

module.exports = calculateRisk;
