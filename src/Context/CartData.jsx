import React from 'react'
import { createContext } from 'react'


const Cart=createContext();

const CartData = ({children}) => {
  return <>
    <Cart.Provider>
      {children}
    </Cart.Provider>
  
  </>
}

export default CartData