import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import postgresql from "../../Assets/Projects/PostegreSQL.png";
import tipe from "../../Assets/Projects/tipe.png";
import myjobglasses from "../../Assets/Projects/myjobglasses.png";
import reveasy from "../../Assets/Projects/reveasy.png";
import manuel from "../../Assets/Projects/Manuel_Utilisateur.pdf";
import mjgcertificate from "../../Assets/Projects/myjobglasses_orientation_certificate.pdf";
import pppPdf from "../../Assets/Projects/ppp.pdf";
import pppPic from "../../Assets/Projects/ppp.png";
import coverletter from "../../Assets/Projects/coverletter.pdf";
import coverletterPic from "../../Assets/Projects/coverletter.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reveasy}
              title="Learning app: RevEasy"
              description="We developed an application as part of group project that aims to enable any student to create review sheets within the application. Thus, the student can revise these sheets by utilizing quizzes generated from the information they have inputted into the files.."
              ghLink="https://github.com/PSOMSON/RevEasy"
              file={manuel}
              fileText="User Manuel"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={postgresql}
              title="A PostgreSQL Administrator"
              description="PostgreSQL Browser is a web-based PostgreSQL database admin tool written in python using Flask, HTML, CSS, JavaScript. It is a tool that will help you view your database from Heroku and edit them directly with a more friendly interface. This project was part of my final project to validate my cs50x certification."
              demoLink="https://spark.adobe.com/video/rv3QwkwFtNMfx"
              ghLink="https://github.com/Abdelmouhaimen/browser"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tipe}
              title="TIPE : Heart Rate Monitor"
              description="Supervised personal initiative project or TIPE is a common test to most entrance examinations to the Grandes Ecoles of Science. During my preparatory classes, I made a heart rate monitor as a project for my TIPE. The device measured heart rate using a technique called Photoplethysmography. I had to make the sensor using IR LED also photodiode, also I had make the electronic circuit to ensure the output contains only the alternative signal from heart pulse. Finally I did the post-processing using Arduino kit to visualise the heart rate."
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coverletterPic}
              file={coverletter}
              fileText="Cover Letter"
              title="Cover Letter"
              description="This cover letter is structured to highlight my expertise and interest in AI and Computer Vision."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pppPic}
              title="My Personal Professional Project"
              description="My Personal Professional Project is an academic or professional endeavor where I focus on developing and realizing a project that aligns with my career aspirations and interests. It involves conducting detailed research, strategic planning, and executing practical steps in a field I am deeply passionate about. This project is a platform for me to showcase my skills, innovate, and make meaningful contributions to my chosen area, fostering both my professional and personal growth. The PPP stands as a testament to my commitment and dedication to achieving a significant milestone in my professional journey."           
              file={pppPdf}
              fileText="PPP"
            />
          </Col>

                
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myjobglasses}
              title="MyJobGlasses Certificate"
              description="The certificate is a document designed by My Job Glasses to promote the approach of young people in their orientation. It attests to their ability to contact and meet mentors on the My Job Glasses mentoring tool to: find out more about a job or training | develop their professional network | expand their knowledge of an industry or company | get a professional opportunity such as an internship or work-study"           
              file={mjgcertificate}
              fileText="Certificate"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
