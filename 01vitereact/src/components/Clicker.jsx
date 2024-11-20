
export default function Clicker({message,text}){
    function handleClick(){
        alert(message);
    }
    return(

         <div>
             <button onClick={handleClick}>{text}</button>
         </div>
        
    )
}