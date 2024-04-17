import React, { useState, useEffect } from "react";
import styles from "./WordsOfTrust.module.css";
import "@splidejs/react-splide/css";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { SectionContainerLeft } from "../SectionContainer";

const WordsOfTrust = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 650);
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth < 650);
    });
  }, []);

  return (
    <SectionContainerLeft>
      <div className={styles.contentSubContainer}>
        <p className="title-home">
          Words of Trust and Satisfaction:
          <br></br>
          <span className="text-blue">Testimonials.</span>
        </p>
        <section className={styles.testimonies}>
          <Splide
            options={{
              padding: {
                left: "20%", // Adjust left padding as needed
                right: "20%", // Adjust right padding as needed
              },
              autoplay: true, // Enable auto scroll
              interval: 2000, // Set auto scroll interval in milliseconds
              infinite: true, // Enable infinite scroll
              start: 1, // Set default index to 1
              rewind: true,
              arrows: false,
            }}
            style={{ background: "red" }} // Apply inline style directly here
          >
            <SplideSlide>
              <TestimonialCard
                name={"One"}
                comment={
                  "Quick Responses from Support - I had a technical issue once, and their support team resolved it promptly. Excellent customer service!."
                }
              />
            </SplideSlide>
            <SplideSlide>
              <TestimonialCard
                name={"Rahul"}
                comment={
                  "Quick Responses from Support - I had a technical issue once, and their support team resolved it promptly. Excellent customer service!."
                }
              />
            </SplideSlide>
            <SplideSlide>
              <TestimonialCard
                name={"Rahul"}
                comment={
                  "Quick Responses from Support - I had a technical issue once, and their support team resolved it promptly. Excellent customer service!."
                }
              />
            </SplideSlide>
          </Splide>
        </section>
      </div>
    </SectionContainerLeft>
  );
};

const TestimonialCard = ({ name, comment }) => {
  return (
    <section className={styles.testimonialCard}>
      <p className={styles.testimonialComment}>{comment}</p>
      <h6 className={styles.testimonialName}>{name}</h6>
    </section>
  );
};

export default WordsOfTrust;
