function CourseCard({ title, instructor, level, duration, price, popular }) {
  return (
    <div className="course-card">

      <div className="course-image">
        <span>📚</span>
      </div>

      <div className="course-content">
        <h3>{title}</h3>

        {/* PROPS: instructor, level, duration, price are received as props */}
        <p className="instructor">Instructor: {instructor}</p>

        {/* TERNARY OPERATOR */}
        <p>
          Level: {level === "Beginner" ? "Easy to Start" : "Advanced Learning"}
        </p>

        <p>Duration: {duration}</p>

        <p className="price">${price}</p>

        {/* && OPERATOR */}
        {popular && <span className="popular">⭐ Popular Course</span>}

        <button>Enroll Now</button>
      </div>

    </div>
  );
}

export default CourseCard;