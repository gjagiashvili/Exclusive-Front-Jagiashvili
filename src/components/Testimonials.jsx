import React from "react";
import styles from "../modules/Testimonials.module.scss";
import icon1 from "../assets/Icon1.png";
import icon2 from "../assets/Icon2.png";
import icon3 from "../assets/Icon3.png";

const Testimonials = () => {
  return (
    <div className={styles["testimonials-container"]}>
      <div className={styles["testimonial"]}>
        <div className={styles["testimonial-icon"]}>
          <div className={styles["inner-circle"]}>
            <img src={icon1} />
          </div>
        </div>
        <div className={styles["testimonial-header"]}>Free & Fast Delivery</div>
        <div className={styles["testimonial-text"]}>
          Free delivery for all orders over $140
        </div>
      </div>

      <div className={styles["testimonial"]}>
        <div className={styles["testimonial-icon"]}>
          <div className={styles["inner-circle"]}>
            <img src={icon2} />
          </div>
        </div>
        <div className={styles["testimonial-header"]}>
          24/7 Customer Service
        </div>
        <div className={styles["testimonial-text"]}>
          Friendly 24/7 customer support
        </div>
      </div>

      <div className={styles["testimonial"]}>
        <div className={styles["testimonial-icon"]}>
          <div className={styles["inner-circle"]}>
            <img src={icon3} />
          </div>
        </div>
        <div className={styles["testimonial-header"]}>Money Back Guarantee</div>
        <div className={styles["testimonial-text"]}>
          We reurn money within 30 days
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
