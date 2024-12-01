import React, { useState } from "react";
import HomePage from "./HomePage/HomePage";
import Login from "./SignUp/Login";
import SignUp from "./SignUp/SignUp";

function App() {
  const [activePage, setActivePage] = useState("home");

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <HomePage navigate={setActivePage} />;
      case "login":
        return <Login navigate={setActivePage} />;
      case "signup":
        return <SignUp navigate={setActivePage} />;
      default:
        return <HomePage navigate={setActivePage} />;
    }
  };

  return (
    <div>
      <header>
        <h1>Welcome to Our Application</h1>
      </header>

      <main>{renderPage()}</main>
    </div>
  );
}

export default App;
