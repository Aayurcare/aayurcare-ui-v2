import React, { useState, useEffect } from "react";
import styles from "./WordsOfTrust.module.css";
import { SectionContainerLeft } from "../SectionContainer";
import Flickity from "react-flickity-component";

const WordsOfTrust = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 650);
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth < 650);
    });
  }, []);

  const flickityOptions = {
    initialIndex: 1,
    wrapAround: true,
    autoPlay: 4000, // milliseconds
    pageDots: true,
    prevNextButtons: false,
    freeScroll: true,
  };

  return (
    <SectionContainerLeft>
      <div className={styles.contentSubContainer}>
        <p className="title-home">
          Words of Trust and Satisfaction:
          <br />
          <span className="text-blue">Testimonials.</span>
        </p>
        <Flickity options={flickityOptions}>
          <TestimonialCard
            name={"Sam"}
            comment={
              "Quick Responses from Support - I had a technical issue once, and their support team resolved it promptly. Excellent customer service!."
            }
          />
          <TestimonialCard
            name={"Ancy"}
            comment={
              "I'm not technically minded, but Ayur Care is very easy to use. my health"
            }
          />
          <TestimonialCard
            name={"Sanal Das"}
            comment={
              "This healthcare plan is a game-changer! The website made everything clear and simple. My family's health is now in safe hands."
            }
          />
        </Flickity>
        {/* <section
          className={styles.testimonies + " caruosel"}
          data-flickity='{ "wrapAround": true }'
        >
          <TestimonialCard
            name={"One"}
            comment={
              "Quick Responses from Support - I had a technical issue once, and their support team resolved it promptly. Excellent customer service!."
            }
          />
          <TestimonialCard
            name={"Rahul"}
            comment={
              "Quick Responses from Support - I had a technical issue once, and their support team resolved it promptly. Excellent customer service!."
            }
          />
          <TestimonialCard
            name={"Rahul"}
            comment={
              "Quick Responses from Support - I had a technical issue once, and their support team resolved it promptly. Excellent customer service!."
            }
          />
        </section> */}
        {/* <section className={styles.testimonies}>
          <Flickity
            className={styles.flickityContainer} // Apply custom class to Flickity component
            elementType={"div"} // default 'div'
            // options={flickityOptions} // Flickity options object
            disableImagesLoaded={false} // default false
            reloadOnUpdate={true} // default false
            static={false} // default false
          >
            <TestimonialCard
              name={"One"}
              comment={
                "Quick Responses from Support - I had a technical issue once, and their support team resolved it promptly. Excellent customer service!."
              }
            />
            <TestimonialCard
              name={"Rahul"}
              comment={
                "Quick Responses from Support - I had a technical issue once, and their support team resolved it promptly. Excellent customer service!."
              }
            />
            <TestimonialCard
              name={"Rahul"}
              comment={
                "Quick Responses from Support - I had a technical issue once, and their support team resolved it promptly. Excellent customer service!."
              }
            />
          </Flickity>
        </section> */}
      </div>
    </SectionContainerLeft>
  );
};

const TestimonialCard = ({ name, comment }) => {
  return (
    <div className={styles.testimonialCard + " caruosel-cell"}>
      <p className={styles.testimonialComment}>{comment}</p>
      <h6 className={styles.testimonialName}>{name}</h6>
    </div>
  );
};

export default WordsOfTrust;
