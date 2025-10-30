
import './App.css';
// import React, { Component } from 'react'
import React  from 'react'
import Navbar from './components/Navbar';
import NewsComponent from './components/NewsComponent';


import{
  BrowserRouter,
  Route,
  Routes,
}from "react-router-dom"

const App =()=> {
  const apiKey = process.env.REACT_APP_NEWS_API
  // apiKey ="dacd4e61a3724b56b51968c7498ba86c"
  
    return (
      <div>
        <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route exact path='/' element={ <NewsComponent key={"general"} pageSize={9} country={"us"} apiKey ={apiKey}  category={"general"}/>}> </Route>
        <Route exact path='/business' element={ <NewsComponent key={"business"} pageSize={9} country={"us"} apiKey ={apiKey}  category={"business"}/>}> </Route>
        <Route exact path='/business' element={ <NewsComponent key={"business"} pageSize={9} country={"us"} apiKey ={apiKey}  category={"business"}/>}> </Route>
        <Route exact path='/entertainment' element={ <NewsComponent key={"entertainment"} pageSize={9} country={"us"} apiKey ={apiKey}  category={"entertainment"}/>}> </Route>
        <Route exact path='/health' element={ <NewsComponent key={"health"} pageSize={9} country={"us"} apiKey ={apiKey}  category={"health"}/>}> </Route>
        <Route exact path='/science' element={ <NewsComponent key={"science"} pageSize={9} country={"us"} apiKey ={apiKey}  category={"science"}/>}> </Route>
        <Route exact path='/sports' element={ <NewsComponent key={"sports"} pageSize={9} country={"us"} apiKey ={apiKey}  category={"sports"}/>}> </Route>
        <Route exact path='/technology' element={ <NewsComponent key={"technology"} pageSize={9} country={"us"} apiKey ={apiKey}  category={"technology"}/>}> </Route>
       </Routes>
      
       </BrowserRouter>
      </div>
    )
  
}

export default App;


