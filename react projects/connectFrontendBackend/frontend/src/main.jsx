// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import { Route, RouterProvider, createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
// import Layout from './Layout.jsx'
// import About from './components/About/About';
// import Home from './components/Home/Home';
// import Contact from './components/Contact/Contact';

// // const router = createBrowserRouter([
// //   {
// //     path:'/',
// //     element:<Layout/>,
// //     children:[
// //     {
// //       path:'about',
// //       element:<About/>
// //     },
// //   {
// //     path:'home',
// //     element:<Home/>
// //   },
// // {
// //   path:'contact',
// //   element:<Contact/>
// // }
// //     ]
// //   }
// // ]);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout/>}>
//          <Route path='about' element={<About/>}/>
//          <Route path='home' element={<Home/>}/>
//          <Route path='contact' element={<Contact/>}/>
//     </Route>
//   ),
//   {
//     future: {
//       v7_startTransition: true,
//       v7_relativeSplatPath: true,
//       v7_fetcherPersist: true,
//       v7_normalizeFormMethod: true,
//       v7_partialHydration: true,
//       v7_skipActionStatusRevalidation: true,
//     }
//   }
// );

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider router={router}/>
//   </StrictMode>,
// )




import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout.jsx';
import About from './components/About/About';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';

// Create the router with future flags enabled
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='about' element={<About />} />
      <Route path='home' element={<Home />} />
      <Route path='contact' element={<Contact />} />
    </Route>
  ),
  {
    future: {
      v7_startTransition: true, // Enable state updates in React.startTransition
      v7_skipActionErrorRevalidation: true, // Change revalidation behavior after 4xx/5xx responses
      v7_relativeSplatPath: true, // Enable relative path matching for multi-segment splats
      v7_fetcherPersist: true, // Change fetcher lifecycle behavior
      v7_normalizeFormMethod: true, // Normalize formMethod casing to uppercase
      v7_partialHydration: true, // Allow partial hydration for SSR frameworks
    },
  }
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);