import { useContext, CSSProperties } from 'react';
import noImage from "../assets/no-image.jpg"
import styles from "../styles/styles.module.css"
import { CarsContex } from "./ProductCars"

interface Props {
    image?: string,
    className?: string,
    style?: CSSProperties
}

export const ProductImage = ({image,className,style}:Props) => {

    const {product} = useContext(CarsContex)
    let ImageShow: string =   image ? image : product.image ? product.image : noImage

    return (
        <img className={`${styles.productImg} ${className}`} src={ImageShow} alt="coffe mug" 
        style={style}/>
    )
}