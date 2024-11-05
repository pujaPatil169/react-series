// import { useState } from 'react'
import RecipeReviewCard from "./RecipeReviewCard"
import BasicButtons from "./Button"
import { useState } from "react"
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-green-400 text-black rounded-xl "> Tailwind</h1>
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
     <BasicButtons/>
    </>
  )
}

export default App



function random(){
  const [state, setState ] = useState(0)
  const addValue() {
    setState(prevState=> prevState+1  )
    setState(prevState=> prevState+1  )
    setState(prevState=> prevState+1  )

}

  const removeValue(){
    setState(prevState=>prevState+1);

  }
  return(
    <div>
            <h1>value:{state}</h1>
            <button onClick={addValue}>add</button>
    </div>
  )
}