// import { useState } from 'react'
// import { useState } from "react"
// import RecipeReviewCard from "./components/RecipeReviewCard"
// import BasicButtons from "./components/BasicButtons"
// import BackgroundChanger from "./components/BackgroundChanger"
// import ImgMediaCard from "./components/ImgMediaCard"
import PropertyList from "./components/PropertyList"
import Clicker from "./components/Clicker";
import ColorBoxContainer from "./components/ColorBoxContainer";
import BackgroundChanger from "./components/BackgroundChanger";
import PasswordGenerator from "./components/PasswordGenerator";
import Checked from "./components/Checked";
import bgChanger from "./components/BgChanger";
import BgChanger from "./components/BgChanger";
import PasswordGenerator1 from "./components/PasswordGenerator(useCallbackUsed)/PasswordGenerator1";
const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];
const Img = [
  "https://images.pexels.com/photos/53464/sheraton-palace-hotel-lobby-architecture-san-francisco-53464.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/944463/pexels-photo-944463.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg?auto=compress&cs=tinysrgb&w=600"
]
const colors  = [
  '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D'
];

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div >
      {/* <h1 className="bg-green-400 text-black rounded-xl "> Tailwind</h1>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/28958104/pexels-photo-28958104/free-photo-of-stunning-sunset-over-lake-powell-in-utah.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>
     <RecipeReviewCard/>
     <BasicButtons/> */}

     {/* <BackgroundChanger/> */}
     {/* <PropertyList properties={properties} images={Img}/> */}
     {/* <Clicker message="hi there" text="click me"/> */}
     {/* <Clicker message="hellow there" text="do not click me"/> */}
     {/* <ColorBoxContainer colors={colors}/> */}
     {/* <ImgMediaCard/> */}
     {/* <BackgroundChanger colors={colors}/> */}
     {/* <PasswordGenerator /> */}
     {/* <Checked/>. */}
     {/* <BgChanger/> */}
     <PasswordGenerator1/>
    </div>
  )
}

export default App









//--------------interview qustion -------------------------

// function random(){
//   const [state, setState ] = useState(0)
//   const addValue() {
//     setState(prevState=> prevState+1  )
//     setState(prevState=> prevState+1  )
//     setState(prevState=> prevState+1  )

// }

//   const removeValue(){
//     setState(prevState=>prevState+1);

//   }
//   return(
//     <div>
//             <h1>value:{state}</h1>
//             <button onClick={addValue}>add</button>
//     </div>
//   )
// }