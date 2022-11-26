import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import NavbarUp from "../Components/NavbarUp";
import { ProductsDashboard } from "../Components/ProductsDisplays";
import SideBar from "../Components/SideBar";
import SlideProducts from "../Components/SlideProducts";
import { LightBlue } from "../Settings/colors";
import { BackEnd_Products } from "../Settings/urls";

export default function DashboardPage(){
    const [products, setProducts] = useState([])

    useEffect(()=>{
        axios.get(BackEnd_Products)
            .then(res =>{
                console.log(res.data)
                setProducts(res.data)
            })
            .catch(err =>{
                console.log(err)
            })
    },[])

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