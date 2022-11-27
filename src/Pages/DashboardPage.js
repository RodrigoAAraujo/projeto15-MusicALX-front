import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../API/user";
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
        </DashboardStyle>
    )
}

const DashboardStyle = styled.main`
    background-color: ${LightBlue};
    min-height: 100vh;
    display: flex;
    margin-top:60px;

    .vertical{
        display: flex;
        flex-direction: column;
    }
`