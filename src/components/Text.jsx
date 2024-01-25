import React from "react";
import { useState } from "react";
import Draggable from "react-draggable"

const Text=()=>{
    const [editMode,setEditMode]=useState(false);
    const[value,setvalue]=useState("double click to edit");
    return(
     <Draggable>
      {
       (editMode?(<input onDoubleClick={(e)=>setEditMode(false)} value={value}
         onChange={(e)=>setvalue(e.target.value)}/>):(<h1 onDoubleClick={()=>setEditMode(true)}>{value}</h1>))
      }
    </Draggable>
    );
}
export default Text;