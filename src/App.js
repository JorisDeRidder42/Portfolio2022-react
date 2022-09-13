import React, { useState, useEffect } from "react";
import Navigation from "./Header/Navigation";
import { Home } from "./pages/home";
import { Loader } from "./Loader/Loader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader />
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
