import React, { useState } from "react";
// import Navbar from './Navbar'
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Login from "./login/login";
import Signup from "./signup/signup";
// import Dashboard from 'dash';
import "./App.css";
import Dashboard from "./dashboard/dashboard";

// export default function App() {

//   return (
//     <div className="app">
//       {/* <Login /> */}
//       <Signup/>
//     </div>
//   );
// }

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Router path='/dashboard' exact component={dashboard}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
