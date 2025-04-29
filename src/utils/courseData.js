export const allCourses = [
  {
    id: 1,
    thumbnail: "https://via.placeholder.com/150",
    title: "AI & Machine Learning Basics",
    instructor: "Dr. Alan Turing",
    duration: "5h 30m",
    rating: 4.8,
    price: 49.99,
    category: "Trending",
    isFree: false,
  },
  {
    id: 2,
    thumbnail: "https://via.placeholder.com/150",
    title: "Data Science Fundamentals",
    instructor: "Dr. Grace Hopper",
    duration: "6h 15m",
    rating: 4.7,
    price: 59.99,
    category: "Popular",
    isFree: false,
  },
  {
    id: 3,
    thumbnail: "https://via.placeholder.com/150",
    title: "Data Analytics with Python",
    instructor: "Jane Doe",
    duration: "4h 45m",
    rating: 4.6,
    price: 39.99,
    category: "New",
    isFree: false,
  },
  {
    id: 4,
    thumbnail: "https://via.placeholder.com/150",
    title: "Deep Learning Advanced",
    instructor: "John Smith",
    duration: "7h 00m",
    rating: 4.9,
    price: 69.99,
    category: "Trending",
    isFree: false,
  },
  {
    id: 5,
    thumbnail: "https://via.placeholder.com/150",
    title: "Natural Language Processing",
    instructor: "Dr. Ada Lovelace",
    duration: "5h 20m",
    rating: 4.7,
    price: 54.99,
    category: "Popular",
    isFree: false,
  },
  {
    id: 6,
    thumbnail: "https://via.placeholder.com/150",
    title: "Big Data Essentials",
    instructor: "Michael Johnson",
    duration: "6h 00m",
    rating: 4.5,
    price: 44.99,
    category: "New",
    isFree: false,
  },
  {
    id: 7,
    thumbnail: "https://via.placeholder.com/150",
    title: "AI Ethics and Society",
    instructor: "Dr. Susan Calvin",
    duration: "3h 30m",
    rating: 4.4,
    price: 29.99,
    category: "Free",
    isFree: true,
  },
  {
    id: 8,
    thumbnail: "https://via.placeholder.com/150",
    title: "Data Visualization Techniques",
    instructor: "Emily Davis",
    duration: "4h 00m",
    rating: 4.6,
    price: 34.99,
    category: "Popular",
    isFree: false,
  },
];

export const filters = ["Trending", "New", "Popular", "Free"];

export const filterCourses = (courses, selectedFilter) => {
  if (selectedFilter === "Free") {
    return courses.filter(course => course.isFree);
  }
  return courses.filter(course => course.category === selectedFilter);
};
