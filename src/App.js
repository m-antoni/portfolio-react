import React , { Fragment } from 'react';
import Navbar from './components/layouts/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Interest from './components/Interest';
import Awards from './components/Awards';
import Seminars from './components/Seminars';

function App() {
  return (
      <Fragment>
        
        <Navbar/>

        <div className="container-fluid p-0">

          <About/>

          <hr className="m-0" />

          <Experience/>

          <hr className="m-0"/>
          
          <Education/>

          <hr className="m-0"/>

          <Skills/>

          <hr className="m-0"/>
          
          <Seminars/>

          <hr className="m-0"/>

          <Interest/>

          <hr className="m-0"/>

          <Awards/>

        </div>
        
        <a id="button"></a> 
         
      </Fragment>
  );
}

export default App;
