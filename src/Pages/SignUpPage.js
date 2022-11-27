import { useContext, useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"
import logo from "../Assets/imgs/logo.png"
import { LightBlue } from "../Settings/colors";
import { BackEnd_SignUp } from "../Settings/urls"
import { UserContext } from "../API/user"
import swal from 'sweetalert';

export default function SignUpPage() {
    const navigate = useNavigate()
    const {setUser}= useContext(UserContext)

    const [isClicked, setIsClicked] = useState(false)

    const [info, setInfo] = useState({ name: "", email: "", image: "", password: "", confirmPassword: "" })

    const body = {
        name: (info.name).toLowerCase(),
        email: (info.email).toLowerCase(),
        image: (info.image).toLowerCase().trim(),
        password: (info.password).toLowerCase(),
        confirmPassword: (info.confirmPassword).toLowerCase()
    }

    useEffect(()=>{
        if(localStorage.getItem("user")){
            const data = JSON.parse(localStorage.getItem("user"))
    
            setUser(data)
            navigate(`/${data.user.name}/dashboard`)
        }
    }, [])

    function handleSubmit(e) {
        e.preventDefault();
        if (!info.password === info.confirmPassword) {
            alert("Verifique sua senha")
        } else {
            registration()
        }
    }

    function registration() {
        const promise = axios.post(BackEnd_SignUp, body)

        setIsClicked(true)

        promise.then( () =>{
            swal({icon:"success", buttons:"Prosseguir"} ).finally(navigate("/"));
            }
        )

        promise.catch((err) => {
            swal(err.response.data[0], {
                className: "red-bg",
              });
            setIsClicked(false)
        })
    }

    return (
        <LoginScreen>
            <img src={logo} alt="alt" />
            <form onSubmit={(e) => handleSubmit(e)}>
                <FormStyle>
                    <input
                        type="text"
                        onChange={e => setInfo({ ...info, name: e.target.value })}
                        placeholder="Nome"
                        disabled={isClicked ? true : false}
                        required
                    />

                    <input
                        type="email"
                        onChange={e => setInfo({ ...info, email: e.target.value })}
                        placeholder="E-mail"
                        disabled={isClicked ? true : false}
                        required
                    />

                    <input
                        type="url"
                        onChange={e => setInfo({ ...info, image: e.target.value })}
                        placeholder="Imagem"
                        disabled={isClicked ? true : false}
                        required
                    />

                    <input
                        type="password"
                        onChange={e => setInfo({ ...info, password: e.target.value })}
                        placeholder="Senha"
                        disabled={isClicked ? true : false}
                        required
                    />

                    <input
                        type="password"
                        onChange={e => setInfo({ ...info, confirmPassword: e.target.value })}
                        placeholder="Confirme a senha"
                        disabled={isClicked ? true : false}
                        required
                    />
                    <button type="submit" disabled={isClicked}>Cadastrar</button>
                </FormStyle>
            </form>
            <Link to={"/"}><p>Já tem uma conta? Faça login</p></Link>
        </LoginScreen>
    )

}

const LoginScreen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    font-family: 'DM Sans', sans-serif;
    background-color: ${LightBlue};

    img {
		height: 100px;
        width: 250px;
	}

    p {
        color: #FFFFFF;
		font-size: 15px;
        font-weight: 700;
		text-decoration: underline;
		margin-top: 20px;
    }
 `

const FormStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 32px;

    input {
        margin: 2px 36px 8px 36px;
        width: 280px;
        height: 45px;
        font-family: 'DM Sans', sans-serif;
        font-size: 18px;
        padding-left: 11px;
        border-radius: 5px;
        border: 1px solid #D4D4D4;
        box-shadow: 0px 4px 4px 0px #00000040;
    }

    input::placeholder {
        color: #000000;
    }

    input:disabled {
        background-color: #F2F2F2;
        color: #D4D4D4;
    }

    button {
        display: flex;
        justify-content: center;
        border-style: none;
		color: #000000;
        width: 280px;
		height: 45px;
        margin: 8px 36px 6px 36px;
        padding-top: 10px;
		background-color: #FFFFFF;
		border-radius: 5px;
        font-weight: 700;
        font-family: 'DM Sans', sans-serif;
		font-size: 20px;
        box-shadow: 0px 4px 4px 0px #00000040;
        cursor: pointer;
    }
 `