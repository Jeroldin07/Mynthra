import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";


export default function AddCart() {
    
// api using in react
const [state, setState] =  useState([])

useEffect(function(){
  const url = `https://fakestoreapi.com/products?limit=5`

  fetch(url).then(resp => resp.json())
  .then(resp => setState(resp));
},[])

return (<>
  <div className="Addacard">
      {
        state.map(item => {
          return(
            <div className="d-flex m-auto mt-5" key={item.id} style={{
              width:'700px',
              height:'300px',
              
              marginBottom:'10px',
              
            }}>
              <div className=""><img src={item.image} style={{width:'230px', height:"290px", padding:'20px'}}/></div>
              <div className="bg-danger"  style={{width:'500px',height:'20rem',padding:'10px',borderRadius:'15px'}}>
              <div className="border border-black" style={{width:'480px',padding:'10px'}}>{item.title}</div>
              <div className="border border-black mt-2" style={{width:'480px',padding:'10px'}}> Price: {item.price} / Rating: {item.rating.rate} / Counts: {item.rating.count}</div>
              <div className="bg- mt-2 border border-black" style={{width:'480px',padding:'10px'}}>{item.description}</div>
              <Link to='/'></Link>
              <Button className="me-3" type="submit">Add</Button>
              <Button type="submit">Remove</Button>
              </div>
              
            </div>
            
          )
        })
      }
      

  </div>
  </>
  
)
}