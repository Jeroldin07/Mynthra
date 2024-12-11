import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom"
import  "bootstrap/dist/css/bootstrap.min.css"
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react"
import img1 from './Articles/Men6card.jpg'

export default function ContentCat() {
        const[data,setdata]=useState()
        useEffect(()=>{
            fetch("https://fakestoreapi.com/products/categories")
            .then(res=>res.json())
            .then(ans=>setdata(ans))
            .catch(error=>console.log(error))
        },[])
    return(
        <>
        
        <div className="divcards m-auto d-flex">
           
            {data ? (
              <ul className="maincard d-flex">{data.map((item,index)=>(<div key={index}>
            <div className="divc1 d-flex">
            <Link to={'#'} className="cardlinks text-secondary" >
            <Card style={{ width: '20rem', height:'25rem' }} className='card1 m-5 ms-lg-5'>
            
                    
                    <Card.Img style={{width: '19.9rem', height:'20rem'}} className="img01" variant="top" src={img1} /> 
                    <Card.Body className='cardbody1'>
                        <Card.Title className="text-black">{item}</Card.Title>
                    </Card.Body>
            
            </Card>
            </Link>
            </div>
            </div>))}
            </ul>
            ):(<p>Loading...</p>)}
            
        </div><hr className="mt-5"/>
        </>
    )
}