import "./Popup.css";

function Popup({ project, closePopup }) {
    return (
        <div className="popup-overlay">
            <div className="popup-box">

                <h2>{project.name}</h2>

                <img src={project.image} alt={project.name} />

                <p><strong>Tech:</strong> {project.tech}</p>
                <p><strong>What it does:</strong> {project.what}</p>
                <p><strong>What I learned:</strong> {project.learned} </p>
                <p><strong>Challenges:</strong> {project.challenges} </p>

                <a href={project.github} target="_blank">View GitHub Repo</a>

                <br />

                <button onClick={closePopup}>Close</button>
            </div>
        </div>
    );
}

export default Popup;