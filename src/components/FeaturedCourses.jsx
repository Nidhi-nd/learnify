import React, { useState, useEffect } from "react";
import CourseCard from "./CourseCard";
import useFadeInOnScroll from "../utils/useFadeInOnScroll";
import { fetchCourses } from "../utils/api";
import { allCourses, filters, filterCourses } from "../utils/courseData";
import "./FeaturedCourses.css";

const FeaturedCourses = () => {
  const [selectedFilter, setSelectedFilter] = useState("Trending");
  const [courses, setCourses] = useState(allCourses);
  const [loading, setLoading] = useState(false);
  const [domRef, isVisible] = useFadeInOnScroll();

  useEffect(() => {
    const getCourses = async () => {
      setLoading(true);
      const data = await fetchCourses();
      if (data && Array.isArray(data) && data.length > 0) {
        setCourses(data);
      } else {
        setCourses(allCourses);
      }
      setLoading(false);
    };
    getCourses();
  }, []);

  const filteredCourses = filterCourses(courses, selectedFilter);

  const handleEnroll = (courseTitle) => {
    alert(`Enrolled in ${courseTitle}!`);
  };

  return (
    <section
      className={`featured-courses fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      <h1>Featured Courses</h1>
      <div className="filters">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-button ${selectedFilter === filter ? "active" : ""}`}
            onClick={() => setSelectedFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      {loading ? (
        <p>Loading courses...</p>
      ) : (
        <div className="course-grid">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              {...course}
              onEnroll={() => handleEnroll(course.title)}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default FeaturedCourses;
