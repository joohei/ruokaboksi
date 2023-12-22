import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";
import ClipboardJS from "clipboard";
import classNames from "classnames";
import data from "./data.json";
import styles from "./Recipe.module.css";

const Recipe = () => {
  const params = new URLSearchParams(window.location.search);
  const param = params.get("title");
  const { url, title, image, excerpt, ingredients, instructions, tags } =
    data.find((course) => course.title === param);

  const [success, setSuccess] = useState(false);

  const copy = () => {
    new ClipboardJS("#copy", {
      text: () => tags.join("\n"),
    });
    setSuccess(true);
    setTimeout(() => setSuccess(false), 300);
  };

  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.title}>{title}</p>
        <img
          className={styles.image}
          src={
            image ||
            "https://via.placeholder.com/1160x560.png?text=Kuva+puuttuu"
          }
          alt={excerpt}
          width="1160"
          height="560"
          onClick={handleClick}
        />
        <p className={styles.excerpt}>{excerpt}</p>
      </div>
      <div className={styles.footer}>
        <div className={styles.ingredients}>
          <div className={styles.title}>
            <p>Ainesosat</p>
            <FaCopy
              id="copy"
              className={classNames(styles.copy, { [styles.success]: success })}
              onClick={copy}
            />
          </div>
          <ul className={styles.list}>
            {ingredients.map((tag, index) => (
              <React.Fragment key={index}>
                <li>{tag}</li>
                <hr />
              </React.Fragment>
            ))}
          </ul>
        </div>
        <div className={styles.steps}>
          <p className={styles.title}>Ohjeet</p>
          <ul className={styles.list}>
            {instructions.map((instruction, index) => (
              <React.Fragment key={index}>
                <li>{instruction}</li>
                <hr />
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Recipe;
