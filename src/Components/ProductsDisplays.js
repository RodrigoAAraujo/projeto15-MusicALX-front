import { useContext} from "react"
import styled from "styled-components"
import { CartContext } from "../API/cart"
import {  LightBlue, LightGray,  LigthRed } from "../Settings/colors"

export function ProductsDashboard({name, image, value}){
    
}

export function ProductsDetails({name, image, value, seller, copywrite}){

}

export function ProductsCart({name, image, qtd, value, position}){
    const {cart, setCart} = useContext(CartContext)
    const total = Number(value.replace("R$", ""))*qtd 

    function removeItem(){
        const newCart = cart.filter((e, index) => index !== position)
        setCart(newCart)
    }

    return(
        <ProductCartStyle>
            <div>
                <h2>{name}</h2>
                <ion-icon name="close-circle" onClick={() =>removeItem()}></ion-icon>
            </div>
            <div>
                <img src={image}/>
                <section>
                    <h5>Subtotal:</h5>
                    <h3><span>R$</span>{total}</h3>
                </section>

            </div>
        </ProductCartStyle>
    )
}

const ProductCartStyle = styled.div`
    min-height: 100px;
    width: 100%;
    background-color: ${LightGray};
    padding: 10px;
    margin: 10px 0px;
    border-radius: 5px;

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        section{
            align-self: flex-end;
            flex-direction: column;
        }
        ion-icon{
            font-size: 20px;
            cursor: pointer;
            color: ${LigthRed};
        }
    }

    img{
        aspect-ratio: 1;
        object-fit: cover;
        border-radius: 10px;
        width: 60%;
    }

    h2{
        font-size: 20px;
        font-weight: 500;
        overflow-x: hidden;
        word-break: break-all;

    }
    h3{
        margin-top: 2px;
        font-size: 18px;

        span{
            font-size: 14px;
            font-weight: 400;
        }
    }
    h5{
        color: ${LightBlue};
        font-size: 14px;
        font-weight: 500;
        align-self: flex-start;
    }

`