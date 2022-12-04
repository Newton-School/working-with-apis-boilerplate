import React, { useState } from "react";
import "../styles/App.css";

const Form = (props) => {
  const handleSubmit = (e) => {
    
  };

  return (
    <form onSubmit={handleSubmit} >
      <h3 >Enter details to create QR Code</h3>
      
    </form>
  );
};

const App = () => {
  const [formData, setFormData] = useState(null);

  return (
    <div id="main">
      <div >
        <h1 >QR Code Generator</h1>
        <div >
          <Form setFormData={setFormData} />
          <div >
            <h3 >QR Code</h3>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;