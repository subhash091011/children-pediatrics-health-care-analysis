// BMIChildrenCalculator.js

import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

const BMIChildrenCalculator = () => {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("male"); // Default to male
  const [bmiResult, setBmiResult] = useState(null);
  const [classification, setClassification] = useState(null);
  const [error, setError] = useState(null);

  const calculateBMI = () => {
    // Validate inputs
    if (!age || !weight || !height) {
      setError("Please fill in all fields.");
      return;
    }

    // BMI calculation for children
    const bmi = (weight / (height * height)) * 703; // Assuming height is in inches

    // BMI classification for children
    let bmiClassification;
    if (age < 2 || age > 19) {
      bmiClassification = "BMI calculation is applicable for ages 2 to 19 years.";
    } else {
      if (gender === "male") {
        bmiClassification = classifyBMIMale(age, bmi);
      } else {
        bmiClassification = classifyBMIFemale(age, bmi);
      }
    }

    setBmiResult(bmi.toFixed(2));
    setClassification(bmiClassification);
    setError(null);
  };

  const classifyBMIMale = (age, bmi) => {
    // BMI classification for males
    if (age >= 2 && age <= 5) {
      return classifyBMI(bmi, 14, 18);
    } else if (age >= 6 && age <= 12) {
      return classifyBMI(bmi, 13, 20);
    } else if (age >= 13 && age <= 19) {
      return classifyBMI(bmi, 13, 21);
    }
  };

  const classifyBMIFemale = (age, bmi) => {
    // BMI classification for females
    if (age >= 2 && age <= 5) {
      return classifyBMI(bmi, 14, 18);
    } else if (age >= 6 && age <= 12) {
      return classifyBMI(bmi, 14, 20);
    } else if (age >= 13 && age <= 19) {
      return classifyBMI(bmi, 14, 22);
    }
  };

  const classifyBMI = (bmi, lowerLimit, upperLimit) => {
    // Classify BMI based on lower and upper limits
    if (bmi < lowerLimit) {
      return "Underweight";
    } else if (bmi >= lowerLimit && bmi <= upperLimit) {
      return "Normal weight";
    } else {
      return "Overweight";
    }
  };

  return (
    <div>
      <h2>Children's BMI Calculator</h2>
      <Form>
        <Form.Group controlId="formAge">
          <Form.Label>Age (years)</Form.Label>
          <Form.Control
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formWeight">
          <Form.Label>Weight (lbs)</Form.Label>
          <Form.Control
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formHeight">
          <Form.Label>Height (inches)</Form.Label>
          <Form.Control
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formGender">
          <Form.Label>Gender</Form.Label>
          <Form.Control as="select" value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" onClick={calculateBMI}>
          Calculate BMI
        </Button>
      </Form>

      {bmiResult !== null && classification !== null && (
        <div>
          <h3>Result:</h3>
          <p>BMI: {bmiResult}</p>
          <p>Classification: {classification}</p>
        </div>
      )}

      {error && <Alert variant="danger">{error}</Alert>}
    </div>
  );
};

export default BMIChildrenCalculator;
