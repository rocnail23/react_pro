import { useProduct } from "../hooks/useProduct"
import { createContext, ReactElement,CSSProperties } from 'react';
import styles from "../styles/styles.module.css"
import { ContextValues, OnChangeArgs, Product } from "../interfaces/interfaces"




export const CarsContex = createContext({} as ContextValues)
const {Provider} = CarsContex

export interface ProductProps  {
  product : Product,
  children: ReactElement | ReactElement[],
  className?: string,
  style?: CSSProperties,
  onChange?: (args: OnChangeArgs) => void,
  value?: number  
}

export const ProductCars = ({product,children,className,style,onChange,value}: ProductProps) => {

  const {increaseBy,state} = useProduct({onChange,product,value})

  return (
    <Provider value={{
        product,
        increaseBy,
        state
    }}>
    <div className={`${styles.productCard} ${className}`}
    style={style}>

      {children}
    </div>
    </Provider>
  )
}


