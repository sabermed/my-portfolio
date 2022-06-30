import React from "react";
import BackToTopButton from "./components/BackToTopButton";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import mailing from "./assets/mailing.png";
import aboutImg from "./assets/about-img.png";
import library from "./assets/Libary.png";
import TopNav from "./components/TopNav";
import { ReactComponent as FrontendIcon } from "./assets/frontend-icon.svg";
import { ReactComponent as BackendIcon } from "./assets/backend-icon.svg";
import { ReactComponent as ToolsIcon } from "./assets/tools-icon.svg";
import { ReactComponent as Github } from "./assets/github.svg";
import { ReactComponent as Facebook } from "./assets/facebook.svg";
import { ReactComponent as Linkedin } from "./assets/linkedin.svg";

function App() {
  // const data = [
  //   {
  //     id: 1,
  //     title: "SM Marketing",
  //     platform: "Web",
  //     github_link: "#",
  //     live_preview_link: "#",
  //     language: ["HTML", "CSS", "JS"],
  //     description:
  //       "SM Marketing is a Site with smoothly animation and responsive design it used for marketing place for company like Samsung.",
  //   },
  //   {
  //     id: 2,
  //     title: "SM Marketing",
  //     platform: "Web",
  //     github_link: "#",
  //     live_preview_link: "#",
  //     language: ["HTML", "CSS", "JS"],
  //     description:
  //       "SM Marketing is a Site with smoothly animation and responsive design it used for marketing place for company like Samsung.",
  //   },
  //   {
  //     id: 3,
  //     title: "SM Marketing",
  //     platform: "Web",
  //     github_link: "#",
  //     live_preview_link: "#",
  //     language: ["HTML", "CSS", "JS"],
  //     description:
  //       "SM Marketing is a Site with smoothly animation and responsive design it used for marketing place for company like Samsung.",
  //   },
  // ];

  return (
    <div className="content">
      {/* <div id="fp-nav" className="left">
        <ul>
          <li>
            <a href="#header" className="active">
              <span></span>
            </a>
          </li>
          <li>
            <a href="#work" className="">
              <span></span>
            </a>
          </li>
          <li>
            <a href="#myskill" className="">
              <span></span>
            </a>
          </li>
          <li>
            <a href="#about" className="">
              <span></span>
            </a>
          </li>
          <li>
            <a href="#contact" className="">
              <span></span>
            </a>
          </li>
        </ul>
      </div> */}
      <div className="max-possible-width-constraint">
        {/* ******************* header ****************** */}
        <BackToTopButton />
        <div className="main">
          <div id="header" className="header">
            <TopNav />

            <div className="title hero-title">
              <span
                style={{
                  display: "block",
                  fontSize: "48px",
                  lineHeight: 1.2,
                  marginBottom: "32px",
                }}
              >
                Hi! I am{" "}
                <span style={{ color: "#726ff9" }}>Saber Mohamed.</span>
              </span>

              <span
                style={{
                  display: "block",
                  fontSize: "18px",
                  fontWeight: 400,
                  lineHeight: 1.2,
                }}
              >
                I build interactive websites and mobile app that run across
                platforms & devices
              </span>
            </div>
          </div>
        </div>
        {/* ******************* mouse scroll ************ */}
        <div className="mouse_scroll">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div>
            <span className="m_scroll_arrows unu"></span>
            <span className="m_scroll_arrows doi"></span>
            <span className="m_scroll_arrows trei"></span>
          </div>
        </div>
        {/********************* about ******************* */}
        <div id="about" className="about">
          <div className="watermark">About me</div>
          <div className="skill-header">
            <h2 className="skill-header-title">About me</h2>
          </div>
          <div className="about-container">
            <div className="about-image">
              <img src={aboutImg} alt="about me" />
            </div>
            <div className="about-content">
              <div className="section-title">
                <span className="subtitle">Who am i ?</span>
                <h2 className="title" style={{ textAlign: "left" }}>
                  I'm Saber Mohamed, a FullStack Web and Mobile Developer
                </h2>
              </div>
              <p className="description">
                I am a software developer based in Tunisia and i have been
                building applications websites for years, which bring companies
                ideas to life. I help convert a vision and an idea into
                meaningful and useful software products. Having the ability to
                transform requirements into useful software helps me proiritize
                tasks.iterate fast and deliver faster. Take a look at my
                porfolio work and let's see if we can work together on your next
                project.
              </p>
              <span className="devider"></span>
              <div className="about-info">
                <div className="info-line">
                  <span>Name:</span>
                  <span>Saber Mohamed</span>
                </div>
                <div className="info-line">
                  <span>Email:</span>
                  <span>sabermed66@gmail.com</span>
                </div>
              </div>
              <div className="info-line">
                <span>From:</span>
                <span>Mahdia, Tunisia</span>
              </div>
              <div className="about-btn">
                <button
                  className="fill-btn"
                  style={{
                    width: "fit-content",
                    borderRadius: "50px",
                    marginRight: "16px",
                    marginBottom: "16px",
                  }}
                >
                  Download Resume
                </button>
                <button
                  className="transparent-btn"
                  style={{ width: "fit-content", borderRadius: "50px" }}
                >
                  My Work
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*********************** my skill ********************* */}
        <div id="myskill" className="skill">
          <div className="watermark">My Skills</div>
          <div className="skill-header">
            <h2 className="skill-header-title">My Skills</h2>
          </div>
          <div className="skill-container">
            <div className="skill-card">
              <FrontendIcon className="skill-card-icon" />
              <h3 className="skill-card-title">Frontend Development</h3>
              <div className="skill-card-description">
                <span>HTML5</span>
                <span>CSS3</span>
                <span>Sass</span>
                <span>BootStrap</span>
                <span>Material UI</span>
                <span>JavaScript</span>
                <span>JQuery</span>
                <span>React Js</span>
                <span>React Native</span>
                <span>React/Redux</span>
                <span>Flutter</span>
              </div>
            </div>
            <div className="skill-card">
              <BackendIcon className="skill-card-icon" />
              <h3 className="skill-card-title">Backend Development</h3>
              <div className="skill-card-description">
                <span>NodeJS</span>
                <span>Express Js</span>
                <span>MongoDB</span>
                <span>MySQL</span>
                <span>SQL</span>
                <span>GrapheQL</span>
                <span>Neo4j</span>
                <span>Spring Boot</span>
                <span>Django</span>
                <span>Python</span>
                <span>Php</span>
              </div>
            </div>
            <div className="skill-card">
              <ToolsIcon className="skill-card-icon" />
              <h3 className="skill-card-title">Tools</h3>
              <div className="skill-card-description">
                <span>VS Code</span>
                <span>Android Studio</span>
                <span>IntelliJ</span>
                <span>Postman</span>
                <span>Git/Github</span>
                <span>Terminal</span>
                <span>Adobe Photoshop</span>
                <span>Adobe XD</span>
                <span>Figma</span>
                <span>Adobe illustrator</span>
              </div>
            </div>
          </div>
        </div>
        {/******************** my work ****************** */}
        <div id="work" className="work">
          <div className="watermark">My Work</div>
          <div className="skill-header">
            <h2 className="skill-header-title">My Work</h2>
          </div>
          <div className="work-container">
            <div className="work-item">
              {/******* odd ****** */}
              <div className="work-item-image">
                <img src={library} alt="Libary" />
              </div>
              <div className="work-details">
                <div className="section-title">
                  <span className="subtitle">Project</span>
                  <h2 className="title" style={{ textAlign: "left" }}>
                    SM Marketing
                  </h2>
                </div>
                <p className="description">
                  SM Marketing is a Site with smoothly animation and responsive
                  design it used for marketing place for company like Samsung.
                </p>
                <div className="devider"></div>
                <ul className="language_used">
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                  <li>PHP5</li>
                  <li>MySQL</li>
                </ul>
                <button
                  className="transparent-btn"
                  style={{ width: "fit-content", marginTop: "20px" }}
                >
                  View Project
                </button>
              </div>
            </div>
            <div className="work-item row-reverse">
              {/******* even ****** */}
              <div className="work-item-image image-reverse">
                <img src={library} alt="Libary" />
              </div>
              <div className="work-details details-reverse">
                <div className="section-title">
                  <span className="subtitle">Project</span>
                  <h2 className="title" style={{ textAlign: "left" }}>
                    SM Marketing
                  </h2>
                </div>
                <p className="description">
                  SM Marketing is a Site with smoothly animation and responsive
                  design it used for marketing place for company like Samsung.
                </p>
                <div className="devider"></div>
                <ul className="language_used">
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                  <li>PHP5</li>
                  <li>MySQL</li>
                </ul>
                <button
                  className="transparent-btn"
                  style={{ width: "fit-content", marginTop: "20px" }}
                >
                  View Project
                </button>
              </div>
            </div>
            <div className="work-item">
              {/******* odd ****** */}
              <div className="work-item-image">
                <img src={library} alt="Libary" />
              </div>
              <div className="work-details">
                <div className="section-title">
                  <span className="subtitle">Project</span>
                  <h2 className="title" style={{ textAlign: "left" }}>
                    SM Marketing
                  </h2>
                </div>
                <p className="description">
                  SM Marketing is a Site with smoothly animation and responsive
                  design it used for marketing place for company like Samsung.
                </p>
                <div className="devider"></div>
                <ul className="language_used">
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                  <li>PHP5</li>
                  <li>MySQL</li>
                </ul>
                <button
                  className="transparent-btn"
                  style={{ width: "fit-content", marginTop: "20px" }}
                >
                  View Project
                </button>
              </div>
            </div>
          </div>
        </div>

        {/*********************** contact ********************** */}
        <div id="contact" className="contact">
          <div className="contact-side">
            <div className="contact-header">
              <h1 className="contact-title">Contact Me</h1>
              <h2 className="contact-title-p">
                <p>
                  Please feel free to contact me via social media or directly by
                  filling up the form and i will respond to you as soon as i
                  can.
                </p>
              </h2>
            </div>
            <div className="contact-form">
              <div className="two-input">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input-form"
                  autoComplete="off"
                  style={{ flex: 1, marginRight: "10px" }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="off"
                  className="input-form"
                  style={{ flex: 1 }}
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                autoComplete="off"
                className="input-form"
              />
              <textarea
                name="message"
                placeholder="Leave your message..."
                autoComplete="off"
                className="input-form"
                style={{ resize: "none", paddingBottom: "60px" }}
              />
              <button className="fill-btn">Send message</button>
            </div>
          </div>
          <div className="contact-info">
            <div
              style={{
                overflow: "hidden",
                maxWidth: "350px",
                maxHeight: "350px",
              }}
            >
              <img
                src={mailing}
                alt="mailing"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  backgroundSize: "cover",
                }}
              />
            </div>
            <div className="info-container">
              <div className="info-line">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="info-line-icon"
                />
                <span>Mahdia, Tunisia</span>
              </div>
              <div className="info-line">
                <FontAwesomeIcon icon={faPhone} className="info-line-icon" />
                <span>+(216) 29 462 796</span>
              </div>
              <div className="info-line">
                <FontAwesomeIcon icon={faEnvelope} className="info-line-icon" />
                <span>sabermed66@gmail.com</span>
              </div>
              <div className="social-section">
                <ul className="social">
                  <li className="social-link">
                    <a
                      href="https://www.facebook.com/hamdi.med.1044/"
                      target="_blanc"
                    >
                      <Facebook className="social-icon" />
                    </a>
                  </li>
                  <li className="social-link">
                    <a href="https://github.com/sabermed" target="_blanc">
                      <Github className="social-icon" />
                    </a>
                  </li>
                  <li className="social-link">
                    <a
                      href="https://www.linkedin.com/in/saber-mohamed-215565182/"
                      target="_blanc"
                    >
                      <Linkedin className="social-icon" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/*********************** footer *********************** */}
        <div className="footer">
          <a href="./" className="logo">
            SM.
          </a>
          <div className="copyright">
            <p>Copyright &copy; Saber Mohamed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
