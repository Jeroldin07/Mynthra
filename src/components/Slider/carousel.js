import React from 'react';
import './carousel.css';
import  "bootstrap/dist/css/bootstrap.min.css"
import Card from 'react-bootstrap/Card'
import { createSearchParams, Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';


export default function Slidercard(){

    let items = document.querySelectorAll('.carousel .carousel-item')

		items.forEach((el) => {
			const minPerSlide = 4
			let next = el.nextElementSibling
			for (var i=1; i<minPerSlide; i++) {
				if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

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


    return(<>


    <div class="container text-center my-3">
		<div class="row mx-auto my-auto justify-content-center">
			<div id="recipeCarousel" class="carousel slide" data-bs-ride="carousel">
				<div class="carousel-inner" role="listbox">
                {/*-------------------------------------------------*/}

                <div className="carousel-item active">

                {data ? (
                <ul className="WomenSecCard d-flex carousel-item active">
                {data.map((item) => (

                <div className="col-md-3">
                <Card className="card"  onClick={(event)=>navi(item.id)}>
                <Card.Img className="WImgCard" style={{width:'19.9rem', height:'20rem'}} variant="top" src={item.image} />
                </Card>
                </div>

                ))}
                </ul>
                ) : (
                <p className="display-6">Loading data...</p>
                )}
                </div>

                {/* ------------------------------------------------- */}
					
				<a class="carousel-control-prev bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				</a>
				<a class="carousel-control-next bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
				</a>
			</div>
		</div>		
	</div>

    </div>

    </>);
}