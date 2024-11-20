import { useState } from 'react'
// import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <Header/>
   </Router>
        )
}

export default App
