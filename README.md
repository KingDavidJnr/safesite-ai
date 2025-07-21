# SafeSite AI – Construction Safety Risk Simulation Demo

**A collaborative academic demo project by Oladipupo Solarin and David Oduse**

---

## **About the Project**

**SafeSite AI** is a **construction safety risk simulation tool** developed as part of the academic research work of **Oladipupo Solarin**, an MSc student in **Construction Management** at the University of East London.
This demo application is intended to support Oladipupo’s thesis project, focusing on leveraging technology for **predictive safety management** on construction sites.

The system was **engineered and implemented by David Oduse**, who led the backend development, system logic, and API design to bring the safety risk simulation to life.

---

## **Purpose of the Demo**

The primary purpose of this project is to **simulate construction site risks** based on various worksite conditions and parameters.
By feeding different operational inputs into the system, users can receive:

- A **risk score**
- A **risk level** (Low, Medium, High)
- **Explanations and recommendations** based on the scenario

This helps demonstrate how real-time data can be used to predict and mitigate site accidents or unsafe conditions in construction management.

---

## **How It Works**

The system evaluates site safety risks based on 7 key factors:

| Parameter            | Expected Type | Example Values                               |
| -------------------- | ------------- | -------------------------------------------- |
| `hoursWorked`        | Number        | 8, 12, etc.                                  |
| `materialsShortage`  | Boolean       | true / false                                 |
| `teamExperience`     | String        | "low", "medium", "high"                      |
| `equipmentCondition` | String        | "poor", "fair", "good"                       |
| `timeOfDay`          | String        | "morning", "afternoon", "night"              |
| `phase`              | String        | "foundation", "roofing", "scaffolding", etc. |
| `weather`            | String        | "clear", "rain", "storm", "hot", etc.        |

The backend processes this data and returns:

- A **computed risk level** (High, Medium, Low)
- An **explanation of contributing factors**
- Recommended **safety interventions**

---

## **Technology Stack**

The SafeSite AI demo is built with:

- **Node.js** – Server runtime
- **Express.js** – Web framework powering the REST API
- **JavaScript (ES6+)** – Core programming language
- **JSON-based Simulation** – No external ML model (rules-based simulation for demo purposes)

---

## **Endpoints Overview**

| Route                 | Method | Description                                    |
| --------------------- | ------ | ---------------------------------------------- |
| `/v1/sample/simulate` | POST   | Submit site conditions and get risk simulation |
| `/v1/sample/cases`    | GET    | Fetch sample data cases for testing            |

---

## 🤝 **Collaboration Credits**

- **Oladipupo Solarin** – MSc Construction Management, Academic Owner & Research Lead
- **David Oduse** – Software Engineer, Backend Developer & System Architect

---

## **Disclaimer**

This project is a **prototype demo** intended for academic research purposes only.
It does not replace professional safety assessments or certified construction safety management systems.

---

## **MIT License**

This project is shared for academic demonstration and research. Contact the project owners for any non-academic use cases.

---
