import userEvent from "@testing-library/user-event"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import { CartContext } from "../API/cart"
import { UserContext } from "../API/user"
import Footer from "../Components/Footer"
import LoadingIcon from "../Components/LoadingIcon"
import NavbarUp from "../Components/NavbarUp"
import { ProductsDetails } from "../Components/ProductsDisplays"
import SideBar from "../Components/SideBar"
import { DarkBlue, LightBlue, LightGray, White } from "../Settings/colors"
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
        setOptions(array)
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

    if(product === null){
        return(
            <>
                <LoadingIcon/>
                <NavbarUp/>
                <SideBar/>
            
            </>
        )
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

                        <article>
                            <h2> Políticas de Compras:</h2>
                            <Link to={`/${user.name}/termos_condicoes`}>Política de Reeembolso</Link>
                            <Link to={`/${user.name}/termos_condicoes`}>Parcelamentos</Link>
                            <Link to={`/${user.name}/termos_condicoes`}>Entregas</Link>                       

                            <form onSubmit={(e) => adicionarCarrinho(e)}>
                                <div>
                                    <label htmlFor="qtd">Quantidade:</label>
                                    <select name="qtd" onChange={(e) => setQtd(e.target.value)} value={qtd} >
                                        {options.map((o) => <option>{o}</option>)}
                                    </select>
                                </div>

                                <button type="submit">Adicionar ao carrinho</button>
                            </form>
                        </article>
                    </>
                }
            </section>
        
            <h1>Descrição do Produto</h1>
            <p>{product.copy}</p>

            <Footer/>

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

        @media (max-width: 1080px){
            flex-direction: column;
        }

        form{
            display: flex;
            align-items: center;
            justify-content:center;
            width: 100%;
            margin: 20px 0px;
            display: flex;
            flex-direction: column;


            label{
                margin-right: 10px;
                font-size: 20px;
            }

            button{
                padding: 5px 10px;
                border-radius: 5px;
                margin-top: 15px;
                transition: 0.2s;
                cursor: pointer;

                :hover{
                    background-color: ${LightBlue};
                }
            }
        }

        article{
            border-left:1px ${LightGray} solid ;
            margin: 10px 0px;
            width: 50%;

            @media(max-width: 1080px){
                width: 90%;
                border-top: 1px ${LightGray} solid ;
                border-left: none;
                margin:auto;
            }

            h2{
                font-size: 20px;
                font-weight: 400;
                margin: 10px;
            }
            a{
                color: ${LightBlue};
                text-decoration: none;
                transition: 0.2s;
                margin: 20px 10px;

                :hover{
                    color: ${DarkBlue};
                }
            }
        }
    }
`