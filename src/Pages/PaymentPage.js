import styled from 'styled-components';
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom"
import { CartContext } from "../API/cart"
import { UserContext } from "../API/user"
import logo from "../Assets/imgs/logo.png"
import { DarkBlue, DarkerGray, DarkGray, LightBlue, White } from "../Settings/colors"
import swal from 'sweetalert';
import { BackEnd_Payment } from '../Settings/urls';
import axios from 'axios';

export default function PaymentPage() {
  const navigate = useNavigate()
  const { user } = useContext(UserContext)
  const { cart, setCart } = useContext(CartContext)
  const [values, setValues] = useState({ cardName: '', cardNumber: '', securityNumber: '', expirationDate: '' });
  const[total, setTotal] = useState(0)

  const change = (e) => {setValues({ ...values, [e.target.name]: e.target.value });}

  useEffect(()=>{
    let sum = 0
    console.log(cart)
    cart.forEach((e) => sum += Number(e.value.replace(",", ".").replace("R$", "")) * e.qtd)
    console.log(sum)
    setTotal(sum)
  }, [])

  function Pay() {

    axios.post(BackEnd_Payment, cart, { headers: { Authorization: `Bearer ${user.token}` , User: `${user.user.email}` }})
        .then(res => {
          console.log(res)
          setCart([])
          swal({
            title: "Compra realizada com sucesso!",
          });
          navigate(`/${user.user.name}/dashboard`);
        })
        .catch(err => {
          console.log(err)
          swal(err.response.data[0], {
            className: "red-bg",
          });
        })
  }

  return (
    <>
      <Box>
        <img src={logo} alt="alt" />
        <HeaderPage>
          <h1> Checkout </h1>
          <OrderDescription>
            {cart.map((product, index) => (
              <Products>
                <p>{product.product}</p>
                <p>R$ {product.value}</p>
                <p>Qtd: {product.qtd}</p>
              </Products>
            ))}
          </OrderDescription>
          <Total>
            <h5>Total da compra:
              {` R$ ${total.toFixed(2)} `}
              </h5>
          </Total>
        </HeaderPage>
        <PaymentBox>
          <h3>Insira os dados do cartão:</h3>
          <Forms >
            <input type="text" onChange={change} placeholder=" Nome impresso no cartão" name='cardName' required/>
            <input type="text" onChange={change} placeholder=" Digitos do cartão" name='cardNumber' required/>
            <input type="password" onChange={change} placeholder=" Código de segurança" name='securityNumber' required />
            <input type="text" onChange={change} placeholder=" Validade */*" name='expirationDate' required/>
            <button onClick={() => Pay()}>
              <p>Finalizar pedido</p>
            </button>
          </Forms>
        </PaymentBox>
      </Box>
    </>
  )
}

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  font-family: 'DM Sans', sans-serif;
  background-color: ${LightBlue};

  img {
		height: 160px;
    width: 380px;
	}
`

const HeaderPage = styled.div`
  margin: 0 auto;
  font-size: 20px;
  width: 55%;
  min-width: 375px;
  margin-bottom: 15px;

  h1 {
  margin-bottom: 15px;
  background-color: ${White};
  height: 40px;
  text-align: center;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
}
`

const OrderDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 20px 20px;
  width: 100%;
  background-color: ${White};
  border-radius: 8px;

  h5 {
    min-width: 200px;
  }
`

const Total = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  height: 50px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${DarkGray};
  color: ${White};
  font-weight: 600;

  h5 {
    margin-left: 10px;
    text-align: center;
    min-width: 250px;
}
`

const Products = styled.div`
  display: flex;

  :first-child {
    margin-top: 20px;
  }

  p {
  
    min-width: 150px;
    text-align: center;
    font-weight: 550;
  }
`;


const PaymentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-weight: 500;
  h3 {
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const Forms = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  input {
    font-family: 'Recursive', sans-serif;
    font-size: 14px;
    background-color: ${White};
    margin: 5px 0px;
    width: 50%;
    height: 40px;
    border-radius: 8px;
    border: 2px solid ${DarkerGray};
  }

  button {
    color: ${DarkGray};
    font-weight: 700;
    font-size: 14px;
    min-width: 150px;
    min-height: 40px;
    margin-top: 5px;
    border-radius: 8px;
    background-color: ${DarkBlue};
    border: 2px solid ${DarkBlue};
    cursor: pointer;
  }
`
