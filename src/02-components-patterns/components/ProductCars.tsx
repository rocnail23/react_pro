import { useProduct } from "../hooks/useProduct"
import { createContext } from "react"
import styles from "../styles/styles.module.css"
import { ContextValues ,ProductProps } from "../interfaces/interfaces"
import { ProductButtons, ProductImage, ProductTitle } from "."



export const CarsContex = createContext({} as ContextValues)
const {Provider} = CarsContex


export const ProductCars = ({product,children}: ProductProps) => {

  const {increaseBy,state} = useProduct()

  return (
    <Provider value={{
        product,
        increaseBy,
        state
    }}>
    <div className={styles.productCard}>

      {children}
    </div>
    </Provider>
  )
}


