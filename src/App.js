import React from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Usestate from './components/Usestate';
import './index.css'
import UsestateExp from './components/UsestateExp';

function App(){
  return(
    <>               
    <Navbar></Navbar>
    <div className="container">
    <Textform heading="Please Enter anything"/>
   
    </div>
    <About></About>
    <Usestate />
    <UsestateExp />
    </>

    
  );
}




export default App

