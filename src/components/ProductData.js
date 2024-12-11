import { useEffect, useState } from "react"

import Button from 'react-bootstrap/Button';
import { useLocation, useNavigate } from "react-router-dom";

 export default function Productdata(){
    const[data,setdata]=useState([])
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    console.log("sss",id)

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        .then(ans=>setdata(ans))
        .catch(error=>console.log(error))
        
    },[])
    const nav=useNavigate()
    return(
        
        <div>
                

                <div className="row">
                <h1 className="productdatatitle">Product Detail</h1>
                    <div className="col-5 mt-5" style={{height:'50rem'}}>
                        <img src={data.image} style={{width:'23rem',height:'30rem'}} className="productdataimage"/>
                    </div>
                    <div className="col-7-lg mt-5" style={{width:'50rem',height:'40rem',border:'1px solid'}}>
                        <h2 className="display-6" style={{marginTop:'60px'}}>{data.title}</h2>
                        <h6 className="m-auto mt-5" style={{marginTop:'40px',width:'20rem', fontSize:'40px'}}><b>Price: ${data.price}</b></h6>
                        <div className="m-auto mt-4 ">
                        <p className="me-3" style={{border:'1px solid',width:'10rem',display:'inline-block'}}>Rating : {data.rating && data.rating.rate}</p>
                        <p style={{border:'1px solid',width:'10rem',display:'inline-block'}}>Count : {data.rating && data.rating.count}</p>
                        </div>
                        <p style={{marginTop:'20px'}}>{data.description}</p>
                        <Button style={{marginTop:'30px'}} variant="outline-warning" onClick={()=>{nav("/AddCard")}} >Go to cart</Button>
                    </div>
                </div>
           
            <hr/>
          
        </div>
    )
}
