import sys
import json
import joblib
import pandas as pd

# Load the saved pipeline (including preprocessor and model)
pipeline = joblib.load('random_forest_model.joblib')

def convert_to_str(value):
    if isinstance(value, (int, float)):
        return str(value)
    return value

def calculate_risk_level(probability):
    percentage = probability * 100
    if percentage > 80:
        return "High"
    elif percentage > 60:
        return "Medium"
    else:
        return "Low"

try:
    # Read input data from command line argument
    input_data = json.loads(sys.argv[1])

    # Convert numerical values to strings
    input_data_str = {key: convert_to_str(value) for key, value in input_data.items()}

    # Create a DataFrame with explicit columns
    input_df = pd.DataFrame([input_data_str])

    # Make predictions
    probabilities = pipeline.predict_proba(input_df)  # assuming your model supports predict_proba

    # Select the class with the highest probability
    predicted_class_index = probabilities.argmax()
    predicted_class = pipeline.classes_[predicted_class_index]
    predicted_disease = f"Disease {predicted_class}"

    # Get the highest probability
    highest_probability = probabilities.max()

    # Calculate risk level
    risk_level = calculate_risk_level(highest_probability)

    # Output the prediction as a JSON object
    output_json = {'probability': highest_probability * 100, 'riskLevel': risk_level, 'predictedDiseases': [predicted_disease]}
    print(json.dumps(output_json))  # Ensure it's a valid JSON string

except Exception as e:
    # Handle any exceptions, print an error message
    output_json = {'error': f"Error: {e}"}
    print(json.dumps(output_json))  # Output error as JSON
