import styled from 'styled-components';
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../API/cart"
import { UserContext } from "../API/user"
import logo from "../Assets/imgs/logo.png"
import { DarkBlue, DarkerGray, DarkGray, LightBlue, LightGray, LigthGray, White } from "../Settings/colors"
import swal from 'sweetalert';

export default function PaymentPage({product, image, qtd, value, position}) {
  const { user } = useContext(UserContext)
  const { cart, setCart } = useContext(CartContext)
  const [values, setValues] = useState({ cardName: '', cardNumber: '', securityNumber: '', expirationDate: '' });

  const Change = (e) => {setValues({ ...values, [e.target.name]: e.target.value });}

  // let total = 
  //   Number(product.value.replace("R$", "").replace(".", "").replace(",", ".").trim()) += product.value

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
                <p>R$ {product.value}0</p>
              </Products>
            ))}
          </OrderDescription>
          <Total>
            <h5>Total da compra:

              {/* R$ {total.toFixed(2)} */}
              </h5>
          </Total>
        </HeaderPage>
        <PaymentBox>
          <h3>Insira os dados do cartão:</h3>
          <Forms >
            <input type="text" onChange={Change} placeholder=" Nome impresso no cartão" name='cardName' />
            <input type="text" onChange={Change} placeholder=" Digitos do cartão" name='cardNumber' />
            <input type="password" onChange={Change} placeholder=" Código de segurança" name='securityNumber' />
            <input type="text" onChange={Change} placeholder=" Validade */*" name='expirationDate' />
            <button onClick={() =>
            (swal("Compra realizada com sucesso",
              { icon: "success", buttons: "Prosseguir" })
            )}>
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
    margin-top: 25px;
  }

  p {
    padding: 15px 15px;
    min-width: 240px;
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
