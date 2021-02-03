import React from "react";
import "./App.css"
import { GlobalProvider } from "../context/GlobalState";


import Routes from '../Routes/Route'
import Footer from "./Footer";

function App() {

  return (
    <GlobalProvider>
     
      <div>
      <Routes/>
      </div>

    </GlobalProvider>

  )
}


export default App;