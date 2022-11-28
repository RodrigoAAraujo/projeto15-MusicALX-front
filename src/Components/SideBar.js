import axios from "axios"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { CartContext } from "../API/cart"
import { SidebarContext } from "../API/sidebar"
import { UserContext } from "../API/user"
import { DarkGray, DarkRed, Gray, LightBlue, LightGray, LigthGray, LigthRed, White } from "../Settings/colors"
import { BackEnd_Payment } from "../Settings/urls"
import { LoadingIcon } from "./LoadingIcon"
import { ProductsCart } from "./ProductsDisplays"

export default function SideBar() {
    const { sidebar } = useContext(SidebarContext)

    return (
        <SideBarStyle on={sidebar}>
            <UserInfo />
            <Cart />
        </SideBarStyle>
    )
}

function UserInfo() {
    const { user } = useContext(UserContext)
    const navigate = useNavigate()

    if (user.user === undefined) {
        return (
            <LoadingIcon />
        )
    }

    return (
        <UserInfoStyle>
            <section>
                <img src={user?.user.image} />
                <ion-icon name="log-out-outline" onClick={() => { localStorage.removeItem("user"); navigate("/") }}></ion-icon>
            </section>

            <h3>{user?.user.name}</h3>
            <h4>{user?.user.email}</h4>
        </UserInfoStyle>
    )

}

function Cart() {
    const { user } = useContext(UserContext)
    const { cart, setCart } = useContext(CartContext)
    const navigate = useNavigate()

    function Pay() {
        console.log(cart)

        axios.post(BackEnd_Payment, cart, { headers: { Authorization: `Bearer ${user.token}` }, User: `${user.email}` })
            .then(res => {
                console.log(res)
                setCart([])
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <CartStyle>
            <h1>Carrinho</h1>
            {cart.length === 0 ?
                <div className="empty">
                    <h2>Carrinho Vazio</h2>
                </div> :
                <>
                    {cart.map((p, index) =>
                        <ProductsCart product={p.product} image={p.image} qtd={p.qtd} value={p.value} position={index} />
                    )}
                    <section>
                        <button onClick={() => {
                            navigate(`/${user.name}/carrinho/pagamento`)
                            Pay()
                        }}>Finalizar Compra
                        </button>
                        <p onClick={() => setCart([])}>Limpar Tudo</p>
                    </section>
                </>
            }
        </CartStyle >
    )

}

const SideBarStyle = styled.aside`
    position: fixed;
    top: 60px; left: ${props => props.on ? "0px" : "-285px"};
    background-color: ${White};
    width: 285px;
    height: 100%;
    padding: 14px;
    transition: 0.6s ease-out;
`

const UserInfoStyle = styled.div`
    section{
        display: flex;
        align-items: center;
        justify-content: space-between;

        ion-icon{
            font-size: 34px;
            margin-right: 10px;
            padding: 5px;
            border-radius: 50%;
            cursor: pointer;
            transition: 0.3s;

            :hover{
                background-color: ${LightBlue};
            }
        }

        img{
            width: 60px;
            border-radius:50% ;
            aspect-ratio: 1;
            object-fit: cover;
        }
    }


    h3{
        font-size: 24px;
        font-weight: 500;
        margin-top: 10px;
    }
        h4{
        font-size: 20px;
        font-weight: 400;
        margin: 5px 0 10px 0;
        color: ${DarkGray};
    }
`

const CartStyle = styled.div`
    border-top: 1px ${LightGray} solid;

    .empty{
        width: 100%;
        border-radius: 8px;
        border: 1px ${Gray} solid;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${DarkGray};
        margin: 10px 0px;
        min-height: 100px;
    }

    section{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 10px;

        button{
            padding: 5px 10px;
            border-radius: 5px;

            font-weight: 400;
            font-size: 16px;

            transition: 0.4s;
            cursor: pointer;

            :hover{
                opacity: 0.8;
                background-color: ${LightBlue};
            }
        }

        p{
            font-size: 12px;
            font-weight: 500;
            color: ${LigthRed};
            align-self: flex-start;
            cursor: pointer;
            transition: 0.4s;

            :hover{
                text-decoration: underline;
                color: ${DarkRed};
            }
        }
    }
    h1{
        font-size: 25px;
        font-weight: 500;
        margin-top: 10px;
    }
`