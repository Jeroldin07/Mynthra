import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Mens from "./Mens";
import Content from "./content";
import Womens from "./Womens";
// import Kids from "./Kids";
// import Home from "./Home";
import Signin from "./Signin";
import SignOut from "./Signout";
import Electronics from "./Home";
import Jewelery from "./Kids";
import AddCart from "./Addcard";
import Productdata from "./ProductData";
import ContentCat from "./ContentCat";
import ContentAllp from "./ContentAllp";
import Slidercard from "./Slider/carousel";


export default function Router1(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Content/>} />
                    <Route path='/Mens' element={<Mens/>} />
                    <Route path='/Womens' element={<Womens/>} />
                    {/* <Route path='/Kids' element={<Kids/>} /> */}
                    <Route path='/jewelery' element={<Jewelery/>} />
                    {/* <Route path='/Home' element={<Home/>} /> */}
                    <Route path='/electronics' element={<Electronics/>} />

                    <Route path='/Signin' element={<Signin/>} />
                    <Route path='/Signout' element={<SignOut/>} />
                    <Route path='/AddCard' element={<AddCart/>} />
                    <Route path="/productid" element={<Productdata />} />
                    <Route path="/catgory" element={<ContentCat/>} />
                    <Route path="/ContentAllp" element={<ContentAllp/>} />
                    <Route path="/Slidercard" element={<Slidercard/>} />

                    
                </Route>
            </Routes>
        </BrowserRouter>
    )
}