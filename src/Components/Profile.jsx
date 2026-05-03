import "./Profile.css";
import profilePic from "../assets/profile-picture.png";

function Profile() {
    return(
    <div className="profile">
    <img src={profilePic} alt="Profile Picture" style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover' }} className="img"/>
    <h1 className="profileTitle">Sabantho</h1>
    <p className="intro">Front-end developer in progress, with a passion for inclusive design and purposeful digital experiences.</p>
    </div>

    )

}


export default Profile;