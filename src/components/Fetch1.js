import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function AddCart() {
    
// api using in react
const useFetch = (url) => {
const [data, setData] =  useState(null)

useEffect(()=>{
  // const url = `https://fakestoreapi.com/products?limit=5`

  fetch(url).then(resp => resp.json())
  .then(resp => setData(resp));
},[url]);

return [data];
};
}
