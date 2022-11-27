import styled from "styled-components"
import icon from '../Assets/imgs/Spinner-0.9s-400px.gif'
import iconSmaller from '../Assets/imgs/Spinner-0.9s-221px.gif'
import { LightBlue } from "../Settings/colors"

export function LoadingIcon(){
    return(
        <LoadingStyle>
            <img src={icon}/>
        </LoadingStyle>
    )
}

export function LoadingIconSmall(){
    return(
        <LoadingSmallStyle>
            <img src={iconSmaller}/>
        </LoadingSmallStyle>
    )
}

const LoadingStyle = styled.main`
    background-color: ${LightBlue};
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top:60px;
    padding-bottom: 200px;
    position: relative;
    img{
        margin: auto;
        width: 500px;
    }
`

const LoadingSmallStyle = styled.div`
`