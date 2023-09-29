import ProductCars, { ProductButtons, ProductImage, ProductTitle } from "../components"
import "../styles/custom-class.css"

const product = {
  id: 1,
  title: "coffe Mug",
  image: "./coffee-mug.png"
}

const ShoppingStore = () => {
  return (
    <div >
    <h1>ShoppingStore</h1>
    <hr />
    <div style={{display:"flex", flexDirection:"row",flexWrap:"wrap" , height:"100px"}}>
    <ProductCars product={product}
    className="bg-dark">
      <ProductCars.image className="customImages"/>
      <ProductCars.title className="text-white"/>
      <ProductCars.buttons className="custom-buttons" />
    </ProductCars>

    <ProductCars 
    product={product}
    className="bg-dark">
    <ProductImage className="customImages"/>
    <ProductTitle className="text-white"/>
    <ProductButtons className="custom-buttons"/> 
    </ProductCars>

    <ProductCars 
    product={product}
    style={{backgroundColor:"turquoise"}}
    >
    <ProductImage />
    <ProductTitle />
    <ProductButtons/> 
    </ProductCars>


    </div>





    </div>
  )
}

export default ShoppingStore