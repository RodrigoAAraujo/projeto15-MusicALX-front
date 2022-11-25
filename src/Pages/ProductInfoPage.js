import styled from "styled-components"
import NavbarUp from "../Components/NavbarUp"
import SideBar from "../Components/SideBar"
import { LightBlue } from "../Settings/colors"

export default function ProductInfoPage(){
    return(
        <InfoStyle>
            <NavbarUp/>
            <SideBar/>
        </InfoStyle>
    )
}
const InfoStyle = styled.main`
    background-color: ${LightBlue};
    min-height: 100vh;
    display: flex;
    margin-top:60px;
`