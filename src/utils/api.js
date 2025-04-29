const API_URL = "https://api.learnify.com";

export const fetchCourses = async () => {
  try {
    const response = await fetch(`${API_URL}/courses`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching courses:", error);
  }
};
