import { useState } from "react";
import "../styles/ColorBox.css"
export default function ColorBox({colors}){
    const[colori, setColor] = useState("red");
    const handleClick = ()=>{
        const rand = Math.floor(Math.random()*colors.length)+1;
        const color = colors[rand];
        setColor(color);
        const box = document.getElementById('#box');
        box.style.backgroundColor = color;   

    }
    return(
       <div  onClick={handleClick} id="box" style={{backgroundColor:colori, width:"165px", height:"165px"}  }>
           hii
       </div>
    )
}