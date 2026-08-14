import CourseCard from "./CourseCard";

function CourseList() {

  const courses = [
    {
      id: 1,
      title: "Web Development",
      instructor: "Ahmed Hassan",
      level: "Beginner",
      duration: "6 Weeks",
      price: 50,
      popular: true
    },
    {
      id: 2,
      title: "JavaScript Programming",
      instructor: "Sara Ali",
      level: "Intermediate",
      duration: "8 Weeks",
      price: 70,
      popular: true
    },
    {
      id: 3,
      title: "React JS",
      instructor: "Omar Mohamed",
      level: "Advanced",
      duration: "10 Weeks",
      price: 90,
      popular: false
    },
    {
      id: 4,
      title: "Python Programming",
      instructor: "Mariam Ahmed",
      level: "Beginner",
      duration: "7 Weeks",
      price: 60,
      popular: false
    }
  ];

  return (
    <section className="courses-section" id="courses">

      <h2>Our Courses</h2>

      <p className="section-description">
        Learn new skills with our simple and practical courses.
      </p>

      <div className="course-grid">

        {/* .map() OPERATOR */}
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            instructor={course.instructor}
            level={course.level}
            duration={course.duration}
            price={course.price}
            popular={course.popular}
          />
        ))}

      </div>

    </section>
  );
}

export default CourseList;