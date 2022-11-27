import styled from "styled-components"
import { LightGray, DarkBlue, DarkerGray, White } from "../Settings/colors"
import logo from '../Assets/imgs/logo.png'

export default function Footer(){
    return(
        <FooterStyle>
            <h5>Copyright ©</h5>
            <div></div>
            <h5>Pagamento Seguro</h5>
            <img alt="Credit Card Logos" title="Credit Card Logos" src="https://www.shift4shop.com/images/credit-card-logos/cc-sm-5.png" width="249" height="26" border="4" />
        </FooterStyle>
    )
}

const FooterStyle = styled.footer`
    position: absolute;
    bottom: 0px;
    width:100%;
    height: 110px;
    background-color: ${White};
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;

    div{
        height: 1px;
        width: 300px;
        background-color: #000000;
        margin: 4px
    }
    h5{
        margin: 2px 0px 8px 0; 
        font-weight: 500;
        font-size: 14px;
    }
`