import React from 'react'
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';
function Checked() {
  return (
    <>
    {/* <div className='bg-blue-600 border-8 border-orange-900'>Cheecked</div> */}
    <Header/>
    <div className='bg-red-300 w-full'>
    <Home/>
    </div>
    <Footer/>
    </>

)
}

export default Checked