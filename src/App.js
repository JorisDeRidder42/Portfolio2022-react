import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import Navigation from "./Header/Navigation";
import { Home } from "./pages/home";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <ClipLoader size={100} color={"#04f5fd"} loading={loading} />
      ) : (
        <div>
          <Navigation />
          <Home />
        </div>
      )}
    </div>
  );
}

export default App;
