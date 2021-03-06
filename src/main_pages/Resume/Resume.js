import React, { useEffect } from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar.js";
import Footer from "../../components/Footer/Footer.js";
import "./Resume.css";
import "../../index.css";
import { Button } from "react-bootstrap";
import resume_png from "../../images/ChrisCohen_resume.png";
import GetAppIcon from "@material-ui/icons/GetApp";
import { useWindowDimensions } from "../../helper_functions";

export default function Resume() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let { width } = useWindowDimensions();

  return (
    <div className="background">
      <NavigationBar />
      <div className="resumeStyle">
        <a
          href={process.env.PUBLIC_URL + "files/ChrisCohen_resume.pdf"}
          download="ChrisCohen_resume"
        >
          <Button className="downloadButton">
            Download Resume
            <GetAppIcon />
          </Button>
        </a>
        <div className="resume">
          <img src={resume_png} width={width} height="auto" alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
