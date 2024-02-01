const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');

const app = express();
const PORT = 3001;
app.use(cors());

// Middleware to parse JSON data
app.use(bodyParser.json());

// Endpoint for making predictions
app.post('/predict', (req, res) => {
  const input_data = req.body;

  // Python script path
  const scriptPath = 'predict.py';

  // Python path
  const pythonPath = 'C:\\Python311\\python.exe';

  // Spawn a new Python process
  const pythonProcess = spawn(pythonPath, [scriptPath, JSON.stringify(input_data)]);

  // Variables to capture script output
  let scriptOutput = '';
  let scriptError = '';

  // Listen for stdout data from the script
  pythonProcess.stdout.on('data', (data) => {
    scriptOutput += data.toString();
  });

  // Listen for stderr data from the script
  pythonProcess.stderr.on('data', (data) => {
    scriptError += data.toString();
  });

  // When the script exits
  pythonProcess.on('close', (code) => {
    if (code === 0) {
      // Check if there's any script output
      if (scriptOutput.trim() !== '') {
        try {
          // Directly send the script output as a response
          res.send(scriptOutput.trim());
        } catch (error) {
          console.error('Error processing script output:', error);
          res.status(500).send('Internal Server Error');
        }
      } else {
        console.error('Python script produced no output');
        res.status(500).send('Internal Server Error');
      }
    } else {
      console.error(`Python script exited with code ${code}`);
      console.error('Error from Python script:', scriptError.trim());
      res.status(500).send('Internal Server Error');
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
