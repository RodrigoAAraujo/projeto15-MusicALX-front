import { useContext} from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { CartContext } from "../API/cart"
import { UserContext } from "../API/user"
import {  LightBlue, LightGray,  LigthRed, White } from "../Settings/colors"

export function ProductsDashboard({_id, product, image, value}){
    const navigate = useNavigate()
    const {user} = useContext(UserContext)

    return(
        <ProductDashStyle onClick={() =>navigate(`/${user.user.name}/produtos/${_id}`)}>
            <div>
                <h2>{product}</h2>
            </div>
            <div>
                <img src={image}/>
                <h3>{value}</h3>
            </div>
        </ProductDashStyle>
    )
    
}

export function ProductsDetails({product, image, value, seller, copywrite, qtd, type}){
    return(
        <ProductDetailStyle>      
            <img src={image}/>
            <div className="info">
                <h2>{product}</h2>

                <section>
                    <h4>Informações do produto</h4>
                    
                    <p>Vendedor: {seller}</p>
                    <p>Estoque: {qtd}</p>
                    <p>Categoria: {type}</p>

                </section>
                <h3> Preço Unitário: {value}</h3>
            </div>
        </ProductDetailStyle>
    )
}

export function ProductsCart({product, image, qtd, value, position}){
    const {cart, setCart} = useContext(CartContext)
    let total = Number(value.replace("R$", "").replace(".", "").replace(",", ".").trim())*qtd 

    function removeItem(){
        const newCart = cart.filter((e, index) => index !== position)
        setCart(newCart)
    }

    return(
        <ProductCartStyle>
            <div>
                <h2>{product}</h2>
                <ion-icon name="close-circle" onClick={() =>removeItem()}></ion-icon>
            </div>
            <div>
                <img src={image}/>
                <section>
                    <h5>Subtotal:</h5>
                    <h3><span>R$</span>{total.toFixed(2)}</h3>
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

const ProductDetailStyle = styled.div`
    padding: 15px;
    margin: 10px 0px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    max-width: 1100px;
    width: 60%;

    @media (max-width: 1080px){
        margin-left: 45px;
        width: 100%;
    }
    @media (max-width: 500px){
        flex-direction: column;
        padding: 0px;
    }

    .info{
        width: 90%;
        margin-left: 20px;

        @media(max-width:500px){
            margin: auto;
        }
    }

    div{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin: 0px 10px;
        width: 50%;
        

        section{
            display: flex;
            flex-direction: column;
            padding: 5px 0px;
            align-items: flex-start;
            border-top: 1px solid ${LightGray};
            border-bottom: 1px solid ${LightGray};
            width: 100%;
            margin: 20px 0px;
            h4{
                font-size: 24px;
                font-weight: 500;

            }
            p{
                margin: 5px 0px;
            }
        }
    }

    img{
        object-fit: cover;
        border-radius: 10px;
        aspect-ratio: 1;
        width: 50%;
    }

    h2{
        font-size: 20px;
        font-weight: 500;
    }
    h3{
        font-size: 18px;
        align-self: flex-end;
    }
`

const ProductDashStyle = styled.div`
    background-color: ${White};
    padding: 8px;
    margin: 10px 0px;
    border-radius: 5px;
    margin: 6px;
    cursor: pointer;
    width: 160px;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }

    img{
        object-fit: cover;
        border-radius: 10px;
        width: 60%;
        aspect-ratio: 1.2;
    }

    h2{
        font-size: 20px;
        font-weight: 500;
        overflow-x: hidden;
        word-break: break-all;
        margin-bottom: 4px;
        align-self: flex-start;

    }
    h3{
        width: 40%;
        margin-top: 6px;
        font-size: 15px;
        align-self: flex-start;
    }
`