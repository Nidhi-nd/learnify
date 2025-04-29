import React, { useState, useEffect } from "react";
import CourseCard from "../components/CourseCard";
import { allCourses, filters, filterCourses } from "../utils/courseData";
import "./Courses.css";

const Courses = () => {
  const [selectedFilter, setSelectedFilter] = useState("Trending");
  const [courses, setCourses] = useState(allCourses);

  const filteredCourses = filterCourses(courses, selectedFilter);

  const handleEnroll = (courseTitle) => {
    alert(`Enrolled in ${courseTitle}!`);
  };

  return (
    <div className="courses">
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
      <div className="course-grid">
        {filteredCourses.map((course) => (
          <CourseCard
            key={course.id}
            {...course}
            onEnroll={() => handleEnroll(course.title)}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;
