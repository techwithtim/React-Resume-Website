import "./Profile.css";
import image from "./headshot.jpg";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";

const Profile = () => {
  return (
    <div className="section">
      <div className="bio">
        <p className="no-margin small-text">Hello</p>
        <p className="no-margin name-text">
          I'm <span className="highlight-text">Tim Ruscica</span>
        </p>
        <p className="no-margin small-text">
          youtuber <span className="highlight-text">and</span> software engineer
        </p>
        <div className="icons">
          <a href="https://twitter.com/techwithtimm">
            <AiFillTwitterCircle color="orange" size={30} />
          </a>
          <a href="https://instagram.com/tech_with_tim">
            <AiFillInstagram color="orange" size={30} />
          </a>
          <a href="https://youtube.com/techwithtim">
            <AiFillYoutube color="orange" size={30} />
          </a>
          <a href="https://github.com/techwithtim">
            <AiFillGithub color="orange" size={30} />
          </a>
          <a href="https://linkedin.com/tim-ruscica">
            <AiFillLinkedin color="orange" size={30} />
          </a>
        </div>
      </div>
      <div className="photo">
        <img src={image} className="profile-image" alt="me" />
      </div>
    </div>
  );
};

export default Profile;
