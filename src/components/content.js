import  "bootstrap/dist/css/bootstrap.min.css"
import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom"
import img1 from './Articles/Men6card.jpg'
import img2 from './Articles/Women4card.webp'
import img3 from './Articles/jewellery1.jpg'
import img4 from './Articles/Electronics.webp'
import Carousel from 'react-bootstrap/Carousel';
import slid1 from './Articles/slide4.jpg'
import slid2 from './Articles/slide05.jpg'
import slid3 from './Articles/slide6.jpg'
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react"
import ContentAllp from "./ContentAllp"
import ContentCat from "./ContentCat"


export default function Content() {

    
 

    return(
        <>


        <h1 className="mt-5 display-6 sm-12 ">Welcome to Mynthra Grand Festival Session</h1>
    
        <div className="">
        <Carousel className="m-auto ms-5">
            <Carousel.Item className="slidcard" interval={2000}>
                <img className="slidimg" src={slid1} />
                
            </Carousel.Item>

            <Carousel.Item className="slidcard" interval={2000}>
                <img className="slidimg" src={slid2} />
                
            </Carousel.Item>

            <Carousel.Item className="slidcard" interval={2000} >
                <img className="slidimg" src={slid3} />
                
            </Carousel.Item>
        </Carousel>
        </div>
{/* ---------------------- */}
        <div>
          <ContentCat/>
        </div>
{/* -------------------- */}

        <div className="divcards d-sm-none">
           

            <div className="divc1">
            
            <Card style={{ width: '20rem' }} className='card1 ms-lg-5'>
            <Link to='/Mens' className="cardlinks text-secondary" >
                    
                    <Card.Img style={{width: '19.9rem', height:'20rem'}} className="img01" variant="top" src={img1} /> 
                    <Card.Body className='cardbody1'>
                        <Card.Title className="text-black">Mens</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
            </Link>
            </Card>
            
            </div>
            {/* ---------------- */}
            <div className="divc2">
            
            <Card style={{ width: '20rem' }} className='card2'>
            <Link to='/Womens' className="cardlinks text-secondary">
                    <Card.Img style={{width: '19.9rem', height: '20rem'}} className="img02" variant="top" src={img2} /> 
                    <Card.Body className='cardbody2'>
                        <Card.Title className="text-black">Womens</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
            </Link>
            </Card>
            
            </div>
            {/* --------------- */}
            <div className="divc3">
            
            <Card style={{ width: '20rem' }} className='card3'>
            <Link to='/jewelery' className="cardlinks text-secondary">
                    <Card.Img style={{width: '19.9rem', height: '20rem'}} className="img03" variant="top" src={img3} /> 
                    <Card.Body className='cardbody3'>
                        <Card.Title className="text-black">Jewelery</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
            </Link>
            </Card>
            
            </div>
            {/* -------------- */}
            <div className="divc4">
           
            <Card style={{ width: '20rem' }} className='card4'>
            <Link to='/electronics' className="cardlinks text-secondary">
                    <Card.Img style={{width: '19.9rem', height: '20rem'}} className="img04" variant="top" src={img4} /> 
                    <Card.Body className='cardbody4'>
                        <Card.Title className="text-black">Electronics&Gadgets</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
            </Link>
            </Card>
            
            </div>
        </div><hr className="mt-5"/>
{/* ----------------------------------------------- */}
      <div>
      <ContentAllp/>
      </div>
        

        </>
        
    )
}