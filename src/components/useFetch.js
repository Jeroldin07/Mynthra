import { useEffect, useState } from "react"

const Usefetch = (url) => {
    const[data,setdata]=useState(null)
    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then((resp)=>setdata(resp))

    },[url])

  return (
    [data]
  )
}

export default Usefetch