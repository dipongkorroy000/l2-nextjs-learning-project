import { Metadata } from "next";
import styles from "./about.module.css";

export const metadata : Metadata = { title: "about us" , description: "this is about us page" };

const AboutPage = () => {
  return (
    <div>
      <h1 className={styles.text_style}>About Custom css</h1>
    </div>
  );
};

export default AboutPage;
