import { createContext, useState } from "react"

export const CartContext = createContext({})

export const CartProvider = (props)=>{
    //Simulation
    const [cart, setCart] = useState([])

    return(
        <CartContext.Provider value={{cart, setCart}}>
            {props.children}
        </CartContext.Provider>
    )
}