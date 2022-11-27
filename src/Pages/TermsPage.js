import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { UserContext } from "../API/user"
import Footer from "../Components/Footer"
import NavbarUp from "../Components/NavbarUp"
import SideBar from "../Components/SideBar"
import { DarkerGray,  LightBlue,  DarkGray } from "../Settings/colors"

export default function TermsPage(){
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

    return (
        <TermsStyle>
            <NavbarUp/>
            <SideBar/>
            <div className="text">
                <h1>Envio e Prazo de entrega </h1>
                <p>O prazo para entrega dos produtos varia de 12 a 35 úteis dias após o fornecedor enviar 
                    para o Brasil a mercadoria. Você receberá o código de rastreamento no e-mail cadastrado na compra em até 7 dias úteis após
                    o processamento do seu pedido. Por ser uma encomenda internacional, para que o rastreamento esteja disponível no site dos Correios
                    é preciso que haja deslocamento do produto e por tal motivo, demora cerca de 5 a 10 dias úteis para que seja possível visualizar o
                    rastreamento do produto.Nossos produtos são importados dos Estados Unidos, Europa e Ásia. Se 
                    seu produto estiver demorando além do prazo estipulado, consulte o código de rastreio, caso você não saiba o código de rastreio, 
                    entre em contato conosco por e-mail. Muitas vezes acontece de o produto ficar muito tempo na Alfândega em Curitiba ou no Rio de Janeiro 
                    devido a fiscalização da Receita Federal. Eles verificam todos os pacotes que entram no Brasil, 
                    com isso gera uma demora devido a demanda, com isso atrasa as entregas. Mas não se preocupe, seu produto irá chegar na sua casa. 
                </p>
                <h1>Políticas de Pagamento</h1>
                <p>Pague suas compras com segurança Todos os pagamentos da nossa loja são feitos por 
                    uma das plataformas de pagamentos mais conhecidas e confiáveis do Brasil. É uma empresa terceirizada e especializada 
                    em segurança de pagamentos eletrônicos. Como o PagSeguro. O PagSeguro utiliza vários protocolos para manter a segurança e 
                    os seus dados confidenciais. O vendedor não tem acesso aos seus dados financeiros quando você envia o pagamento por meio do sistema 
                    de recebimento do PagSeguro, tais como: número do cartão de crédito e CPF ou dados bancários. Também temos o “Pagamento Seguro”, 
                    que é um processo de custódia do pagamento que aumenta a segurança nas transações entre os compradores e vendedores. 
                    Podem ficar tranquilos, utilizamos as melhores tecnologias para garantir toda a sua segurança ao comprar em nossa loja virtual. 
                </p>
                <h1>Sobre Nós</h1>
                <p className="last">
                    Aqui na MusicALX somos comprometidos em oferecer os melhores produtos sempre com aquele preço especial que cabe no seu bolso,
                    tudo isso alinhado com uma atendimento ao cliente em tempo real, onde priorizamos sempre a satisfação dos nossos consumidores.
                    Surgimos pela paixão e pelo desejo de conectar as pessoas com o que há de melhor sem a necessidade de sair de casa. 
                    Levamos com a comodidade de comprar com a apenas um clique todas as tendências mundiais para o conforto do seu lar.
                    Nós somos apaixonados pelo o que fazemos! Temos uma equipe treinada e direcionada para sempre atualizarmos nossos estoques 
                    com o que há de mais recente e sofisticado no cenário mundial.
                    Buscamos sempre os melhores produtos e fornecedores para proporcionar aos nossos clientes o melhor preço de vendas online. 
                    Todos os nossos fornecedores passam por um processo bem rigoros de análise para que possam trabalhar junto conosco, 
                    fazemos isso para que possamos fornecer produtos que supram todas as exigências dos nossos clientes
                </p>
            </div>

            <Footer/>
        </TermsStyle>
    )
}

const TermsStyle = styled.main`
    background-color: ${LightBlue};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    margin-top:60px;
    position: relative;


    .text{
        max-width: 1200px;
        margin: 0px auto;
        padding: 20px 20px 250px 20px;
    }

    h1{
        max-width: 1000px;
        margin: 20px auto;
        font-size: 24px;
        font-weight: 500;
        color: ${DarkGray};
    }
    
    p{
        max-width: 1100px;
        margin: 20px auto;
        font-size: 18px;
        font-weight: 300;
        color: ${DarkerGray};
    }
`
