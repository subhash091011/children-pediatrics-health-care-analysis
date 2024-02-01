import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const HealthInsightsForm = () => {
  const [age, setAge] = useState('');
  const [bmi, setBMI] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [sex, setSex] = useState('');
  const [management, setManagement] = useState('');
  const [severity, setSeverity] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input
    if (!age || !bmi  || !height || !weight || !sex || !management || !severity) {
      setError('Please fill in all fields.');
      return;
    }

    // Encode 'Sex' to numeric value
    const sexValue = sex === 'Male' ? 0 : 1;

    // Reset error and set loading state
    setError(null);
    setLoading(true);

    // Send data to the Express API for prediction
    try {
      const response = await axios.post('http://localhost:3001/predict', {
        Age: parseFloat(age),
        BMI: parseFloat(bmi),
        Height: parseFloat(height),
        Weight: parseFloat(weight),
        Sex: sexValue,
        Management: management,
        Severity: severity,
      });

      // Assuming the response has a 'probability' field
      const probability = response.data.probability;
      const riskLevel = response.data.riskLevel;
      const predictedDiseases = response.data.predictedDiseases || [];

      // Display the result or use it as needed
      setResult({
        probability: probability,
        riskLevel: riskLevel,
        diseases: predictedDiseases,
      });
    } catch (error) {
      console.error('Error submitting data:', error.message);
      setError('Error predicting. Please try again.');
    } finally {
      // Reset loading state
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Health Insights</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formAge">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBMI">
          <Form.Label>BMI</Form.Label>
          <Form.Control
            type="number"
            value={bmi}
            onChange={(e) => setBMI(e.target.value)}
          />
        </Form.Group>


        <Form.Group controlId="formHeight">
          <Form.Label>Height</Form.Label>
          <Form.Control
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formWeight">
          <Form.Label>Weight</Form.Label>
          <Form.Control
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formSex">
          <Form.Label>Sex</Form.Label>
          <Form.Control as="select" value={sex} onChange={(e) => setSex(e.target.value)}>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formManagement">
          <Form.Label>Management</Form.Label>
          <Form.Control
            type="text"
            value={management}
            onChange={(e) => setManagement(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formSeverity">
          <Form.Label>Severity</Form.Label>
          <Form.Control
            type="text"
            value={severity}
            onChange={(e) => setSeverity(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={loading}>
          {loading ? 'Getting Health Insights...' : 'Get Health Insights'}
        </Button>
      </Form>

      {error && <p className="error-message">{error}</p>}

      {result !== null && (
        <div className="result-container">
          <h3>Result</h3>
          <div className="percentage-container">
            <p className="percentage-text">Probability: {result.probability}%</p>
            <div className="percentage-bar" style={{ width: `${result.probability}%` }}></div>
          </div>
          <p className="risk-text">Risk Level: {result.riskLevel}</p>
          <ul className="diseases-list">
            {result.diseases.map((disease, index) => (
              <li key={index}>{disease}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HealthInsightsForm;