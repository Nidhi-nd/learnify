import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { ThemeProvider } from "./contexts/ThemeContext";
import AuthProvider from "./contexts/AuthContext"; 
import Gamification from "./components/Gamification";
import ProgressTracker from "./components/ProgressTracker";
import ChatWidget from "./components/ChatWidget";
import Testimonials from "./components/Testimonials";
import Accessibility from "./components/Accessibility";


const App = () => {
  return (
    <AuthProvider>
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
