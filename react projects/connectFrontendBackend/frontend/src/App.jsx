import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
function App() {
const [quotes,setQuotes] = useState([]);
useEffect(()=>{
  axios.get('http://localhost:3000/quotes')
  .then((Response)=>{setQuotes(Response.data)
        console.log("data is here ",Response.data)
})
  .catch((error)=>console.log(error));
},[]);
  return (
    <>
     <h1>Mai aur FullStack(tanttdan) With React!!</h1>
     <p>{
           quotes.map((quote)=>(
            <div key={quote.id}>
              <h1>{quote.title}</h1>
              {quote.content}</div>
           ))
      }</p>
    </>
  )
}

export default App

// wrong code
// useEffect(()=>{
//   axios.get('http://localhost:3000/quotes')
//   .then((Response)=>(setQuotes(Response.data)
//         console.log("data is here ",Response.data)
// ))
//   .catch((error)=>console.log(error));
// },[])

// Replaced parentheses with curly braces: In the .then() method, when you have more than one line of code (like setQuotes() and console.log()), you need to use curly braces {}.

//correct code
// useEffect(() => {
//   axios.get('http://localhost:3000/quotes')
//     .then((Response) => {
//       setQuotes(Response.data);
//       console.log("data is here ", Response.data);
//     })
//     .catch((error) => console.log(error));
// }, []);