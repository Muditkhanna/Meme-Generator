import { Button } from "react-bootstrap";
import React, { useState,createRef } from "react";
import {useSearchParams} from "react-router-dom"
import Text from "../components/Text";
import Draggable from "react-draggable";
import {exportComponentAsJPEG} from "react-component-export-image"
const EditPage=()=>{
    const [params]=useSearchParams();
    const [count,setcount]=useState(0);

    const memeref=createRef();
    const addText=()=>{
     setcount(count+1);
    }
    return (
    <div className="meme mt-5 mb-5">
     
     <div style ={{height:"35%",width:"60%",border:"1px solid"}}ref={memeref}>
        <Draggable>
      <img src={params.get("url")} width="25%" />
        </Draggable>
      {
        Array(count).fill(0).map((e)=><Text/>)
      }
     </div>
     
     <Button onClick={addText}>Add Text</Button>
     <Button variant="success" onClick={(e)=>exportComponentAsJPEG(memeref)}>Save</Button>
    </div>
    );
    
}
export default EditPage;