import React from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App(){
  return(
    <>               
    <Navbar></Navbar>
    <div className="container">
    <Textform heading="Please Enter anything"/>
   
    </div>

    </>

    
  );
}




export default App

