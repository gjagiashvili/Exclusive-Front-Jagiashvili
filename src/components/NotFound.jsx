import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import styles from "../modules/NotFound.module.scss";
import Footer from "./Footer";
const NotFound = () => {
  return (
    <>
      <Header />
      <div className={styles["notFound-container"]}>
        <h1 className={styles["title"]}>404 Not Found</h1>
        <p className={styles["message"]}>Your visited page was not found.</p>
        <Link to="/" className={styles["link"]}>
          Back to home page
        </Link>
        <Footer />
      </div>
    </>
  );
};

export default NotFound;
