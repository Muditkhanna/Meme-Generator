import React,{useEffect, useState} from "react";
import MemeCard from "../components/Card";
import { getAllMemes } from "../api/Memes";
const HomePage=()=>{
    const [data,setdata]=useState([]);
    useEffect(()=>{
     getAllMemes()
     .then((fun)=>setdata(fun.data.memes));
    },[]);
    return(
    <div className="row">
        {data.map((e)=>{
         return <MemeCard img={e.url} title={e.name}/>
        })}
    </div>
    )
}
export default HomePage;