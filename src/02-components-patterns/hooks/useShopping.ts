import { useState } from 'react';
import { CartProduct, Product } from '../interfaces/interfaces';

interface Cart {
    [key:string]:CartProduct
  }

export const useShopping = (initialValue:Cart) => {
   
    const [cart,setCart] = useState(initialValue)
    const handleCount = ({count,product}:{product:Product,count:number}) => {

        
    
        const productInCart:CartProduct = cart[product.id] || {...product, count: 0}
    
        setCart(old => {
    
          if(Math.max(count + productInCart.count, 0) > 0){
            console.log("hola")
            productInCart.count += count
      
            return {
              ...cart,
              [product.id]: productInCart
            }
          }
    
          const {[product.id]:toDelete,...args} = old
    
          return args
        })
        
        /* setCart(oldCart => {
    
          if(count == 0){
            
            const {[product.id]:toDelete,...args} = oldCart
    
            return args
            
          }
    
          return {
            ...cart,
            [product.id]: {...product,count}
          }
    
        }) */
    
      }

      return {
        handleCount,
        cart
      }
}