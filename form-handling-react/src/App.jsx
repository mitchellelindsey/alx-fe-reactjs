import './App.css'
import React from "react";
import FormikForm from "./components/FormikForm";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <br />
        {/* Login Form */}
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
          <FormikForm />
        </div>
             <br />
        {/* Registration Form */}
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
}

export default App;
