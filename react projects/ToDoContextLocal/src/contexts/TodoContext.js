import { createContext, useContext } from "react";

export const TodoContext = createContext({
    Todos:[
        {
            id:1,
            todo:"todo message"
        }
    ],
    addTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    editTodo:(id,todo)=>{},
    toggleIsComplete:(id)=>{},
    isComplete:Boolean
});



export const useTodo=()=>{
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider; 

//--------------------------below are mistaked that you did --------------------------------------

// export default const useTodo = ()=>{
//     return useContext(TodoContext);
// }------------this is wrong In JavaScript/ES6, when you use export default, you should not include the const declaration for the same value in the same line. Here's how you can fix it:


// export default const useTodo = ()=>{
//     return useContext(TodoContext);
// }---------this is wrong too you cannot use export default heere it is used for single default export per file ,you must use named export here rather than default export which is incorrect 

// The issue with the provided code is related to the incorrect use of export default for the useTodo hook. In JavaScript, export default is typically used for a single default export per file, while useTodo is not being properly defined as a default export. You're trying to assign useTodo as both a named export and a default export, which is incorrect syntax.

// Solution:
// Fix the export of useTodo: Instead of using export default, use a named export for useTodo.
// Ensure createContext and useTodo are both correctly defined and exported.
// Here’s the corrected code:

// js
// Copy code
// import { createContext, useContext } from "react";

// // Create the context with default values
// export const TodoContext = createContext({
//     Todos: [
//         {
//             id: 1,
//             todo: "todo message"
//         }
//     ],
//     addTodo: (id, todo) => {},
//     deleteTodo: (id) => {},
//     editTodo: (id, todo) => {},
//     toggleIsComplete: (id) => {},
//     isComplete: false // Initialize with a boolean value
// });

// Create and export the useTodo hook (named export)
// export const useTodo = () => {
//     return useContext(TodoContext);
// };

// // Export the context provider for wrapping components
// export const TodoProvider = TodoContext.Provider;
// Explanation:
// useTodo is now exported as a named export: export const useTodo = () => {...}.
// You should import it as a named import elsewhere in your project like this:
// js
// Copy code
// import { useTodo } from './path/to/TodoContext';
// Why the error occurs:
// The error arises because you cannot have both export default and a variable assignment in the same line. The proper way is to either use export default or a named export, but not both at the same time for a single entity.