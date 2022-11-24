import styled from "styled-components";
import NavbarUp from "../Components/NavbarUp";
import SideBar from "../Components/SideBar";
import { LightBlue } from "../Settings/colors";

export default function DashboardPage(){
    return(
        <DashboardStyle>  
            <NavbarUp/>
            <SideBar/>
        </DashboardStyle>
    )
}

const DashboardStyle = styled.main`
    background-color: ${LightBlue};
    min-height: 100vh;
`