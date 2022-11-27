import styled from "styled-components"
import { LightGray, White } from "../Settings/colors"
import logo from '../Assets/imgs/logo.png'

export default function Footer(){
    return(
        <FooterStyle>
            <img src={logo} width="200px"/>
            <h5>Copyright ©</h5>
            <div></div>
            <h5>Pagamento Seguro</h5>
            <img alt="Credit Card Logos" title="Credit Card Logos" src="https://www.shift4shop.com/images/credit-card-logos/cc-sm-5.png" width="249" height="28" border="0" />
        </FooterStyle>
    )
}

const FooterStyle = styled.footer`
    position: absolute;
    bottom: 0px;
    width:100%;
    height: 200px;
    background-color: ${White};
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;

    div{
        height: 1px;
        width: 300px;
        background-color: ${LightGray};
        margin: 10px
    }
    h5{
        margin: 5px 0px;
        font-weight: 500;
        font-size: 16px;
    }
`