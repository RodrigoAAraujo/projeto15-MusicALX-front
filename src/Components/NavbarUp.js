import styled from 'styled-components'
import { DarkBlue, LightBlue, White } from '../Settings/colors'


export default function NavbarUp(){
    return(
        <NavStyle>
            <div>
                <ion-icon name="cart"></ion-icon>
            </div>
            <div>
                <ion-icon name="home"></ion-icon> 
                <ion-icon name="add-circle-outline"></ion-icon>
                <ion-icon name="document-text"></ion-icon>  
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


    div{
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
    }
`