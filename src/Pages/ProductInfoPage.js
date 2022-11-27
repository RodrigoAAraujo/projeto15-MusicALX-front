import userEvent from "@testing-library/user-event"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import { CartContext } from "../API/cart"
import { UserContext } from "../API/user"
import NavbarUp from "../Components/NavbarUp"
import { ProductsDetails } from "../Components/ProductsDisplays"
import SideBar from "../Components/SideBar"
import { LightBlue, White } from "../Settings/colors"
import { BackEnd_Products } from "../Settings/urls"

export default function ProductInfoPage() {
    const { idProduto } = useParams()

    const [product, setProduct] = useState(null)

    const { user, setUser } = useContext(UserContext)
    const { cart, setCart } = useContext(CartContext)

    const navigate = useNavigate()

    const [qtd, setQtd] = useState(1)
    const [options, setOptions] = useState([])

    useEffect(() => {
        if (localStorage.getItem("user")) {
            const data = JSON.parse(localStorage.getItem("user"))

            setUser(data)

            axios.get(`${BackEnd_Products}/${idProduto}`, { headers: { Authorization: `Bearer ${data.token}` } })
                .then(res => {
                    setProduct(res.data)
                    optionConfig(res.data.qtd)
                })
                .catch(err => {
                    console.log(err)
                })

              
            
        } else {
            navigate("/")
        }
    }, [])


    function optionConfig(e){
        const array = []

        for(let i = 1; i <= e; i++){
            array.push(i)
        }
        setOptions(...options, array)
    }

    function adicionarCarrinho(e){
        e.preventDefault()

        const body = {
            id: product._id,
            product: product.product,
            qtd: qtd,
            value: product.value,
            image: product.image
        }

        if(cart.find(e => e.id === body.id) !== undefined){
            const index = cart.find(e => e.id === body.id)
            const position = cart.indexOf(index)

            const current = cart[position].qtd
            const summed = current + qtd
            body.qtd = summed

            const newCart = cart
            let tempo = newCart[position]
            newCart[position] = newCart[newCart.length - 1]
            newCart[newCart.length - 1] = tempo
            
            newCart.pop()
            newCart.push(body)

            console.log(newCart)

            setCart(newCart)
        }else{
            console.log(cart)
            setCart([...cart, body])
        }
        
    }

    return (
        <InfoStyle>
            <NavbarUp />
            <SideBar />
            <section>
                {product === null ?
                    null :
                    <>
                        <ProductsDetails product={product.product} image={product.image} value={product.value} seller={product.seller}
                        copywrite={product.copy} qtd={product.qtd} type={product.type} />

                        <form onSubmit={(e) => adicionarCarrinho(e)}>
                            <select onChange={(e) => setQtd(e.target.value)} value={qtd} >
                                {options.map((o) => <option>{o}</option>)}
                            </select>
                            <button type="submit">Adicionar ao carrinho</button>
                        </form>
                    </>
                }

            </section>


        </InfoStyle>
    )
}
const InfoStyle = styled.main`
    background-color: ${LightBlue};
    min-height: 100vh;
    display: flex;
    margin-top:60px;

    section{
        margin: 0px auto;
        width: 100%;

        height: fit-content;
        background-color: ${White};
        display: flex;

        @media (max-width: 600px){
            flex-direction: column;
        }
    }
`