import React, { useState } from 'react'

function BgChanger() {
    const arry = [
        { color: "#F7B7A3", name: "Peach" },
        { color: "#A3D2CA", name: "Seafoam" },
        { color: "#E1C6E7", name: "Lavender" },
        { color: "#FFD166", name: "Sunshine" },
        { color: "#06D6A0", name: "Mint" },
        { color: "#4ECDC4", name: "Turquoise" }
      ];
          
const [colorVar,setColorVar]= useState('olive')

const handleClick = (color)=>{
     setColorVar(color.color);
}
  return (
    <div className={`w-full h-screen flex items-end duration-200`} style={{backgroundColor:colorVar}}> 
        <div className='bg-white mx-auto mt-auto mb-3 flex  justify-evenly max-w-lg p-3 rounded-md '>
            {arry.map((color,index)=>(
                <div key={index} className={`bg-red-500 mx-1 {/*bg-${color.name}*/} rounded-md p-2`} style={{backgroundColor:color.color}} onClick={()=>handleClick(color)}>{color.name}</div>
            ))}
        </div>
    </div>
  )
}

export default BgChanger;




//brainstorm Q - refresh karane ke bad screen ka background color olive kyu ho ja raha hai ?
//ans--Actually the initial state has color olive and the reload technically resets the state. So, it gets the olive color.

// Why the background color resets to "olive" on page refresh:
// Initial State: In your code, useState('olive') sets the initial background color to "olive". This happens every time the component is first rendered, including after a page refresh.
// User Interaction: When a user clicks on a color option, the state (colorVar) is updated with the selected color, causing the background to change.
// Page Refresh: On page refresh, React resets the state to its initial value ('olive'), causing the background color to revert back to "olive".
// What happens behind the scenes:
// Initial Load: React initializes the state (colorVar) with 'olive', so the background is initially set to "olive".
// User Click: Clicking a color updates the state with the selected color, and the component re-renders with the new background color.
// Page Refresh: When the page refreshes, React loses all state, so the background color resets to the initial value ('olive').
// To Persist the Color After Refresh:
// Use localStorage or sessionStorage to store the selected color so it persists even after the page reloads. This allows you to retrieve the last selected color when the component re-renders.