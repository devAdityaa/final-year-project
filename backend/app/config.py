# config.py

class Config:
    # Available models
    AVAILABLE_MODELS = [
        'RandomForestClassifier',
        'GradientBoostingClassifier',
        'XGBClassifier',
        'LogisticRegression',
        'DecisionTreeClassifier',
        'KNeighborsClassifier',
        "DL"
    ]
    DL_MODELS = [
        "DL"
        
    ]
    
    # Default model for prediction if no model is specified
    DEFAULT_MODEL = 'RandomForestClassifier'
