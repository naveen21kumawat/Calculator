import styles from "./ButtonsContainer.module.css";
// eslint-disable-next-line react/prop-types
function ButtonsContainer({onButtonClicked}) {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonContainer}>
      {buttonNames.map((name) => (
        <button key={name} className={styles.button} onClick={()=>onButtonClicked(name)}>
          {name}
          
        </button>
      ))}
    </div>
  );
}

export default ButtonsContainer;
