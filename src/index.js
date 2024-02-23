import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import Layout from './Layout';
import About from './Components/AboutUs/About';
import Home from './Components/Home/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
      <Route path='/' element= {<About/>}/> 
      <Route path='/about' element= {<About/>}/> 
      <Route path='/home' element= {<Home/>}/>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
