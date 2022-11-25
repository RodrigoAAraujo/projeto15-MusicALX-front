import { useEffect, useState } from "react"
import styled from "styled-components"
import { BackEnd_Products } from "../Settings/urls"
import axios from "axios"
import { ProductsDashboard } from "./ProductsDisplays"
import { DarkBlue, LightBlue } from "../Settings/colors"

export default function SlideProducts({type}){
    const [products, setProducts] = useState([])

    useEffect(()=>{
        axios.get(`${BackEnd_Products}?type=${type}`)
            .then(res =>{
                console.log(res.data)
                setProducts(res.data)
            })
            .catch(err =>{
                console.log(err)
            })
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
        font-size: 24px;
        font-weight: 400;
        margin-bottom: 10px;
    }
    
    .display-products{
        overflow-x: scroll;
        display: flex;
        max-height: 100%;
    }
`