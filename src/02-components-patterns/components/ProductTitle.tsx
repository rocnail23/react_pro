import { useContext, CSSProperties } from 'react';
import styles from "../styles/styles.module.css"
import { CarsContex } from "./ProductCars"

export const ProductTitle = ({title,className,style}:{title?:string,className?:string,style?: CSSProperties}) => {

    const {product} = useContext(CarsContex)

    const titleShow: string = title ? title : product.title ? product.title : ""

    return (
        <span className={`${styles.productDescription} ${className}`}
        style={style}>{titleShow}</span>
    )
}