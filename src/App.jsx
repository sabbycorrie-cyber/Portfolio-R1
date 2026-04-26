import Profile from "./Components/Profile.jsx";
import Project from "./Components/Project.jsx";

function App() {
  return (
    <div className="container">
    <Profile />

  <div classNAme="projects">
    <Project
      name="React Portfolio"
      image=""
      github="https://github.com/my-repo"
      tech="React"
      what="Displays my projects and personal information."
      learned="I learned how to build reusable components and how to structure a React application."
      challenges="Understanding  how components work together."
    />

    <Project
      name="JavaScript Game"
      image=""
      github="https://github.com/my-repo"
      tech="JavaScript"
      what="Another simple project."
      learned="I learned how to use JavaScript to handle logic, manipulate data, and create interactive features."
      challenges="Understanding the DOM manipulation techniques."
    />

    <Project
      name="HTML & CSS Webpage"
      image=""
      github="https://github.com/my-repo"
      tech="CSS & HTML"
      what="A third simple project."
      learned="I learned how to use CSS and HTML to style and structure a webpage."
      challenges="Making the layout clean and responsive."
    />
  </div>
    </div>
  );
}

export default App;
