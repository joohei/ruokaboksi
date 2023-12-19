import { useEffect, useState } from "react";
import classNames from "classnames";
import Filter from "./Filter";
import styles from "./Filters.module.css";

const Filters = ({ name, filters, open, states, onChange }) => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState(filters);

  useEffect(() => {
    const regex = new RegExp(search, "i");
    const filtered = filters.filter((filter) => regex.test(filter));
    setResults(filtered);
  }, [filters, search]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className={classNames(styles.container, open && styles.open)}>
      <div className={styles.header}>
        <p className={styles.title}>{name}</p>
        <input
          className={styles.search}
          id="search"
          type="search"
          placeholder="Hae..."
          onChange={handleChange}
          value={search}
        />
      </div>
      <div className={styles.filters}>
        {results.map((filter) => (
          <Filter
            key={filter}
            name={filter}
            states={states}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  );
};

export default Filters;
