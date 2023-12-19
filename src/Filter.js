import styles from "./Filter.module.css";

const Filter = ({ name, states, onChange }) => {
  return (
    <label className={styles.container} key={name}>
      <input
        id={name}
        type="checkbox"
        value={name}
        checked={states.includes(name)}
        onChange={onChange}
      />
      {name}
    </label>
  );
};

export default Filter;
