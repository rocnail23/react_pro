import ProductCars from "../components"



const product = {
  id: 1,
  title: "coffe Mug",
  image: "./coffee-mug.png"
}

const ShoppingStore = () => {
  return (
    <div>
    <h1>ShoppingStore</h1>
    <hr />
    <ProductCars product={product}>
      <ProductCars.image/>
      <ProductCars.title/>
      <ProductCars.buttons />
    </ProductCars>
    </div>
  )
}

export default ShoppingStore