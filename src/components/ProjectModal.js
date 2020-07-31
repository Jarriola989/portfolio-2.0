import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { PROJECT_TYPE } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faLock } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faYoutube,
  faTrello,
} from "@fortawesome/free-brands-svg-icons";

const ProjectModal = (props) => {
  let imageCount = 0;
  console.log(props.project);
  const {
    name,
    description,
    notes,
    images,
    stack,
    liveLink,
    clientRepo,
    serverRepo,
    demoLink,
    trello,
    type,
  } = props.project || {};
  return (
    <div className={props.project ? "project-modal" : "project-modal hide"}>
      {/* <div className="project-card--images"></div> */}
      <AwesomeSlider
        className={
          props.project ? "project-modal--images" : "project-modal--images hide"
        }
        style={{ backgroundColor: "black" }}
      >
        {images
          ?.filter((image) => image.src !== "")
          .map(({ src, alt }) => {
            imageCount++;
            return (
              <div style={{ backgroundColor: "transparent" }} key={imageCount}>
                <img className="project-modal--image" src={src} alt={alt} />
              </div>
            );
          })}
      </AwesomeSlider>

      <div className="project-modal--details">
        <h2 className="project-modal--title">{name}</h2>
        <p className="project-modal--description">{description}</p>
        {notes?.length > 0 ? (
          <p className="project-modal--notes">
            <b>Note: </b>
            {notes}
          </p>
        ) : (
          ""
        )}
        <div className="project-modal--stack">
          {stack?.map((tool) => {
            return <span>{tool}</span>;
          })}
        </div>
        <div className="project-modal--links">
          <span className="project-modal--extra-links">
            {liveLink?.length > 0 ? (
              <a href={liveLink} className="project-modal--link">
                <FontAwesomeIcon
                  icon={faExternalLinkAlt}
                  className="project-modal--link-icon"
                />
                &nbsp; Live Link
              </a>
            ) : type === PROJECT_TYPE.personal ? (
              <button disabled className="project-modal--link">
                Not Deployed
              </button>
            ) : (
              <button disabled className="project-modal--link">
                <FontAwesomeIcon
                  icon={faLock}
                  className="project-modal--link-icon"
                />
                &nbsp; Private Link
              </button>
            )}
            {clientRepo?.length > 0 ? (
              <a href={clientRepo} className="project-modal--link transparent">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="project-modal--link-icon big-icon"
                />
                &nbsp; UI Repo
              </a>
            ) : type === PROJECT_TYPE.personal ? (
              ""
            ) : (
              <button disabled className="project-modal--link transparent">
                <FontAwesomeIcon
                  icon={faLock}
                  className="project-modal--link-icon"
                />
                &nbsp; Private UI Repo
              </button>
            )}
            {serverRepo?.length > 0 ? (
              <a href={clientRepo} className="project-modal--link transparent">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="project-modal--link-icon big-icon"
                />
                &nbsp; API Repo
              </a>
            ) : type === PROJECT_TYPE.personal ? (
              ""
            ) : (
              <button disabled className="project-modal--link transparent">
                <FontAwesomeIcon
                  icon={faLock}
                  className="project-modal--link-icon"
                />
                &nbsp; Private API Repo
              </button>
            )}
          </span>
          <span className="project-modal--extra-links">
            {demoLink ? (
              <FontAwesomeIcon
                icon={faYoutube}
                className="extra-big-icon youtube"
              />
            ) : (
              ""
            )}
            {trello ? (
              <FontAwesomeIcon
                icon={faTrello}
                className="extra-big-icon trello"
              />
            ) : (
              ""
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;