import { ReactElement } from "react"

export interface ContextValues {
    product:Product,
    increaseBy: (value: number) => void,
    state: number
}


 export interface Product {
     id: number,
     title: string,
     image?: string
 }

 export interface OnChangeArgs {
    product: Product,
    count: number
 }

 export interface CartProduct extends Product {
    count:number
  }
  