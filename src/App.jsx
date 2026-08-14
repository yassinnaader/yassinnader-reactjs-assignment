import Header from "./components/Header";
import CourseList from "./components/CourseList";
import "./App.css";

function App() {
  return (
    <div>

      <Header />

      <main>

        <section className="hero" id="home">
          <div>
            <h1>Learn Something New</h1>

            <p>
              Improve your skills with our simple and practical online courses.
            </p>

            <button>Explore Courses</button>
          </div>
        </section>

        <CourseList />

        <section className="about" id="about">
          <h2>Why Choose LearnHub?</h2>

          <p>
            LearnHub provides easy-to-follow courses designed to help students
            develop useful programming and technology skills.
          </p>
        </section>

      </main>

      <footer>
        <p>© 2026 LearnHub. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;