import Card from "./Card";
import data from "./data.json";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.container}>
      {data.map((course, i) => (
        <Card key={i} {...course} />
      ))}
    </div>
  );
};

export default App;
