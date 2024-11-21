import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//     {
//       path:'about',
//       element:<About/>
//     },
//   {
//     path:'home',
//     element:<Home/>
//   },
// {
//   path:'contact',
//   element:<Contact/>
// }
//     ]
//   }
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
         <Route path='about' element={<About/>}/>
         <Route path='home' element={<Home/>}/>
         <Route path='contact' element={<Contact/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
