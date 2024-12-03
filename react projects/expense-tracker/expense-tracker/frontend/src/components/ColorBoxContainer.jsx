import ColorBox from "./ColorBox";
 import "../styles/ColorBox.css"
export default function ColorBoxContainer({colors}){
    const arr = [];
    for (let i=0;i<25;i++){
           arr.push(<ColorBox colors={colors}/>)
    }
    return(
        <div className="ColorBox">
            {arr}
        </div>
    )
}