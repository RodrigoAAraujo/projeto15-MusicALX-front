import { useContext, useState } from 'react'
import { useNavigate, Link } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"
import logo from "../Assets/imgs/logo.png"
import { LightBlue } from "../Settings/colors";
import { UserContext } from "../API/user"
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

    function login(e) {
        e.preventDefault();
        const URL = "https://musicalx.onrender.com/sign-in"
        const promise = axios.post(URL, body)
        promise.then((res) => {
            setUser(res.data)
            setInfo(res.data)
            navigate(`/${res.data.user}/dashboard`);
        })
        promise.catch(err => {
            console.log(err);
            swal("login e/ou senha incorreta ou usuário não cadastrado", {
                className: "red-bg",
              });
           
        })
    }

    return (
        <LoginScreen>
          <img src={logo} alt="alt" />
          <form onSubmit={login}>
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
              <button onClick={() => setIsClicked(true)} type="submit">Entrar</button>
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
    }
 `