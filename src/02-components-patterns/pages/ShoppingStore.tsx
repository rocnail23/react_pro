import ProductCars from "../components"
import "../styles/custom-class.css"
import { useShopping } from "../hooks/useShopping";
import { products } from "../data/products";







const ShoppingStore = () => {

  const {cart,handleCount} = useShopping({})

  const newValue = Object.values(cart)
  
  return (
    <div >
    <h1>ShoppingStore</h1>
    <hr />
    <div style={{display:"flex", flexDirection:"row",flexWrap:"wrap" , height:"100px"}}>
    
    {products.map(product => (
        <ProductCars product={product}
        className="bg-dark"
        onChange={handleCount}
        value={cart[product.id]?.count || 0}>
          <ProductCars.image className="customImages"/>
          <ProductCars.title className="text-white"/>
          <ProductCars.buttons className="custom-buttons" />
        </ProductCars>
    ))}
    

    <div className="shopping-cart">

    {newValue.map(product => (

<ProductCars product={product}
className="bg-dark"
style={{width:"100px"}}
onChange={handleCount}
value={product.count}>
  <ProductCars.image className="customImages"/>
  <ProductCars.title className="text-white"/>
  <ProductCars.buttons className="custom-buttons" />
</ProductCars>

    ))}

   
      
    </div>
    </div>
    </div>
  )
}

export default ShoppingStore