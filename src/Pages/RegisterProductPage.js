import { useContext, useEffect, useState } from "react";
import CurrencyInput from "react-currency-input-field";
import styled from "styled-components";
import NavbarUp from "../Components/NavbarUp";
import SideBar from "../Components/SideBar";
import { DarkBlue, DarkGray, LightBlue, LightGray, White } from "../Settings/colors";
import { BackEnd_Products} from "../Settings/urls";
import axios from 'axios'
import { UserContext } from "../API/user";
import { useNavigate } from "react-router-dom";

export default function RegisterProductPage(){
    const [product, setProduct] = useState()
    const [seller, setSeller] = useState()
    const [qtd, setQtd] = useState()
    const [type, setType] = useState("Instrumento de Corda")
    const [image, setImage] = useState()
    const [copy, setCopy] = useState()
    const [value, setValue] = useState()

    const {setUser} = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(()=>{
        if(localStorage.getItem("user")){
            const data = JSON.parse(localStorage.getItem("user"))
    
            setUser(data)
        }else{
            navigate("/")
        }
    }, [])

    function registerProduct(e){
        e.preventDefault()

        const body = {
            product,
            seller,
            qtd,
            type,
            image, 
            copy,
            value
        }

        console.log(body)
    
        axios.post(BackEnd_Products, body)
            .then(res =>{
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <RegisterStyle>
            <NavbarUp/>
            <SideBar/>
            <form id="product-register" onSubmit={(e) => registerProduct(e)} encType="multipart/form-data">
                <h2>Registre seu Produto </h2>

                <div className="horizontal">
                    <div className="vertical">
                        <input placeholder="Nome do produto" type="text" required
                        value={product} onChange={(e) => setProduct(e.target.value)}/>
                        
                        <select name="type" value={type} onChange={(e) => setType(e.target.value)} required>
                            <option>Instrumento de Corda</option>
                            <option>Instrumento de Tecla</option>
                            <option>Instrumento de Sopro</option>
                            <option>Eletrônicos</option>
                        </select>
                        <input placeholder="Quantidade" type="number" max={50} required
                        value={qtd} onChange={(e) => setQtd(e.target.value)}/>
                    </div>

                    <section>
                        <ion-icon name="images"></ion-icon>
                        <input type="url" placeholder="Url da Imagem" required
                        value={image} onChange={(e) => setImage(e.target.value)}/>
                    </section>
                </div>

                <div className="horizontal">
                    <input type="text" placeholder="Nome Completo do Vendedor" required
                    value={seller} onChange={(e) => setSeller(e.target.value)}/>
                    <CurrencyInput id="currency" decimalsLimit={2} prefix="R$" allowNegativeValue={false} required
                    decimalSeparator="," groupSeparator="." placeholder="Valor"
                    onChange={(e) => setValue(e.target.value)}/>
                </div>

                <textarea placeholder="Descrição do Produto" required
                value={copy} onChange={(e) => setCopy(e.target.value)}/>
                <button type="submit"> Adicionar </button>
            </form>
        </RegisterStyle>
    )
}

const RegisterStyle = styled.main`
    background-color: ${LightBlue};
    min-height: 100vh;
    display: flex;
    justify-content: center;

    #product-register{
        margin: 60px 0px;
        width: 90%;
        max-width: 800px;
        display: flex;
        flex-direction: column;

        h2{
            margin: 20px 4px;
            font-size: 22px;
            font-weight: 700;
            color: ${White};
        }

        .vertical{
            display: flex;
            flex-direction: column;
            width: 100%;
            justify-content: space-between;
            
        }
        .horizontal{
            display: flex;
            justify-content: space-between;
            margin-bottom: 8px;

            @media (max-width: 400px){
                flex-direction: column;
                margin-bottom: 0px;
            }
        }

        input,select{
            background-color: ${LightGray};
            padding: 7px 10px;
            border-radius: 5px;
            border: none;
            word-break: break-all;
            width: 100%;
            box-shadow: 0px 4px 4px 0px #00000040;
            font-family: 'DM Sans', sans-serif;
            
            :focus{
                outline: 1px solid ${DarkBlue};
            }

            @media (max-width:400px){
                margin:4px 0px
            }
        }
        #currency{
            width: 30%;
            margin-left: 6px;

            @media (max-width: 400px){
                margin-left: 0px;
                width: 50%;
            }
        }

        section{
            padding: 7px 10px;
            border-radius: 5px;
            margin: 4px 0px 4px 0px;


            @media (min-width: 400px){
                max-width: 300px;
                margin: 0px 0px 0px 8px;
                min-width: 30%;
            }

            ion-icon{
                font-size: 40px;
                color: ${DarkGray};
            }
            background-color: ${LightGray};
            padding: 20px;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }

        textarea{
            width: 100%;
            border-radius: 5px;
            border:none;
            min-height: 25vh;
            max-width: 100%;
            min-width: 100%;
            padding: 5px;
            background-color:${LightGray};
            box-shadow: 0px 4px 4px 0px #00000040;
            font-family: 'DM Sans', sans-serif;
            
            :focus{
                outline: 1px solid ${DarkBlue};
            }
        }

        button{
            width: 50%;
            padding: 5px;
            border-radius: 5px;
            border-style: none;
            font-size: 18px;
            font-weight: 400;
            margin: 0px auto;
            margin-top: 20px;
            cursor: pointer;
            background-color:${LightGray};
            box-shadow: 0px 4px 4px 0px #00000040;
            font-weight: 700;
            font-family: 'DM Sans', sans-serif;
        }
    }
`