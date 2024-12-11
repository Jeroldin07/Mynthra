import  "bootstrap/dist/css/bootstrap.min.css"
import Card from 'react-bootstrap/Card'
import { createSearchParams, Link, useNavigate } from "react-router-dom"

import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';


export default function Mens() {

    const [data,setdata]=useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/category/men's clothing")
        .then(response => response.json())
        .then ((result)=>setdata(result))
        .catch((error)=>console.log(error))},[])

const navigate=useNavigate()
const navi =(ids)=>{
  console.log("see",ids);
  navigate({
    pathname: '/productid',
    search: createSearchParams({id:ids}).toString(),
  })
}
return (


    <div>
       <h1 className="MWJEsec mt-5">Welcome to Mynthra Great Festival</h1>
       <div className="m-auto">
    {data ? (<ul className="d-flex"> {data.map((item)=>(<div key={item.id}>
      
        <Card className="WCard ms-lg-5" style={{ width: '20rem' }}>
          
          <Card.Img className="WImgCard" style={{width:'19.9rem', height:'20rem'}} variant="top" src={item.image} />
          <Card.Body className="Wcardbody">
            <Card.Title className="" style={{width:'18rem', height:'8rem'}}>{item.title} </Card.Title>
            
            <div className="WDivCardText d-flex">
            <Card.Text className="WCardText" variant="outline-secondary">Price- {item.price}</Card.Text><h4>/</h4>
            <Card.Text className="WCardText" variant="outline-secondary">Rating- {item.rating.rate}</Card.Text><h4>/</h4>
            <Card.Text className="WCardText" variant="outline-secondary">Count- {item.rating.count}</Card.Text>
            
            </div>
            <Button className="" onClick={(event)=>navi(item.id)}>View Product</Button>
            
          </Card.Body>
        </Card>
        
    </div>))}</ul>):(<p>Loading data....</p>)}
    </div>
    </div>
);
}