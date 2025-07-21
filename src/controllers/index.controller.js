const sampleCases = require("../data/sampleCases.data");

class SafetyController {
  simulateRisk = (req, res) => {
    const {
      hoursWorked,
      materialsShortage,
      teamExperience,
      equipmentCondition,
      timeOfDay,
      phase,
      weather,
    } = req.body;

    // Validation
    if (
      hoursWorked === undefined ||
      materialsShortage === undefined ||
      teamExperience === undefined ||
      equipmentCondition === undefined ||
      timeOfDay === undefined ||
      phase === undefined ||
      weather === undefined
    ) {
      return res.status(400).json({
        status: "error",
        message:
          "All fields are required: hoursWorked, materialsShortage, teamExperience, equipmentCondition, timeOfDay, phase, weather.",
      });
    }

    if (
      typeof hoursWorked !== "number" ||
      typeof materialsShortage !== "boolean" ||
      typeof teamExperience !== "string" ||
      typeof equipmentCondition !== "string" ||
      typeof timeOfDay !== "string" ||
      typeof phase !== "string" ||
      typeof weather !== "string"
    ) {
      return res.status(400).json({
        status: "error",
        message:
          "Invalid data types. hoursWorked should be number, materialsShortage boolean, and the rest strings.",
      });
    }

    if (hoursWorked < 0 || hoursWorked > 24) {
      return res.status(400).json({
        status: "error",
        message: "hoursWorked must be between 0 and 24.",
      });
    }

    // Call risk calculator
    const result = this.calculateRisk({
      hoursWorked,
      materialsShortage,
      teamExperience,
      equipmentCondition,
      timeOfDay,
      phase,
      weather,
    });

    return res.json({
      status: "success",
      message: "Risk simulation completed successfully.",
      inputSummary: {
        hoursWorked,
        materialsShortage,
        teamExperience,
        equipmentCondition,
        timeOfDay,
        phase,
        weather,
      },
      riskAssessment: result,
    });
  };

  calculateRisk = ({
    hoursWorked,
    materialsShortage,
    teamExperience,
    equipmentCondition,
    timeOfDay,
    phase,
    weather,
  }) => {
    let riskScore = 0;
    let reasons = [];

    // Hours worked
    if (hoursWorked > 10) {
      riskScore += 2;
      reasons.push(
        "Extended work hours increase fatigue and risk of mistakes."
      );
    } else if (hoursWorked >= 8) {
      riskScore += 1;
      reasons.push(
        "Moderate work hours could lead to fatigue without proper breaks."
      );
    }

    // Materials shortage
    if (materialsShortage) {
      riskScore += 2;
      reasons.push(
        "Material shortage may lead to unsafe improvisation or downtime."
      );
    }

    // Team experience
    if (teamExperience === "low") {
      riskScore += 2;
      reasons.push("Low team experience increases the chance of human error.");
    } else if (teamExperience === "medium") {
      riskScore += 1;
      reasons.push("Moderate experience team requires closer supervision.");
    }

    // Equipment condition
    if (equipmentCondition === "poor") {
      riskScore += 2;
      reasons.push("Poor equipment condition increases accident risk.");
    } else if (equipmentCondition === "fair") {
      riskScore += 1;
      reasons.push("Fair equipment condition requires frequent inspections.");
    }

    // Time of day
    if (timeOfDay === "night") {
      riskScore += 2;
      reasons.push(
        "Night shifts have higher risks due to reduced visibility and fatigue."
      );
    } else if (timeOfDay === "afternoon") {
      riskScore += 1;
      reasons.push(
        "Afternoon shifts may lead to heat stress depending on weather."
      );
    }

    // Construction phase
    if (["roofing", "scaffolding"].includes(phase.toLowerCase())) {
      riskScore += 2;
      reasons.push(`High-risk construction phase: ${phase}.`);
    } else if (["foundation", "excavation"].includes(phase.toLowerCase())) {
      riskScore += 1;
      reasons.push(`Moderate-risk phase: ${phase}.`);
    }

    // Weather
    if (["rain", "storm", "snow"].includes(weather.toLowerCase())) {
      riskScore += 2;
      reasons.push(
        "Bad weather increases slip, fall, and equipment hazard risks."
      );
    } else if (["hot", "humid"].includes(weather.toLowerCase())) {
      riskScore += 1;
      reasons.push("Hot weather increases dehydration and heatstroke risk.");
    }

    // Determine risk level
    let riskLevel = "Low Risk";
    if (riskScore >= 10) {
      riskLevel = "High Risk";
    } else if (riskScore >= 5) {
      riskLevel = "Medium Risk";
    }

    // Recommendation
    let recommendation = "Proceed with normal safety checks.";
    if (riskLevel === "High Risk") {
      recommendation =
        "Stop work immediately and implement safety interventions.";
    } else if (riskLevel === "Medium Risk") {
      recommendation = "Increase monitoring and review safety protocols.";
    }

    return {
      riskLevel,
      riskScore,
      reasons,
      recommendation,
      confidence: "Simulated Model - Approximate",
    };
  };

  getAllSampleCases = (req, res) => {
    res.json({
      status: "success",
      message: "Sample cases fetched successfully.",
      totalCases: sampleCases.length,
      data: sampleCases,
    });
  };
}

module.exports = new SafetyController();
