import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import Home from "./components/Home";
import Me from "./components/Me";
import Links from "./components/Links";
import Layout from "./Layout";
import './index.css';


  /* 

      O conteudo que a rota vai apresentar quando for acessada , 
      pra formar uma coisa mais limpa no s passamos compnetes que sao 
      como variaveis que podem gurdar um estruutura de codigo inteirac 

  */

 
const router = createBrowserRouter([

  {

    path: "/", element: <Layout />, 
    
    children: [

          { index: true, element: <Home/> },
          { path: "skills", element: <Me/> },
          { path: "links", element: <Links/> },
          

        ]
  },




])


createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,

)