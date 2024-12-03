import { useState } from "react";
import BasicButtons from "./BasicButtons";
import "../styles/BackgroundChanger.css";
export default function BackgroundChanger({colors}){
    // const [color, setColor] = useState(colors);

  const  handleClick = (bgcolor)=>{
    console.log("color changed !!!!!!!!!!!!");
          document.body.style.backgroundColor = bgcolor;
    }
    return(
        <div className='BackgroundChanger w-full h-screen' style={{marginTop:'auto'}}>
            <div className="flex flex-wrap flex-direction:row mt-auto justify-items-center mx-auto p-2 gap-3 shadow-lg bg-white rounded-2xl customClassByMe">
            {colors.map((colori,indx)=>(
            <BasicButtons className ='basicButtons rounded-full mx-10' key={indx} bgColor={colori} clickFunc={handleClick}/>

            ))}
            </div>

        </div>
    )
}






//mmy mistakes while building this component 

// export default function BackgroundChanger({colors}){
//     const [color, setColor] = useState(colors);
//     handleClick = (bgcolor)=>{
//           document.body.style.backgroundColor = bgcolor;
//     }
//     return(
//         <div className='w-full h-screen bg-blue-500' style={{backgroundColor:none}}>
//             {color.map((colori,indx)=>(
//             <BasicButtons bgColor={colori[indx]} onClick={()=>(handleClick(colori[indx]))}/>

//             ))}
//         </div>
//     )
// }