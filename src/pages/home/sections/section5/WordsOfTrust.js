import React, { useState, useEffect } from "react";
import BackgroundVector from "../../../../assets/images/home/vector2.png";
import backgroundStyles from "./../BackgroundStyles.module.css";
import styles from "./WordsOfTrust.module.css";
import ButtonPrimary from "../../../../component/elements/button/ButtonPrimary";
import "@splidejs/react-splide/css";

import { Splide, SplideSlide } from "@splidejs/react-splide";

const WordsOfTrust = () => {
  return (
    <div className={backgroundStyles.section1Container}>
      <div>
        <img
          className={backgroundStyles.backgroundImage}
          src={BackgroundVector}
        />
      </div>
      <div className={backgroundStyles.contentContainer}>
        <div className={styles.contentSubContainer}>
          <p className={styles.title}>
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
      </div>
    </div>
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
