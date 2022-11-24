import { createContext, useState } from "react"

export const CartContext = createContext({})

export const CartProvider = (props)=>{
    //Simulation
    const [cart, setCart] = useState([
        {name: "Piano",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTlCPuSo71B_u3lH9KOgyPZqeeoe3-wqdQBUFGKGo8xplGygPt6p3JNhd05gyQ1&usqp=CAc",
        qtd: 5,
        value: "R$402.21"},
        {name: "Piano2",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTlCPuSo71B_u3lH9KOgyPZqeeoe3-wqdQBUFGKGo8xplGygPt6p3JNhd05gyQ1&usqp=CAc",
        qtd: 5,
        value: "R$402.21"}, 
        {name: "Piano3",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTlCPuSo71B_u3lH9KOgyPZqeeoe3-wqdQBUFGKGo8xplGygPt6p3JNhd05gyQ1&usqp=CAc",
        qtd: 5,
        value: "R$402.21"},
    ])

    return(
        <CartContext.Provider value={{cart, setCart}}>
            {props.children}
        </CartContext.Provider>
    )
}