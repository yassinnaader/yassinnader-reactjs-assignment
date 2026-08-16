import CourseList from "../components/CourseList";

function Home() {
  return (
    <div className="container py-5">

      <div className="text-center mb-5">
        <h1>Welcome to LearnHub</h1>

        <p className="lead mt-3">
          Learn programming and technology through practical online courses.
        </p>

        <p className="text-muted">
          Explore our courses and improve your skills.
        </p>
      </div>

      <h2 className="text-center mb-4">
        Our Courses
      </h2>

      <CourseList />

    </div>
  );
}

export default Home;