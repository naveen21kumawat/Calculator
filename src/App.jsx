import styles from "./App.module.css";
import ButtonsContiner from "./components/ButtonsContainer";
import Display from "./components/Display";
function App() {
  return (
    <>
      <div className={styles.calculator}>
       <Display />
       <ButtonsContiner />
      </div>
    </>
  );
}

export default App;
