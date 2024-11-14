/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/ai-generated-8520972_1280.png";

const imageAltText = "purple and blue abstract background";

/**
 * Short description that expands on your title on the Home component.
 */
const description =
  "I'm Abhijit Arote, a third-year IT engineering student and Design Co-head at the Geeks for Geeks club. I enjoy creating intuitive and visually appealing user interfaces, focusing on simplicity and user-centered design.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy.
 */
const skillsList = [
  "UI/UX design",
  "Web design",
  "Frontend development",
  "Inclusive design",
  "Graphic design",
  "Adobe Illustrator (beginner)",
  "Adobe Photoshop (beginner)",
  "Canva",
  "Figma",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "As a fast learner and problem-solver, I’m passionate about crafting solutions that combine creativity with usability. My experience as a GFG Design Co-head has honed my ability to create impactful visuals while collaborating closely with teams to bring ideas to life.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
