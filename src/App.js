import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main className="main-section">
        <h1>
          Welcome to <span>FloatChat</span>
        </h1>
        <p>AI-powered ocean data discovery, simplified.</p>
        <button>Get Started</button>
      </main>
      <Footer />
    </>
  );
}

export default App;


