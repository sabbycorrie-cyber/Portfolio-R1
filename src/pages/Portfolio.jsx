import {useState } from "react";
import Popup from "../Components/Popup";
import Project from "../Components/Project";

import atmImg from "../assets/atm-img.png";
import portfolioImg from "../assets/portfolio-img.png";
import websiteImg from "../assets/website-img.png";

function Portfolio () {
    const [showProjects, setShowProjects] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [search, setSearch] = useState("");

    const projects = [
        {
            name:"React Portfolio",
            image: portfolioImg,
            github:"https://github.com/sabbycorrie-cyber/Portfolio-R1 ",
            tech:"React",
            what:"Displays my profile and projects using reusable components.",
            learned:"I learned how to build reusable components, pass props, and how to structure a React application.",
            challenges:"Understanding  how components connect and how to organize files properly.",
        },
        {
            name:"JavaScript ATM/Bank Account",
            image: atmImg,
            github:"https://github.com/sabbycorrie-cyber/js-assignment-5 ",
            tech:"JavaScript",
            what:"A simple bank account system that allows users to check their balance, deposit money, and withdraw funds.",
            learned:"I learned how to use JavaScript objects, functions, and conditionals to manage data and perform operations like deposits and withdrawals.",
            challenges:"Making sure the balance updates correctly and handling cases like withdrawing more than the available balance.",
        },
        {
            name:"Responsive Website (HTML, CSS & Sass)",
            image: websiteImg,
            github:"https://github.com/sabbycorrie-cyber/genesis-design/tree/main",
            tech:"HTML, CSS, Sass",
            what:"A multi-page website with navigation, a gallery, and a contact form, designed to match a given layout and work across different browsers.",
            learned:"I learned how to structure a full website with multiple pages, use Sass to organize and reuse styles, and apply Flexbox and Grid to build responsive layouts.",
            challenges:"Ensuring consistent layout across pages, fixing structure issues, and improving responsiveness while working with multiple files and styles."
        }
    ];

    const filteredProjects = projects.filter((project) =>
        project.name.toLowerCase(). includes(search.toLowerCase()) ||
    project.tech.toLowerCase().includes(search.toLowerCase())
);

    return (
        <div className="page">

            <h1>My Projects</h1>

            <button className="project-btn" onClick={() => setShowProjects(!showProjects)}
                >
                    {showProjects ? "Hide Projects" : "View My Projects"}
                </button>

                <p className="portfolio-description">Explore projects that showcase my front-end development skills, problem-solving abilities, and growth as a developer.
                </p>
                
                {showProjects && (
                    <input
                    type="text"
                    className="search-bar"
                    placeholder="Search projects..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    />
                )}

                {showProjects && (
                    <div className="project-grid">
                    {filteredProjects.map((project) => (
                    <Project key={project.name}
                    {...project}
                    onClick={() => setSelectedProject(project)}
                    />
                    ))}

                    </div>
                )}

        {selectedProject && (
            <Popup p
            project={selectedProject} 
            closePopup={() => setSelectedProject(null)} 
            />
        )}
    </div> 
    );
}

export default Portfolio;