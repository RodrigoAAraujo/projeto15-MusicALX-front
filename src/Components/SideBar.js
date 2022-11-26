import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { CartContext } from "../API/cart"
import { SidebarContext } from "../API/sidebar"
import { UserContext } from "../API/user"
import { DarkGray, DarkRed, Gray, LightBlue, LightGray, LigthGray, LigthRed, White } from "../Settings/colors"
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

    return (
        <UserInfoStyle>
            <section>
                <img src={user.image} />
                <ion-icon name="log-out-outline" onClick={() => navigate("/")}></ion-icon>
            </section>

            <h3>{user.name}</h3>
            <h4>{user.email}</h4>
        </UserInfoStyle>
    )

}

function Cart() {
    const { user } = useContext(UserContext)
    const { cart, setCart } = useContext(CartContext)
    const navigate = useNavigate()

    return (
        <CartStyle>
            <h1>Carrinho</h1>
            {cart.length === 0 ?
                <div className="empty">
                    <h2>Carrinho Vazio</h2>
                </div> :
                <>
                    {cart.map((p, index) => 
                        <ProductsCart name={p.name} image={p.image} qtd={p.qtd} value={p.value} position={index}/>
                    )}
                    <section>
                        <button onClick={() => navigate(`/${user.name}/carrinho/pagamento`)}>Finalizar Compra</button>
                        <p onClick={() => setCart([])}>Limpar Tudo</p>
                    </section>
                </>
            }
        </CartStyle >
    )

}

const SideBarStyle = styled.aside`
    position: fixed;
    top: 60px; left: ${props => props.on ? "0px" : "-260px"};
    background-color: ${White};
    width: 260px;
    height: 100%;

    transition: 0.6s ease-out;
`

const UserInfoStyle = styled.div`
    padding: 10px;
    border-top: 1px ${LightGray} solid;

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
            width: 50px;
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
        color: ${DarkGray};
    }
`

const CartStyle = styled.div`
    padding: 10px;
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
        font-size: 30px;
        font-weight: 500;
        margin-top: 10px;
    }
`