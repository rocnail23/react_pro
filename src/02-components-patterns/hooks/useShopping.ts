import { useState } from 'react';
import { CartProduct, Product } from '../interfaces/interfaces';

interface Cart {
    [key:string]:CartProduct
  }

export const useShopping = (initialValue:Cart) => {
   
    const [cart,setCart] = useState(initialValue)
    
    const handleCount = ({count,product}:{product:Product,count:number}) => {

        
    
        setCart(oldCart => {
    
          if(count == 0){
            
            const {[product.id]:toDelete,...args} = oldCart
    
            return args
            
          }
    
          return {
            ...cart,
            [product.id]: {...product,count}
          }
    
        })
    
      }

      return {
        handleCount,
        cart
      }
}