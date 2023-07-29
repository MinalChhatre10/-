import React from "react";
import styles from "./page.module.css";
import Button from "@/components/buttons/button";
import Image from "next/image";
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
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            At Digital Storytellers, we believe in the power of creativity and
            technology to make a difference. We are a team of passionate
            individuals who come together to create innovative and impactful
            digital experiences.
            <br />
            <br />
            Our mission is to tell compelling stories through various digital
            mediums, from stunning visuals to interactive websites and engaging
            mobile apps. We take pride in crafting experiences that leave a
            lasting impression on our audience.
            <br />
            <br />
            With a strong focus on creativity and user experience, we strive to
            bring your ideas to life and elevate your digital presence to new
            heights. Join us on this journey of exploration and transformation
            as we combine technology and storytelling to make a positive impact.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            At Digital Storytellers, our expertise lies in creating a wide range
            of digital solutions tailored to your needs:
            <br />
            <br /> - Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
