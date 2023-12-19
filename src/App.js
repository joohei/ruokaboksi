import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Filters from "./Filters";
import Toolbar from "./Toolbar";
import Recipe from "./Recipe";
import Card from "./Card";
import tags from "./tags.json";
import data from "./data.json";
import styles from "./App.module.css";

const App = () => {
  const [open, setOpen] = useState(false);
  const [results, setResults] = useState(data);
  const [filters, setFilters] = useState([]);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    if (filters.includes(value)) {
      setFilters(filters.filter((filter) => filter !== value));
    } else {
      setFilters([...filters, value]);
    }
  };

  useEffect(() => {
    const filter = (course) => {
      if (filters.length === 0) {
        return true;
      }
      return filters.every((filter) => course.tags.includes(filter));
    };
    setResults(data.filter(filter));
  }, [filters]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className={styles.body}>
            <Filters
              name="Ainesosat"
              filters={tags}
              open={open}
              states={filters}
              onChange={handleChange}
            />
            <div className={styles.container}>
              <Toolbar
                number={results.length}
                maximum={data.length}
                handleClick={handleClick}
              />
              <div className={styles.cards}>
                {results.map((course, index) => (
                  <Card key={index} {...course} />
                ))}
              </div>
            </div>
          </div>
        }
      />
      <Route path="/recipe" element={<Recipe />} />
    </Routes>
  );
};

export default App;
