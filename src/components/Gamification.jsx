import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { db } from "../firebaseConfig"; // Firebase setup
import { doc, getDoc } from "firebase/firestore";
import "./Gamification.css";

const Gamification = () => {
  const { user } = useContext(AuthContext);
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState("Beginner");
  const [badges, setBadges] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch user progress from Firebase
  const fetchUserProgress = async () => {
    if (!user) {
      setLoading(false);
      return;
    }

    try {
      const userRef = doc(db, "userProgress", user.uid);
      const docSnap = await getDoc(userRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setXp(data.xp || 0);
        setLevel(data.level || "Beginner");
        setBadges(data.badges || []);
      } else {
        console.log("No progress found for user.");
        setXp(0);
        setLevel("Beginner");
        setBadges([]);
      }
    } catch (error) {
      console.error("Error fetching user progress:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) fetchUserProgress();
  }, [user]);

  if (loading) {
    return <div className="gamification">Loading user progress...</div>;
  }

  if (!user) {
    return <div className="gamification">Please log in to see your progress.</div>;
  }

  return (
    <div className="gamification">
      <h2>Your Gamification Progress</h2>
      <p>Level: {level}</p>
      <p>XP: {xp}</p>
      <div className="badges">
        <h3>Badges Earned:</h3>
        {badges.length > 0 ? (
          <ul>
            {badges.map((badge, index) => (
              <li key={index}>{badge}</li>
            ))}
          </ul>
        ) : (
          <p>No badges earned yet.</p>
        )}
      </div>
    </div>
  );
};

export default Gamification;
