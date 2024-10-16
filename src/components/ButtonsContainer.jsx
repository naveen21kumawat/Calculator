import styles from './ButtonsContainer.module.css'
function ButtonsContainer() {
  const buttonNames=['c','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
  return (
    <div className={styles.buttonContainer}>
      {
        buttonNames.map(name=> <button key={name}className={styles.button}>{name}</button>
      )
      }
 
  </div>
  )
}

export default ButtonsContainer