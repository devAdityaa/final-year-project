import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, Search } from "lucide-react";
import { useEffect, useState } from "react";
import Papa from "papaparse"; // Import PapaParse to parse the CSV file
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

export const ProteinForm = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  console.log(backendUrl);

  const [proteinEntries, setProteinEntries] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [submitLoading, setSubmitLoading] = useState<boolean>(false);

  const [selectedProtein, setSelectedProtein] = useState<any>(null);
  const [selectedModelType, setSelectedModelType] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [prediction, setPrediction] = useState<any>(null);

  // NEW: Local search state to filter the dropdown
  const [searchQuery, setSearchQuery] = useState("");

  const [formData, setFormData] = useState<any>({}); // keep your initial shape or fill as you wish
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  // Labels for your form fields
  const labels = {
    /* ... same label object you already have ... */
  };

  // Fetch protein entries based on model type
  useEffect(() => {
    if (!selectedModelType) return;

    setLoading(true);
    const csvFile = selectedModelType === "DL" 
      ? "Final SARS-CoV-2 dataset.csv" 
      : "data.csv";

    Papa.parse(csvFile, {
      download: true,
      header: true,
      dynamicTyping: true,
      complete: (result) => {
        setProteinEntries(result.data);
        setLoading(false);
      },
      error: (error) => {
        console.error("Error parsing CSV file:", error);
        setLoading(false);
      },
    });

    // Automatically select Deep Learning model when DL type is selected
    if (selectedModelType === "DL") {
      setSelectedModel("DL");
    } else {
      setSelectedModel(""); // Reset model selection for ML type
    }

    // Reset selected protein and form data when switching model types
    setSelectedProtein(null);
    setFormData({});
  }, [selectedModelType]);

  // When user selects an ID, find that protein & update form data
  const handleSelectProtein = (proteinId: string) => {
    const selected = proteinEntries.find((entry) => entry.Entry === proteinId);
    if (selected) {
      setSelectedProtein(selected);

      // Update form fields with this protein's data
      const newFormData: any = {};
      Object.keys(selected).forEach((key) => {
        if (key !== "Entry" && key !== "Label") {
          newFormData[key] = selected[key];
        }
      });
      setFormData(newFormData);
    }
  };

  // Model selection
  const handleSelectModel = (model: string) => {
    setSelectedModel(model);
  };

  // Track user edits to numeric fields
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Filter large list by searchQuery
  const filteredProteins = proteinEntries.filter((entry) =>
    entry.Entry?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Submit to backend
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    let errorMessage = "";
    Object.keys(formData).some((key) => {
      if (formData[key] === "" || formData[key] == null) {
        errorMessage = `Please fill all required fields or select a data entry. Missing: ${key}`;
        return true;
      }
      return false;
    });

    if (!selectedModel) {
      errorMessage = "Please select a model.";
    }

    if (errorMessage) {
      setPrediction({ error: errorMessage });
      return;
    }

    setSubmitLoading(true);

    try {
      const response = await fetch(
        `${backendUrl}/api/predict/${selectedModel}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      setPrediction(data);
    } catch (error) {
      console.error("Error submitting data:", error);
      setPrediction({ error: "An error occurred while predicting." });
    }
    setSubmitLoading(false);
  };

  return (
    <section className="relative py-16">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 via-indigo-50 to-purple-50 animate-gradient-flow"></div>
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-8">
          Protein Status Predictor
        </h2>
        <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Select Model Type and Protein
          </h2>

          {/* Model Type Selection */}
          <div className="mb-6">
            <Select
              value={selectedModelType}
              onValueChange={setSelectedModelType}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Model Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="DL">Deep Learning</SelectItem>
                <SelectItem value="ML">Machine Learning</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Main form row for ID & model selection */}
          {loading ? (
            <div className="flex items-center justify-center">
              <div className="animate-pulse h-10 w-10 border-4 border-dashed border-blue-500 rounded-full"></div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              {/* Protein Select with local search */}
              <div className="w-full sm:w-[280px]">
                <Select onValueChange={handleSelectProtein}>
                  <SelectTrigger className="w-full">
                    <Search className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Select Data Entry" />
                  </SelectTrigger>
                  <SelectContent>
                    <div className="px-2 py-2">
                      <Input
                        type="text"
                        placeholder="Search IDs..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    {filteredProteins.map((entry) => (
                      <SelectItem key={entry.Entry} value={entry.Entry}>
                        {entry.Entry}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Model Select */}
              <div className="w-full sm:w-[280px]">
                <Select
                  value={selectedModel}
                  onValueChange={handleSelectModel}
                >
                  <SelectTrigger className="w-full">
                    <Search className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Select Model" />
                  </SelectTrigger>
                  <SelectContent>
                    {selectedModelType === "DL" ? (
                      <SelectItem value="DL">Deep Learning</SelectItem>
                    ) : (
                      <>
                        <SelectItem value="RandomForestClassifier">
                          Random Forest
                        </SelectItem>
                        <SelectItem value="GradientBoostingClassifier">
                          Gradient Boosting
                        </SelectItem>
                        <SelectItem value="XGBClassifier">XGBoost</SelectItem>
                        <SelectItem value="LogisticRegression">
                          Logistic Regression
                        </SelectItem>
                        <SelectItem value="DecisionTreeClassifier">
                          Decision Tree
                        </SelectItem>
                        <SelectItem value="KNeighborsClassifier">
                          K-Nearest Neighbors
                        </SelectItem>
                      </>
                    )}
                  </SelectContent>
                </Select>
              </div>

              {/* Predict button */}
              <Button
                type="submit"
                className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white"
                disabled={submitLoading || !selectedModelType}
              >
                {submitLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white mr-2"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    Predict
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          )}

          {/* Error Messages */}
          {errorMessages.length > 0 && (
            <div className="mt-4 text-red-500">
              <ul>
                {errorMessages.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Form Fields */}
          <Card className="mt-8 p-6 bg-white/80 backdrop-blur-sm">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-h-96 overflow-y-auto p-2">
                {Object.keys(formData).map((field) => (
                  <div key={field} className="space-y-2">
                    <Label htmlFor={field} className="flex items-center gap-2">
                      {labels[field] || field.replace("_", " ")}
                    </Label>
                    <Input
                      id={field}
                      name={field}
                      placeholder={`Enter value for ${
                        labels[field] || field.replace("_", " ")
                      }`}
                      value={formData[field] ?? ""}
                      onChange={handleInputChange}
                      className="w-full"
                      type="number"
                      step="any"
                    />
                  </div>
                ))}
              </div>
            </form>
          </Card>

          {/* Show Prediction Errors or Results */}
          {prediction?.error && (
            <div className="mt-4 text-center text-red-600 font-medium">
              {prediction.error}
            </div>
          )}

          {prediction && prediction.prediction_label && (
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold">Prediction Result</h3>
              <p>{`Prediction: ${prediction.prediction_label}`}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
