import { useContext } from "react"
import noImage from "../assets/no-image.jpg"
import styles from "../styles/styles.module.css"
import { CarsContex } from "./ProductCars"

export const ProductImage = ({image}:{image?:string}) => {

    const {product} = useContext(CarsContex)
    let ImageShow: string =   image ? image : product.image ? product.image : noImage

    return (
        <img className={styles.productImg} src={ImageShow} alt="coffe mug" />
    )
}