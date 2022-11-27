import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { BackEnd_Products } from "../Settings/urls"
import axios from "axios"
import { ProductsDashboard } from "./ProductsDisplays"
import { DarkBlue, LightBlue } from "../Settings/colors"
import { UserContext } from "../API/user"
import { useNavigate } from "react-router-dom"

export default function SlideProducts({type}){
    const [products, setProducts] = useState([])
    const {user, setUser}= useContext(UserContext)

    const navigate = useNavigate()

    useEffect(()=>{

        if(localStorage.getItem("user")){
            const data = JSON.parse(localStorage.getItem("user"))
        
            setUser(data)

            axios.get(`${BackEnd_Products}?type=${type}`, { headers:{Authorization: `Bearer ${data.token}`}})
            .then(res =>{
                console.log(res.data)
                setProducts(res.data)
            })
            .catch(err =>{
                console.log(err)
            })
        }else{
            navigate("/")
        }

    },[])

    return(
        <SlideProductsStyle>
            <h2>{type}</h2>
            <div className="display-products">
                {products.length > 0? products.map((p) => <ProductsDashboard _id={p._id} product={p.product} image={p.image} value={p.value}/>): null}
            </div>
        </SlideProductsStyle>
    )
}

const SlideProductsStyle = styled.div`
    max-height: 300px;
    padding: 20px;
    background-color: ${LightBlue};

    h2{
        font-size: 20px;
        font-weight: 400;
        margin-bottom: 10px;
    }
    
    .display-products{
        overflow-x: scroll;
        display: flex;
        max-height: 100%;
    }
`