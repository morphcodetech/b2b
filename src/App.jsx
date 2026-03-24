import React from "react";
import CategoryScrollSection from "./components/CategoryScrollSection/CategoryScrollSection";
import CategoryGridSection from "./components/CategoryGridSection/CategoryGridSection";

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Horizontal Scroll Strip */}
      <CategoryScrollSection />

      {/* Static Grid Section */}
      <CategoryGridSection />
    </div>
  );
}

export default App;
