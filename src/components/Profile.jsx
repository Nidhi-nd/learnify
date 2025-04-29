import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { auth, googleProvider, githubProvider } from "../firebaseConfig";
import { signInWithPopup, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import "./Profile.css";

const sampleProgressData = [
  { name: "Week 1", progress: 20 },
  { name: "Week 2", progress: 40 },
  { name: "Week 3", progress: 60 },
  { name: "Week 4", progress: 80 },
  { name: "Week 5", progress: 100 },
];

const Profile = () => {
  const { user } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("enrolled");

  const handleLogin = async (provider) => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "enrolled":
        return <div>Your enrolled courses will be shown here.</div>;
      case "completed":
        return <div>Your completed courses will be shown here.</div>;
      case "wishlist":
        return <div>Your wishlist courses will be shown here.</div>;
      default:
        return null;
    }
  };

  return (
    <div className="profile-section">
      <div className="profile-icon" onClick={() => setDropdownOpen(!dropdownOpen)}>
        {user?.photoURL ? (
          <img src={user.photoURL} alt="User Avatar" className="avatar" />
        ) : (
          <div className="initials">{user?.displayName ? user.displayName[0] : "?"}</div>
        )}
      </div>

      {dropdownOpen && (
        <div className={`dropdown-menu ${theme}`}>
          <label className="theme-switch">
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={toggleTheme}
            />
            <span className="slider" />
            <span className="icon">{theme === "light" ? "🌙" : "☀️"}</span>
          </label>

          {user ? (
            <>
              <nav className="profile-nav-links">
                <Link to="/dashboard" onClick={() => setDropdownOpen(false)}>Dashboard</Link>
                <Link to="/my-courses" onClick={() => setDropdownOpen(false)}>My Courses</Link>
                <Link to="/settings" onClick={() => setDropdownOpen(false)}>Settings</Link>
              </nav>
              <p><strong>Name:</strong> {user.displayName}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>LinkedIn:</strong> <a href={user.linkedinProfile}>Profile</a></p>
              <p><strong>GitHub:</strong> <a href={user.github}>Profile</a></p>
              <button onClick={() => { signOut(auth); setDropdownOpen(false); }}>Logout</button>

              <div className="profile-tabs">
                <button className={activeTab === "enrolled" ? "active" : ""} onClick={() => setActiveTab("enrolled")}>Enrolled Courses</button>
                <button className={activeTab === "completed" ? "active" : ""} onClick={() => setActiveTab("completed")}>Completed</button>
                <button className={activeTab === "wishlist" ? "active" : ""} onClick={() => setActiveTab("wishlist")}>Wishlist</button>
              </div>

              <div className="tab-content">
                {renderTabContent()}
              </div>

              <div className="progress-graph">
                <h4>Learning Progress</h4>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={sampleProgressData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="progress" stroke="#8884d8" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </>
          ) : (
            <>
              <button onClick={() => handleLogin(googleProvider)}>Sign in with Google</button>
              <button onClick={() => handleLogin(githubProvider)}>Sign in with GitHub</button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;
