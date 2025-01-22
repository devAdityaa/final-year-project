# Protein Status Predictor for COVID-19

This is a **Protein Status Predictor for COVID-19** built with **Vite**, **React**, and **TypeScript**, utilizing modern UI libraries and tools such as **Radix UI**, **TailwindCSS**, and **React Router**.

---

## Features

- Responsive design with a professional and modern layout.
- Utilizes **Radix UI components** for accessible and customizable UI elements.
- Styled using **TailwindCSS** for rapid styling and responsive design.
- Component-based architecture for reusability and maintainability.

---

## Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A code editor like [VS Code](https://code.visualstudio.com/)

---

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/protein-predictor-covid19.git
   cd protein-predictor-covid19
   ```

2. **Install dependencies:**

   Using npm:
   ```bash
   npm install
   ```

   Or using yarn:
   ```bash
   yarn install
   ```

---

## Development

To start the development server, run:

```bash
npm run dev
```

This will launch the development server and provide a local URL (e.g., `http://localhost:3000`) where you can preview the application. Changes in the code will automatically reflect in the browser due to Vite's hot module replacement (HMR).

---

## Build

To create a production build of the project:

```bash
npm run build
```

This will generate optimized static files in the `dist` folder.

---

## Preview

To locally preview the production build:

```bash
npm run preview
```

---

## Project Structure

The directory structure follows standard Vite + React conventions:

```
src/
├── components/        # Reusable UI components
├── pages/             # Page components (e.g., Home, About)
├── styles/            # Global and utility styles
├── App.tsx            # Root component
├── main.tsx           # Entry point for the app
└── vite.config.ts     # Vite configuration file
```

---

## Technologies Used

- **[React](https://reactjs.org/):** Front-end library for building user interfaces.
- **[Vite](https://vitejs.dev/):** Lightning-fast development environment.
- **[TailwindCSS](https://tailwindcss.com/):** Utility-first CSS framework for styling.
- **[Radix UI](https://www.radix-ui.com/):** Primitives for building accessible design systems.
- **[React Router](https://reactrouter.com/):** Declarative routing for React.
- **TypeScript:** Strongly typed programming language for building scalable applications.

---

## Linting and Formatting

Run ESLint to lint the code:

```bash
npm run lint
```

---

## Development Notes

- **Responsive Design:** The layout is fully responsive and optimized for different screen sizes (mobile, tablet, and desktop).
- **TailwindCSS Integration:** Modify the `tailwind.config.js` file to customize themes, colors, and breakpoints.
- **Radix Components:** Radix UI primitives are used for accessible and flexible UI components.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Open a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).
```

You can copy and paste this into a `README.md` file in your GitHub repository. It is formatted and ready to display properly on GitHub. Let me know if you'd like additional adjustments!




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

