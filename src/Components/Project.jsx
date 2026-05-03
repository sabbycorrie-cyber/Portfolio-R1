import "./Project.css";

function Project({ name, image, github, tech, what, learned, challenges }) {
    return (
        <div className="project">
            <div className="project-content">

                <img src={image} alt={name}/>

                <div className="project-text">
                    <h2>{name}</h2>
                    <p><strong>Tech:</strong> {tech}</p>
                    <p><strong>What it does:</strong> {what}</p>
                    <p><strong>What I learned:</strong> {learned}</p>
                    <p><strong>Challenges:</strong> {challenges}</p>

                    <a href={github}>View on GitHub</a>
            
                </div>
            </div>
        </div>
    );
}

export default Project; 