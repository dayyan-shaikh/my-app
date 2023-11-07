import React from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';

function App(){
  return(
    <>               
    <Navbar></Navbar>
    <div className="container">
    <Textform heading="Please Enter anything"/>
   
    </div>
    <About></About>

    </>

    
  );
}




export default App

