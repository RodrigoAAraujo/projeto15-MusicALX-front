import { useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { SidebarContext } from '../API/sidebar'
import { UserContext } from '../API/user'
import { DarkBlue, DarkerGray, Gray, LightBlue, LightGray, White } from '../Settings/colors'


export default function NavbarUp(){
    const {user}= useContext(UserContext)
    const {sidebar, setSidebar} = useContext(SidebarContext)
    const navigate = useNavigate()

    return(
        <NavStyle>
            <div>
                <ion-icon name="cart" onClick={sidebar? () => setSidebar(false): () => setSidebar(true)}></ion-icon>
                <h1 onClick={sidebar? () => setSidebar(false): () => setSidebar(true)}>Carrinho</h1>
            </div>
            <nav>
                <button>
                    <ion-icon name="search"></ion-icon>
                </button>
                <form>
                    <input placeholder='filtrar..'></input>
                </form>
            </nav>
            <div>
                <h1 onClick={() => navigate(`/${user.user.name}/dashboard`)}>
                    Home
                </h1>
                <ion-icon name="home" onClick={() => navigate(`/${user.user.name}/dashboard`)}>
                </ion-icon> 
                <h1 onClick={() => navigate(`/${user.user.name}/cadastrar-produto`)}>
                    Divulgar Produto
                </h1>
                <ion-icon name="add-circle-outline" onClick={() => navigate(`/${user.user.name}/cadastrar-produto`)}>
                </ion-icon>
                <h1 onClick={() => navigate(`/${user.user.name}/termos_condicoes`)}>
                    Termos e Condições
                </h1>
                <ion-icon name="document-text" onClick={() => navigate(`/${user.user.name}/termos_condicoes`)}>
                </ion-icon>  
            </div>
        </NavStyle>
    )
}


const NavStyle = styled.nav`
    position: fixed;
    top: 0; left: 0;
    height: 60px;
    width: 100%;
    background-color: ${DarkBlue};
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${White} ;
    font-size: 24px;

    ion-icon{
        color: ${White};
    }

    nav{
        display: flex;
        align-items: center;

        @media (max-width: 500px) {
            display: none;
        }

        button{
            display: flex;
            align-items: center;
            height: 36px;
            font-size: 22px;
            border-radius: 4px 0px 0px 4px;
            cursor: pointer;
            background-color: ${Gray};
            color: ${DarkBlue};
            transition: 0.3s;

            :hover{
                background-color: ${LightBlue};
            }
        }
        input{
            padding: 5px 5px 5px 11px;
            font-size: 20px;
            border-radius: 0px 5px 5px 0px;
            cursor: text;
            margin-left: 2px;
            color: ${DarkerGray};
            border: none;
            width: 35vw;
            background-color: ${White};
            font-family: 'DM Sans', sans-serif;

            @media (max-width: 1080px) {
                width: 40vw;
            }


            :placeholder-shown{
                background-color: ${LightGray};
            }
            
        }

    }


    div{
        display: flex;
        margin:0px 10px;

        ion-icon{
            margin: 0px 6px;
            padding: 5px;
            border-radius: 50%;
            cursor: pointer;
            transition: 0.3s;

            :hover{
                background-color: ${LightBlue};
            }
        }
        h1{
            font-size: 20px;
            font-weight: 400;
            margin: 0px 4px;
            padding: 0px 10px;
            border-left: 1px solid ${LightBlue};
            color: ${White};
            cursor: pointer;

            :hover{
                color: ${LightBlue};
            }

            :after {
                content: '';
                width: 0px;
                height: 2px;
                display: block;
                background: black;
                transition: 300ms;
                background-color: ${LightBlue};
            }

            :hover:after {
                width: 100%;
            }
        }

        @media (max-width: 1080px) {
            h1{
                display: none;
            }
            ion-icon{
                display: block;
            }
        }
        @media (min-width: 1080px) {
            h1{
                display: inline;
            }
            ion-icon{
                display: none;
            }
        }
    }
`