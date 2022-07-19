import React, { useState, useEffect } from "react";
import { PuffLoader } from "react-spinners";
import Navigation from "./Header/Navigation";
import { Home } from "./pages/home";

export const ThemeContext = React.createContext();

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
        <PuffLoader size={100} color={"#04f5fd"} loading={loading} />
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
