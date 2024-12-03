import React, { useCallback, useEffect, useState,useRef } from 'react'
import InputSlider from '../InputSlider'
import BasicButtons from '../BasicButtons'
function PasswordGenerator1() {
  const [pass,setPass] = useState('sfhjso');
  const [allow,setAllow] = useState({charAllow:true,numAllow:true,length:6})
  const passRef = useRef();
  // const passwordGeneratorFunc = ()=>{
  //   let   str = 'abcdefghijklmnopqrstuvwxyz';
  //   const num = '1234567890';
  //   const char = '!@#$%^&*()_+?-';
  //    let  finalString ='';

  //   if(allow.charAllow ){
  //         str += char;
  //   }
    
  //   if(allow.numAllow){
  //         str += num
  //   }-------------mine

  const passwordGeneratorFunc = useCallback(()=>{
    let   str = 'abcdefghijklmnopqrstuvwxyz';
    const num = '1234567890';
    const char = '!@#$%^&*()_+?-';
     let  finalString ='';

    if(allow.charAllow ){
          str += char;
    }
    
    if(allow.numAllow){
          str += num
    }

    // if(allow.charAllow && allow.numAllow){
    //     str += char;
    //     str += num;
    // }-----------------------------------------------------mistake---Redundant conditions: The if (allow.charAllow && allow.numAllow) block is unnecessary since the individual if conditions for charAllow and numAllow already handle this case.
  //  const rand = Math.floor(Math.random*str.length);
  //  for(let i=0 ; i<= allow.length ; i++){
  //    finalString += str[rand]
  //  }------------------------------------------------------mistake---forgotton parens after Math.random


   for(let i=1 ; i<= allow.length ; i++){
    const rand = Math.floor(Math.random()*str.length);
     finalString += str[rand]
   }

     setPass(finalString);
  },[allow.charAllow,allow.numAllow,allow.length,setPass])

  // const handleChange = (e)=>{
  //   setAllow((prevState)=>(
  //       {...prevState, [e.target.name]: e.target.value}
  //   ))
  // }--------------------------------------------------------mistake---Checkbox value issue: When handling checkboxes in React, the value being passed should be checked (boolean), not value. So in handleChange, use e.target.checked to update the state, not e.target.value.

    const handleChange = (e)=>{
    setAllow((prevState)=>(
        {...prevState, [e.target.name]: e.target.checked}
    ))
  }
  const handleChangeLength=(newVal)=>{
    setAllow((prevState)=>(
      {...prevState,length:newVal}
    ))
  }
// useCallback(()=>{
//     passwordGeneratorFunc();
// },[allow,pass]);//------------mine
  // useEffect(()=>{
  //   passwordGeneratorFunc();
  // },[allow])---------------mine

  // const handleCopy = ()=>{
  //   if(pass){
  //     passRef.current.select();
  //     window.navigator.clipboard.writeText(pass);
  //   }else{alert('password is not present')}
  // }//------------------------mine below is improved according to sir

  const handleCopy = useCallback(()=>{
    if(pass){
      passRef.current?.focus();
      passRef.current?.select();
      window.navigator.clipboard.writeText(pass);
    }
    else{alert('password is not present')}
  },[pass]);

  useEffect(()=>{
    passwordGeneratorFunc();
  },[allow])

  //----------------------note------------------------------------------------------------------------------
//   The error is happening because you're trying to use e.target.name as a key in an object spread ({...prevState, e.target.name: e.target.value}). In JavaScript, object keys should be defined as a string or variable inside square brackets if they are dynamic. You cannot directly use e.target.name like this.

// To fix the issue, you need to use square brackets to evaluate e.target.name as a dynamic key:

// javascript
// Copy code
// const handleChange = (e) => {
//   console.log('event is ', e);
//   setAllow((prevState) => ({
//     ...prevState,
//     [e.target.name]: e.target.value  // Correct way to use dynamic keys
//   }));
// }
// Here, [e.target.name] ensures that the key is dynamically assigned based on the name attribute of the input element, and it will correctly update the state with the input field's value.
//---------------------------------------------------------------------------------------------------------

  return (
    <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <div className='flex shadow rounded-lg overflow-hidden mb-4 gap-4'  >
       <input type="text" id='inp' value={pass} readOnly ref={passRef}/>
        <BasicButtons btnText="copy" copyFunc={handleCopy}/>
        </div>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 gap-4">
            <div>
            <InputSlider handleChangeInParent={handleChangeLength}/>
            </div >
            <div>
            <label htmlFor="checkbx">Character</label>
            <input className='mx-1' type="checkbox" id="checkbx" name='charAllow' checked={allow.charAllow} onChange={handleChange}/>
            <label htmlFor="kbx">Number</label>
            <input className='mx-1' type="checkbox" id="kbx " name='numAllow' checked={allow.numAllow} onChange={handleChange}/>
            </div>
        </div>
    </div>
  )
}

export default PasswordGenerator1


//----------------------note on e.target--accesing properties of elment throgh evt object------------------

// Yes, you can get the name property of an <input> element from the event object in JavaScript. When an event (like a click or input event) is triggered, the event object contains a reference to the element that triggered the event, accessible via event.target. This reference allows you to access any property of the element, including the name attribute.

// Here's an example:

// javascript
// Copy code
// document.querySelector('input').addEventListener('click', function(event) {
//   console.log(event.target.name); // Logs the name attribute of the clicked input element
// });
// In this case, event.target will reference the <input> element that was clicked, and you can access its name property as event.target.name. This works for most events, including click, input, and others that involve interaction with form elements 


//---------------second argument in slider automatically passed ------------------

// In React, when using a Slider component, the onChange event handler typically receives two arguments:

// The event object (first argument) — This contains details about the event that triggered the change, such as event.target or event.currentTarget.
// The new value (second argument) — This is the updated value of the slider after the user moves it. This value is passed automatically by the Slider component.
// If you're not seeing the second argument in your handler function, it's likely due to one of the following reasons:

// Arrow Function Used Inside onChange: If you use an arrow function or a regular function in your onChange handler, make sure it includes the second argument. Here's an example:

// jsx
// Copy code
// const handleSliderChange = (event, newValue) => {
//   setValue(newValue); // 'newValue' is the second argument
// };
// Destructuring or Syntax Issue: If you're not explicitly showing the second argument in the function signature, ensure your syntax is correct. For example, if you're omitting it or destructuring incorrectly, React might not pass it as expected.

// Different Slider Component: Some custom sliders might not pass the second argument by default, so check the documentation to ensure it supports the expected behavior.

// Solution Example:
// jsx
// Copy code
// <Slider
//   value={value}
//   onChange={(event, newValue) => setValue(newValue)}  // newValue is automatically passed here
// />


//---------------------------the error was occuring when i wrote useEffect before handleCopy----------------------=---------------
//error was that handleCopy is being used before it is declared 

// The error you are seeing, handleCopy is not defined, occurs because the handleCopy function is referenced before its definition or it is being used incorrectly. From your code, it looks like you are trying to use handleCopy inside the PasswordGenerator1 component, but it isn't properly scoped or declared before it is used in the JSX return statement.

// Fix:
// You have declared handleCopy as a useCallback function, but it seems it is referenced outside the component's scope or not properly defined when needed. The handleCopy function should be placed before it is used in the JSX code. Additionally, make sure that the function is correctly passed down to BasicButtons.

// Here's a corrected version of your component:

// javascript
// Copy code
// import React, { useCallback, useEffect, useState, useRef } from 'react';
// import InputSlider from '../InputSlider';
// import BasicButtons from '../BasicButtons';

// function PasswordGenerator1() {
//   const [pass, setPass] = useState('sfhjso');
//   const [allow, setAllow] = useState({ charAllow: true, numAllow: true, length: 6 });
//   const passRef = useRef();

//   const passwordGeneratorFunc = useCallback(() => {
//     let str = 'abcdefghijklmnopqrstuvwxyz';
//     const num = '1234567890';
//     const char = '!@#$%^&*()_+?-';
//     let finalString = '';

//     if (allow.charAllow) {
//       str += char;
//     }
//     if (allow.numAllow) {
//       str += num;
//     }

//     for (let i = 1; i <= allow.length; i++) {
//       const rand = Math.floor(Math.random() * str.length);
//       finalString += str[rand];
//     }

//     setPass(finalString);
//   }, [allow]);

//   const handleChange = (e) => {
//     setAllow((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.checked,
//     }));
//   };

//   const handleChangeLength = (newVal) => {
//     setAllow((prevState) => ({
//       ...prevState,
//       length: newVal,
//     }));
//   };

//   const handleCopy = useCallback(() => {
//     if (pass) {
//       passRef.current?.select();
//       window.navigator.clipboard.writeText(pass);
//     } else {
//       alert('Password is not present');
//     }
//   }, [pass]);

//   useEffect(() => {
//     passwordGeneratorFunc();
//   }, [allow]);
