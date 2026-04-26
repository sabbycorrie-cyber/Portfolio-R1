import "./Project.css";

function Project({ name, image, github, tech, what, learned, challenges }) {
    return (
        <div className="project">
            <h2>{name}</h2>
            <img src={image} alt={name} />
            <p><strong>Tech:</strong> {tech}</p>
            <p><strong>What it does:</strong> {what}</p>
            <p><strong>What I learned:</strong> {learned}</p>
            <p><strong>Challenges:</strong> {challenges}</p>
            <a href={github} target="_blank">View on GitHub</a>
        </div>
    );
}

export default Project;