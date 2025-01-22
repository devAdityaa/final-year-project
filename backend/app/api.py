# api.py

from flask import Blueprint, jsonify, request
from .config import Config
from .models import models  # The models dictionary is imported from models.py
import pandas as pd

api = Blueprint('api', __name__)

# 1. Health check API
@api.route("/health", methods=["GET"])
def health_check():
    return jsonify({"status": "Backend is working fine!"})

# 2. Get all available models
@api.route("/models", methods=["GET"])
def get_available_models():
    return jsonify({"available_models": Config.AVAILABLE_MODELS})

@api.route("/predict/<model_name>", methods=["POST"])
def predict(model_name):
    # Check if the model_name is valid
    if model_name not in Config.AVAILABLE_MODELS:
        return jsonify({"error": "Model not available"}), 400

    # Fetch the model from the models dictionary
    model = models.get(model_name)
    
    if model is None:
        return jsonify({"error": "Model not found"}), 404
    
    # Retrieve data from request body
    data = request.get_json()

    # Validate that all 71 features are provided in the input
    required_features = [
        'AAC_A', 'AAC_C', 'AAC_D', 'AAC_E', 'AAC_F', 'AAC_G', 'AAC_H', 'AAC_I',
        'AAC_K', 'AAC_L', 'AAC_M', 'AAC_N', 'AAC_P', 'AAC_Q', 'AAC_R', 'AAC_S',
        'AAC_T', 'AAC_V', 'AAC_W', 'AAC_Y', 'PCP_PC', 'PCP_NC', 'PCP_NE', 'PCP_PO', 
        'PCP_NP', 'PCP_AL', 'PCP_CY', 'PCP_AR', 'PCP_AC', 'PCP_BS', 'PCP_NE_pH',
        'PCP_HB', 'PCP_HL', 'PCP_NT', 'PCP_HX', 'PCP_SC', 'PCP_SS_HE', 'PCP_SS_ST',
        'PCP_SS_CO', 'PCP_SA_BU', 'PCP_SA_EX', 'PCP_SA_IN', 'PCP_TN', 'PCP_SM',
        'PCP_LR', 'PCP_Z1', 'PCP_Z2', 'PCP_Z3', 'PCP_Z4', 'PCP_Z5', 'SEP', 'SER_A',
        'SER_C', 'SER_D', 'SER_E', 'SER_F', 'SER_G', 'SER_H', 'SER_I', 'SER_K', 'SER_L',
        'SER_M', 'SER_N', 'SER_P', 'SER_Q', 'SER_R', 'SER_S', 'SER_T', 'SER_V', 'SER_W', 
        'SER_Y'
    ]
    
    # Check if all required features are in the input data
    missing_features = [feature for feature in required_features if feature not in data]
    
    if missing_features:
        return jsonify({"error": f"Missing features: {', '.join(missing_features)}"}), 400
    
    # Extract the values of the features to pass to the model
    features = [data[feature] for feature in required_features]
    
    # Convert the features to a pandas DataFrame with feature names
    feature_df = pd.DataFrame([features], columns=required_features)
    
    # Making prediction with the selected model
    prediction = model.predict(feature_df).tolist()
    
    # Assuming the model returns a 0 or 1 value, you can map it to meaningful labels
    prediction_label = "Positive" if prediction[0] == 1 else "Negative"
    
    return jsonify({
        "prediction": prediction[0], 
        "prediction_label": prediction_label
    })