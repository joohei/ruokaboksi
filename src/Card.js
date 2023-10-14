import { useState } from "react";
import styles from "./Card.module.css";

const Card = ({ major, minor, file, name, rate, tags }) => {
  const [labels, setLabels] = useState(tags);

  const handleClick = () => {
    console.log(labels);
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={styles.header}>
        <div className={styles.rate}>
          {"★".repeat(rate) + "☆".repeat(5 - rate)}
        </div>
        <div className={styles.mark}>
          {major}.{minor}
        </div>
      </div>
      <p className={styles.title}>{name}</p>
      <img
        className={styles.image}
        src={file}
        alt={name}
        width="1720"
        height="2400"
      ></img>
    </div>
  );
};

export default Card;
