/**
 * Portfolio component
 *
 * Highlights some of your creations. These can be designs, websites,
 * open source contributions, articles you've written, and more.
 *
 * This is a great area for you to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to a string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/developer-8829735_1280.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is updated to reflect your portfolio projects and contributions.
 */
const projectList = [
  {
    title: "Online Auction System",
    description:
      "Developed an interactive Online Auction System where users can bid on items in real-time. The project involved creating user authentication, auction management, and an intuitive UI for a seamless bidding experience.",
    url: "https://github.com/Abhijit788/Auction-System.git", // Replace with actual GitHub link if available
  },
  {
    title: "DeepFake Detect UI Design",
    description:
      "Designed a modern UI/UX for a DeepFake Detection platform with intuitive navigation and functionality, including a home page for feature highlights, a drag-and-drop upload section, and result visualization.",
    url: "https://www.figma.com/design/d7YY2BvrK0DzRqT1LwI0In/DeepFake-Detect?node-id=0-1&t=VVm1UnMj24GuRtUq-1", // Replace with actual GitHub link if available
  },
  {
    title: "Rainfall Prediction (using ARIMA and Prophet model)",
    description:
      "Implemented time-series analysis to predict rainfall patterns using ARIMA and Prophet models, providing accurate forecasting insights for agricultural planning and resource management.",
    url: "https://github.com/Abhijit788/Rainfall-Prediction.git", // Replace with actual URL if available
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
