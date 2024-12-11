import  "bootstrap/dist/css/bootstrap.min.css"
import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react"
import { createSearchParams, useNavigate } from "react-router-dom"



export default function ContentAllp() {

    const[data,setdata]=useState()
        useEffect(()=>{
            fetch("https://fakestoreapi.com/products")
            .then(res=>res.json())
            .then(ans=>setdata(ans))
            .catch(error=>console.log(error))
        },[])

        const navigate=useNavigate()
        const navi =(ids)=>{
        console.log("see",ids);
        navigate({
            pathname: '/productid',
            search: createSearchParams({id:ids}).toString(),
        })
}

    return(

        <div>

                {data ? (
                <ul className="WomenSecCard d-flex">
                {data.map((item) => (

                <div className="WdivCard mt-lg-5">
                <Card className="WCard " style={{ width: '20rem' }}>
                  <Card.Img className="WImgCard" style={{width:'19.9rem', height:'20rem'}} variant="top" src={item.image} />
                  <Card.Body className="Wcardbody">
                    <Card.Title className="" style={{width:'18rem', height:'8rem'}}>{item.title} </Card.Title>
                    
                    <div className="WDivCardText d-flex">
                    <Card.Text className="WCardText" variant="outline-secondary">Price- {item.price}</Card.Text><h4>/</h4>
                    <Card.Text className="WCardText" variant="outline-secondary">Rating- {item.rating.rate}</Card.Text><h4>/</h4>
                    <Card.Text className="WCardText" variant="outline-secondary">Count- {item.rating.count}</Card.Text>
                    </div>
                    <Button variant="secondary"  onClick={(event)=>navi(item.id)}>View Product</Button>
                  </Card.Body>
                </Card>
                </div>

                ))}
                </ul>
            ) : (
                <p className="display-6">Loading data...</p>
            )}


        </div>

    );
}