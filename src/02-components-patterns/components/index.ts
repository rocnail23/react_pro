import { ProductImage } from ".";
import { ProductButtons } from ".";
import { ProductTitle } from ".";
import { ProductCarsHoc } from ".";


export { ProductButtons  } from "./ProductButtons";
export { ProductCars as ProductCarsHoc } from "./ProductCars";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";

export const ProductCars = Object.assign(ProductCarsHoc,{
    title: ProductTitle,
    image: ProductImage,
    buttons: ProductButtons
})

export default ProductCars