import { FaFilter } from "react-icons/fa";
import styles from "./Toolbar.module.css";

const Toolbar = ({ number, maximum, handleClick }) => {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={handleClick}>
        <FaFilter /> Suodata
      </button>
      <p>
        Löydetty {number} / {maximum} resepti(ä)
      </p>
    </div>
  );
};

export default Toolbar;
