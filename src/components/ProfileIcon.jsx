import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import "./ProfileIcon.css";

const ProfileIcon = () => {
  const { user } = useContext(AuthContext);

  // Get initials if no profile picture
  const getInitials = (name) => {
    return name ? name.split(" ").map((n) => n[0]).join("").toUpperCase() : "";
  };

  return (
    <div className="profile-container">
      {user ? (
        <div className="profile-icon">
          {user.photoURL ? (
            <img src={user.photoURL} alt="User Avatar" className="avatar" />
          ) : (
            <div className="initials">{getInitials(user.displayName)}</div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default ProfileIcon;
