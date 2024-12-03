import InputSlider from "./InputSlider"
import { useState ,useCallback, useEffect, useRef} from "react"
export default function PasswordGenerator(){
    const [state, SetState] = useState({password:"",length:8,numberAllowed:false,characterAllowed:false})
    //useRef hook
    const passwordRef = useRef(null)  //ab mere pass passwordRef ke andar koi reference nai hai 
    const passwordGenerator = useCallback(()=>{
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let pass = "";
        if(state.numberAllowed) str += "0123456789";
        if(state.characterAllowed) str += "!@#$%^&*-_+=[]{}~`";

        for(let i = 1 ; i<=state.length ; i++){
            let char = Math.floor(Math.random()*str.length+1);
            pass += str.charAt(char);

        }
             SetState((prev)=>({...prev,password:pass}));
        
    },[state.length,state.numberAllowed,state.characterAllowed]);
    
    //copy password to clipboard
    const copyPasswordToClipboard = useCallback(()=>{
        if(state.password){
            // passwordRef.current.focus();
            passwordRef.current?.select();
            // passwordRef.current?.setSelectionRange(0,6);  iit selects input field in only certain range define in setSelectionRange function 
            window.navigator.clipboard.writeText(state.password)
            //    .then(()=>alert('password copied to clipboard'))
            //    .catch(()=>alert('failed to copy password'));
        }
        else{alert('password is not present ')};

    },[state.password]);
//window.navigator.clipboard.wriiteText(state.password)-----iskii jo writeText method hai vo password ko clipboard par likh  dega .aise hi readText bhi ek mehtod hoti hai (clipboard ki jo ki js provide karata hai )
    // Clipboard API usage:
// The window.navigator.clipboard.writeText function works asynchronously.

    useEffect(()=>{
        passwordGenerator();
    },[state.length,state.numberAllowed,state.characterAllowed]);
    return(
        <div>
                    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500"> 
                    <h1 className="text-2xl text-white my-3 text-center">Password Generator</h1>
                    <div className="flex shadow mb-4 overflow-hidden rounded-lg">
                        <input type="text" 
                          value={state.password}
                        //   onChange={(e)=>SetState(state.password=e.target.value)}        -------this is wrong way of updating password by the way youu werent actually needed to change password here by calling onchange 
                          placeholder="password"
                          readOnly
                          className="w-full py-1 px-3 outline-none"
                          ref={passwordRef}
                        />
                        <button className="outline-none bg-blue-700 text-white px-3 py-0.5" onClick={copyPasswordToClipboard}>copy</button>
                    </div>
                    <div className="flex gap-x-2 text-sm">
                        <div className="flex items-center gap-x-1">
                            <input type="range"
                                value={state.length}
                                onChange={(e)=>SetState((prev)=>({...prev,length:e.target.value}))}
                                id="range"
                            />
                            <label htmlFor="range">length : {state.length}</label>
                            <div className="flex gap-x-2 text-sm">
                                <input type="checkbox"
                                   checked={state.numberAllowed} 
                                //    onChange={SetState((prev)=>({...prev,numberAllowed:!numberAllowed}))}
                                //the above line is wrong it will immedeately execute the setState fuction you re writing as setState() youu need to write that inside callback then it will run on onChange event ritht now it will run immedeately in above case
                                   onChange={()=>SetState((prev)=>({...prev,numberAllowed:!prev.numberAllowed}))}
                                   id="rad1"
                                   />
                                   <label htmlFor="rad1">Number</label>
                            </div>
                            <div className="flex gap-x-2 text-sm">
                                <input type="checkbox"
                                 checked={state.characterAllowed}
                                //  onChange={SetState((prev)=>({...prev,characterAllowed:!characterAllowed}))}
                                //the above line is wrong to you have done same mistake here in this case too
                                onChange={()=>SetState((prev)=>({...prev,characterAllowed:!prev.characterAllowed}))} 
                                 id="rad2"/>
                                 <label htmlFor="rad2">character</label>

                            </div>
                        </div>

                    </div>

                    </div>

        </div>
    )
}



//-------------------noptes---------------------------
// Correct use of checked for radio buttons:
// Instead of defaultChecked, use checked because you're directly controlling the state (numberAllowed and characterAllowed) via React state.
// Fixed onChange handlers:
// The onChange handlers for the radio buttons now correctly toggle the state. The onChange handler updates the state for numberAllowed and characterAllowed when the radio buttons are clicked. The SetState function is used to toggle these values properly by using the !prev.numberAllowed or !prev.characterAllowed pattern.
// Explanation:
// Radio Buttons: The checked attribute makes sure the radio buttons reflect the current state (numberAllowed and characterAllowed). The onChange updates the respective state when clicked, toggling between true and false.

// defaultChecked: This attribute is used to set the initial checked state of an element when it is first rendered. It does not change after the component mounts; it sets the default state, but any subsequent changes to the state of the checkbox are not reflected. This is typically used in uncontrolled components, where React doesn’t manage the state of the element after it's rendered.
// checked: This is a controlled attribute. React uses checked to bind the checkbox state to a React state variable. Whenever the checkbox is clicked, the state updates, and the checkbox reflects this change. It requires you to explicitly manage the state of the checkbox using React's state and event handlers.


{/* <input type="radio" onChange={SetState((prev) => !prev)} />
This code is problematic because SetState is directly executed inside the onChange handler(it should be wrapped inside 
callback so that it will only execute when user clicks that is onchange event fires), causing a re-render every time a user interacts with the input. React re-renders the component, and the state update triggers the onChange event again, causing an infinite loop.

Why It Happens:
React state updates are asynchronous and cause a re-render of the component. When you call SetState((prev) => !prev), it sets the new state value, which triggers a re-render, and this new render runs the onChange again. This cycle keeps repeating itself until React hits the maximum render limit, leading to the error. */}
{/* <input
  type="radio"
  onChange={() => SetState((prev) => ({ ...prev, numberAllowed: !prev.numberAllowed }))}
/>
This way, you correctly toggle the state of numberAllowed without causing the infinite re-render issue. The state is updated only when the user clicks the radio button, and React will no longer continuously re-render the component. */}

//---dependencies in the dependenci arrey of hooks(usecallback,useeffect,etc) means aise state variables(aur bhii bahot chije hoti hai ) jo agar change hue to useEffect/useCAllback run hoga otherwise har ek re-render par vo ruun nai hoga vo sirf tabhi run hoga jab ye deepndencies maise koi change hua hoga to  
//useCallback mai , hamne jo dependencies array mai jo bhi diya hai vo agar change nai hote hai to subsequent re-renders mai react cash mai jo fn store kiya vahi return kar dega otherwise agar dependencies mai kkuch change hua to ye jo fn useCallback mai pass kiya hai vo run karega --ise ye funcion optimise hota hai 
// React will compare each dependency with its previous value using the Object.is comparison algorithm.
//Returns 
// On the initial render, useCallback returns the fn function you have passed.
// During subsequent renders, it will either return an already stored fn  function from the last render (if the dependencies haven’t changed), or return the fn function you have passed during this render.
// useEffect(()=>{
//     passwordGenerator();
// },[state.length,state.numberAllowed,state.characterAllowed,state.password])
//------------the above one is wrong code you can'tt pass state.password in dependencies array
// useEffect(() => {
//     passwordGenerator();
// }, [state.length, state.numberAllowed, state.characterAllowed]); // Removed state.password from the dependencies

// The issue is caused by the useEffect hook that triggers the passwordGenerator function whenever the state.password value changes. This results in an infinite loop because updating the password (state.password) inside passwordGenerator will trigger useEffect, which calls passwordGenerator again, and the cycle repeats indefinitely.
// Remove state.password from the dependency array of useEffect: Since you don't need to trigger passwordGenerator when the password itself changes, you should only trigger it when the settings like length, numberAllowed, or characterAllowed change.

// Use a useCallback for passwordGenerator to avoid re-creation: Since you already have useCallback, it helps optimize performance, but you don't need to include state.password in its dependencies either. The password will be updated when required inside the passwordGenerator function.


// useEffect(() => {
//     passwordGenerator()
//   }, [length, numberAllowed, charAllowed, passwordGenerator])
// yaha par sar ne passwordGenerator isliye pass kiya hai taki vo optimise ho ssake 
// taki vo cach(memory) mai store ho sake , agar tumne passwordGenerator/setPassword ko 
// dependdneci array mai nai bhi dala to koi farak nai padega passwordGenerator
// ki functionality par ,ye vaha par sirf optimisation keliye add kiya gaya hai 

// useRef hook--kisi bhi chij ka jab mujhe Reference lena hota hai tab useRef hook ata hai 
//    const passwordRef = useRef(null)  //ab mere pass passwordRef ke andar koi reference nai hai 
// agar aapko koii bhii aisa refersence lena hai to kaise dete ahi har ek input ya har ek argument ke andar aap ek ref pass kar sakte ho ek reference vo reference kya hai vahi jo variable  bana hai passwordRef


//next.js mai jo code hota hai vo 

//useRef--is hook ko use karane keliye apko use ek variable banana padata hai 

//ham state ko jab bhi change karate hai tab vo re-render trigger karata hai ,strict mode ko hatana nai chahiiye jab aap development enviironment ho , production environment ap isko hata sakate ho 
//hamne state ko change kiya to rerender hota hai par hamane ref ko change kiya to component re-render nai hota hai 

//useRef----- across re-renders usaki value persist kar jatii hai ,matlabe re-renders huye bhi tobhi usaki value change nai hoti ,ham kisi bhi ek dom element ko access kar sakate hai ref.cuurent kaar ke (refer harry bhai lecture)
//ham kisi bhi ek dom elment ko access kar sakate hai ref.current karake kahi par bhi in code 
// एक एलिमेंट को मुझे
// एक्सेस करना पड़ रहा है बार-बार बार-बार
// बार-बार मैं क्या कर सकता हूं उसका रेफ
// बना सकता हूं और फिर रेफ डॉट करंट करके उस
// एलिमेंट को मैं रेफरेंस कर सकता हूं अब
// आप
// reफ डॉट करंट को चेंज तो कर सकते हो लेकिन
// चेंज करने से आपका कंपोनेंट री रेंडर नहीं
// होगा



// The statement passwordRef.current?.select(); is a JavaScript/React expression that uses optional chaining (?.) to ensure safe access to the select() method of an input element, referenced by passwordRef. Here's a breakdown:

// passwordRef.current:

// passwordRef is a reference created using the useRef() hook in React. It typically points to a DOM element, in this case, an input field.
// The current property of passwordRef holds the actual DOM element.
// ?. (Optional Chaining):

// This ensures that the select() method is only called if passwordRef.current is not null or undefined.
// If passwordRef.current is invalid (e.g., not yet attached to a DOM element), the expression short-circuits, and no error is thrown.
// select():

// The select() method is a standard DOM method for <input> or <textarea> elements. It highlights (selects) all the text inside the field, making it easier for users to copy.
// const copyToClipboard = () => {
//     passwordRef.current?.select(); // Selects the text
//     document.execCommand("copy");  // Copies it to the clipboard
//   };
  
//dependencies are values inme agar kuch bhi chedchad hui to method vapise re-run hota hai ,method run hoga ya nai ye inpe depend hota hai dependencies pe
//Dependencies in React are values (state, props, or other variables) that determine when a hook should re-run.
// The dependencies array is a way to tell React to only run a hook when certain values change, helping to optimize performance.
// Common hooks that use dependencies: useEffect, useMemo, and useCallback.