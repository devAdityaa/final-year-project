# Protein Predictor Server

This is the backend server for the Protein Predictor application. It is built using Flask and provides endpoints for processing protein data and making predictions.

---

## Prerequisites

Before running the server, ensure you have the following installed:

- Python (3.8 or later)
- pip (Python package manager)

---

## Installation and Setup

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/birehan/protein-predictor-server.git
   cd protein-predictor-server
   ```

2. **Set Up a Virtual Environment (Optional but Recommended)**  
   Create a virtual environment to isolate dependencies:  
   ```bash
   python3 -m venv venv
   source venv/bin/activate   # On Windows, use `venv\Scripts\activate`
   ```

3. **Install Dependencies**  
   Install the required Python packages:  
   ```bash
   pip install -r requirements.txt
   ```

---

## Running the Server

1. **Start the Flask Server**  
   Run the following command in the terminal:  
   ```bash
   flask run
   ```

   By default, the server will start on `http://127.0.0.1:5000/`.

2. **Access the API**  
   You can now make requests to the API endpoints, all of which are prefixed with `/api`.

---

## API Details

### 1. Health Check  
**Endpoint**: `/api/health`  
**Method**: `GET`  
**Description**: Simple health check to verify the backend is running.  
**Response**:  
```json
{
  "status": "Backend is working fine!"
}
```

---

### 2. Get Available Models  
**Endpoint**: `/api/models`  
**Method**: `GET`  
**Description**: Retrieves a list of available prediction models.  
**Response**:  
```json
{
  "available_models": ["model1", "model2", "model3"]
}
```

---

### 3. Make a Prediction  
**Endpoint**: `/api/predict/<model_name>`  
**Method**: `POST`  
**Description**: Use a specific model to make a prediction. Requires a JSON payload with all 71 features.  

**Request Body**:  
A JSON object containing all 71 required features:  
```json
{
  "AAC_A": 0.1,
  "AAC_C": 0.2,
  "AAC_D": 0.3,
  ...
  "SER_Y": 0.7
}
```

**Response**:  

- If the prediction is successful:  
  ```json
  {
    "prediction": 1,
    "prediction_label": "Positive"
  }
  ```

---

## Configuration

- **Environment Variables**:  
  Flask can be configured using environment variables. Create a `.env` file in the root directory and add the following:  
  ```env
  FLASK_APP=app.py
  FLASK_ENV=development  # Set to "production" for deployment
  ```

- **Default Port**:  
  If you need to change the port, use the `--port` flag:  
  ```bash
  flask run --port=8080
  ```

---

## Troubleshooting

- If Flask is not recognized as a command, install Flask globally:  
  ```bash
  pip install flask
  ```
- If you encounter issues with dependencies, double-check the Python version and ensure all required libraries are installed.

---

