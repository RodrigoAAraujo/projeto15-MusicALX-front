import styled from "styled-components";
import Footer from "../Components/Footer";
import NavbarUp from "../Components/NavbarUp";
import SideBar from "../Components/SideBar";
import SlideProducts from "../Components/SlideProducts";
import { LightBlue } from "../Settings/colors";

export default function DashboardPage(){

    return(
        <DashboardStyle>  
            <NavbarUp/>
            <SideBar/>
            <div className="vertical">
                <SlideProducts type="Instrumento de Tecla"/>
                <SlideProducts type="Instrumento de Sopro"/>
                <SlideProducts type="Instrumento de Corda"/>
            </div>
            <Footer/>
        </DashboardStyle>
    )
}

const DashboardStyle = styled.main`
    background-color: ${LightBlue};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    margin-top:60px;
    position: relative;

    .vertical{
        display: flex;
        flex-direction: column;
    }
`