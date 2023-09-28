import { useContext } from "react"
import styles from "../styles/styles.module.css"
import { CarsContex } from "./ProductCars"

export const ProductButtons = () => {

    const {increaseBy,state} = useContext(CarsContex)

    return (
        <div className={styles.buttonsContainer}>

            <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>-</button>

            <div className={styles.countLabel}>{state}</div>

            <button className={styles.buttonAdd} onClick={() => increaseBy(1)}>+</button>

       </div>
    )
}
