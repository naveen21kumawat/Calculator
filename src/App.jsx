import styles from "./App.module.css";
import ButtonsContiner from "./components/ButtonsContainer";
import Display from "./components/Display";
import { useState } from "react";
function App() {
  const [displayValue, setDisplayValue] = useState("");
  
  const onButtonClicked = (buttonText) => {
    if (buttonText === "C") {
      setDisplayValue("");
    } else if (buttonText === "=") {
      const result = eval(displayValue);
      setDisplayValue(result);
    } else {
      const newValue = displayValue + buttonText;
      setDisplayValue(newValue);
    }
  };
  return (
    <>
      <div className={styles.calculator}>
        <Display displayValue={displayValue} />
        <ButtonsContiner onButtonClicked={onButtonClicked} />
      </div>
    </>
  );
}

export default App;
