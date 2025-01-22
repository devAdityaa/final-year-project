# models.py

import joblib
import os

# Get the base directory of the project (assuming 'protein-predictor-server' is the root)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Directory where the models are saved
MODEL_DIR = os.path.join(BASE_DIR, 'models')

# Load each model from the .pkl files
models = {
    'RandomForestClassifier': joblib.load(os.path.join(MODEL_DIR, 'RandomForestClassifier.pkl')),
    'GradientBoostingClassifier': joblib.load(os.path.join(MODEL_DIR, 'GradientBoostingClassifier.pkl')),
    'XGBClassifier': joblib.load(os.path.join(MODEL_DIR, 'XGBClassifier.pkl')),
    'LogisticRegression': joblib.load(os.path.join(MODEL_DIR, 'LogisticRegression.pkl')),
    'DecisionTreeClassifier': joblib.load(os.path.join(MODEL_DIR, 'DecisionTreeClassifier.pkl')),
    'KNeighborsClassifier': joblib.load(os.path.join(MODEL_DIR, 'KNeighborsClassifier.pkl'))
}
