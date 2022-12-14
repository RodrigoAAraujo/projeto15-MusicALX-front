import { useContext, useEffect, useState } from 'react'
import { useNavigate, Link } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"
import logo from "../Assets/imgs/logo.png"
import { LightBlue, DarkGray, DarkerGray } from "../Settings/colors";
import { UserContext } from "../API/user"
import { BackEnd_Login } from '../Settings/urls'
import swal from 'sweetalert';


export default function LoginPage() {
    const navigate = useNavigate()
    const { user, setUser } = useContext(UserContext)

    const [isClicked, setIsClicked] = useState(false)

    const [info, setInfo] = useState({ email: "", password: "", })
    const body = {
        email: (info.email).toLowerCase(),
        password: (info.password).toLowerCase(),
    }

    useEffect(()=>{
        if(localStorage.getItem("user")){
            const data = JSON.parse(localStorage.getItem("user"))
    
            setUser(data)
            navigate(`/${data.user.name}/dashboard`)
        }else{
            navigate("/")
        }
    }, [])

    function login(e) {
        e.preventDefault();
        const promise = axios.post(BackEnd_Login, body)

        setIsClicked(true)

        promise.then((res) => {
            setUser(res.data)
            setInfo(res.data)
            navigate(`/${res.data.user.name}/dashboard`);
            setIsClicked(false)
            localStorage.setItem("user",  JSON.stringify(res.data))
        })
        promise.catch(err => {
            console.log(err);
            setIsClicked(false)
            swal("login e/ou senha incorreta ou usuário não cadastrado", {
                className: "red-bg",
              });
           
        })
    }

    return (
        <LoginScreen>
          <img src={logo} alt="alt" />
          <form onSubmit={(e) => login(e)}>
            <FormStyle>
              <input
                type="email"
                onChange={e => setInfo({ ...info, email: e.target.value })}
                placeholder="E-mail"
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
              <button type="submit">Entrar</button>
            </FormStyle>
          </form>
          <Link to={"/sign-up"}><p>Primeira vez? Cadastre-se!</p></Link>
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
        color: ${DarkerGray};
		font-size: 16px;
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
        color: ${DarkGray};
    }

    input:disabled {
        background-color: #F2F2F2;
        color: #D4D4D4;
    }

    button {
        display: flex;
        justify-content: center;
        border-style: none;
		color: ${DarkGray};
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