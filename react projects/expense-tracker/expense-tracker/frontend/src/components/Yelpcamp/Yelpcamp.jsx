import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RecipeReviewCard from '../RecipeReviewCard';
function Yelpcamp() {
  const [expenses,setExpenses] = useState([]);
 const [res,setRes1] = useState([]);
  //imp---use of async function inside useEffect ,in order to use async function inside an useEffect we need to wrap it inside an normal function 

    useEffect(()=>{
     const fetchData = async()=>{
      try{
        const response = await axios.get('/api/expenses');
        console.log(response.data);
        setExpenses(response.data);    //setting the fetched expenses in an state variabel expenses
        const res1 = await axios.get('/api/campgrounds');
        setRes1(res1.data);
      }catch(error){
        console.log('errror occured',error);
      }
    }
    fetchData();

  
  },[]);
  return (
    <div className='flex flex-wrap '>    
      {/* {
        expenses.map((expense,index)=>(
          <RecipeReviewCard key={index} expense={expense}/>
        
        )
      )
      } */}

      {
        res.map((campground,index)=>(
          <div class="card " style={{color:'black'}} key={index} mb-3>
          <div class="row">
              <div class="col-md-4">
                  <img  class="img-fluid"  src={campground.images[0].url}  alt=""/>
              </div>
              <div class="col-md-8">
                  <div class="card-body">
                      <h2 class="card-text">{campground.title } </h2>
                      <p class="card-text">{ campground.description } </p>
                      <p class="card-text">
                          <small class="text-muted">{campground.location  } </small>
                      </p>
                      {/* <a  class="btn btn-primary" href=`/campgrounds/${campground._id}` >view { campground.title } </a> */}
                  </div>
              </div>
          </div>
      </div>
        ))
      }
    </div>
  )
}

export default Yelpcamp;


//----------------below is correct way of writing async function inside useEffect

  // // Use async function inside useEffect
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('/api/expenses');
  //       console.log(response);
  //       setExpenses(response.data); // Set the fetched expenses
  //     } catch (error) {
  //       console.error("Error fetching expenses:", error);
  //     }
  //   };

  //   fetchData();
  // }, []); // Empty dependency array means this effect runs once on mount



// useEffect(async()=>{
//   const response = await axios.get('/api/expenses');
//   console.log(response);
//   setExpenses(response.data);
// },[]);     //------this code is mistaken
// Handling Async inside useEffect
// In React, you can't directly pass an async function(as you have done above) to useEffect, because useEffect expects a cleanup function or undefined to be returned. Instead, you can define an inner function inside useEffect and call it asynchronously.

// 2. Returning JSX inside map
// You're not returning the JSX element inside your map function. In JavaScript, when you use the map() function, you need to explicitly return the JSX element for each item, otherwise, the map() will not render anything.

