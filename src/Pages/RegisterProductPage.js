import styled from "styled-components";
import NavbarUp from "../Components/NavbarUp";
import SideBar from "../Components/SideBar";
import { LightBlue } from "../Settings/colors";

export default function RegisterProductPage(){
    return (
        <RegisterStyle>
            <NavbarUp/>
            <SideBar/>
            <form>
                <input placeholder="Nome do produto" type="text"></input>
                <select name="type" multiple={true}>
                    <option value="Instrumeto de Corda"></option>
                </select>
            </form>
        </RegisterStyle>
    )
}

const RegisterStyle = styled.main`
    background-color: ${LightBlue};
    min-height: 100vh;
`