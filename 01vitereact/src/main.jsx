import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Route, RouterProvider, createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Checked from './components/Checked.jsx';
import Contact from './components/Contact/Contact.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Layout from './components/Layout/Layout.jsx'
import { element } from 'prop-types'
// import { GitHub } from '@mui/icons-material'
import Github from './components/Github/Github.jsx'
// import { Dashboard } from '@mui/icons-material'
import Dashboard from './components/Dashboard/Dashboard.jsx';
import { ThemeContext } from '@emotion/react'
import ThemeSignInPage from './components/SignInPage/ThemeSignInPage.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Checked />,
    
//   }
// ]);
const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
           <Route path='about' element={<About/>}/>
           <Route path='home' element={<Home/>}/>
           <Route path='contact' element={<Contact/>}/>
           <Route path='github' element={<Github/>}/>
           <Route path='signIn' element={<ThemeSignInPage/>}/>
           <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Route >
    ));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);


///---------------------note---------------------
// The error message No routes matched location "/github" indicates that React Router is unable to find a route for the URL /github. Based on the code provided, it appears there is an issue with the way the path for the Github route is defined.

// In your router configuration, you have an extra space in the path definition for the /github route:

// jsx
// Copy code
// <Route path='github ' element={<Github/>}/>
// Notice the trailing space after github. This can cause React Router to not match the route correctly. You should remove the extra space to fix the issue.