import React from "react";
import styles from "./page.module.css";
import Button from "@/components/buttons/button";
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
      </div>
      <div className="imgText">
        <h1 className="imgTitle">Digital Storytellers</h1>
        <h2 className="imgDesc">
          Handcrafting award winning digital experiences.
        </h2>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1>Who we are?</h1>
          <p>
            //suggest here para of 2-3 lines each three para should be there{" "}
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What we do?</h1>
          <p>
            //suggest here para of 2-3 lines each three para should be there
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
