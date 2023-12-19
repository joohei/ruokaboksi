import styles from "./Card.module.css";

const Card = ({ title, image, excerpt }) => {
  const handleClick = () => {
    const params = new URLSearchParams({ title });
    window.open("/recipe?" + params, "_self");
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <p className={styles.title}>{title}</p>
      <img
        className={styles.image}
        src={image}
        alt={excerpt}
        width="1160"
        height="560"
      ></img>
    </div>
  );
};

export default Card;
