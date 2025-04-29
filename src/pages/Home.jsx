import React from "react";
import NewsletterSignup from "../components/NewsletterSignup";
import LatestAnnouncements from "../components/LatestAnnouncements";
import BadgesCertifications from "../components/BadgesCertifications";
import TrustedBy from "../components/TrustedBy";
import FeaturedCourses from "../components/FeaturedCourses";
import Motto from "../components/Motto";
import FeaturesGrid from "../components/FeaturesGrid";
import QuizComponent from "../components/QuizComponent";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Motto />
      <FeaturesGrid />
      <FeaturedCourses />
      <QuizComponent />
      <LatestAnnouncements />
      <BadgesCertifications />
      <TrustedBy />
      <NewsletterSignup />
    </div>
  );
};

export default Home;
