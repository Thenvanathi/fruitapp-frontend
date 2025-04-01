import { useState } from "react";
import axios from "axios";

function App() {
  const [fruit, setFruit] = useState("");
  //const API_URL = "http://localhost:5000";  // Local backend URL
  const API_URL = "https://fruitapp-backend-1.onrender.com";  // Deployed backend URL


  const addFruit = async () => {
    if (!fruit.trim()) return alert("Please enter a valid fruit name.");

    try {
      // Add the fruit to the backend
      await axios.post(`${API_URL}/add`, { name: fruit });

      // Redirect to the fruits page (backend will handle the redirect)
      window.location.href = `${API_URL}/fruits`;
    } catch (error) {
      console.error("Error adding fruit:", error);
      alert("Failed to add fruit. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-green-100 to-green-300">
      <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-green-600 mb-6 text-center">Fruit Management</h1>
        
        <input
          type="text"
          value={fruit}
          onChange={(e) => setFruit(e.target.value)}
          placeholder="Enter fruit name"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 mb-4"
        />

        <button
          onClick={addFruit}
          className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition"
        >
          Add Fruit
        </button>
      </div>
    </div>
  );
}

export default App;



