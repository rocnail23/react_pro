import { useContext } from "react"
import styles from "../styles/styles.module.css"
import { CarsContex } from "./ProductCars"

export const ProductTitle = ({title}:{title?:string}) => {

    const {product} = useContext(CarsContex)

    const titleShow: string = title ? title : product.title ? product.title : ""

    return (
        <span className={styles.productDescription}>{titleShow}</span>
    )
}