
import "./App.css";
import Nav from "./Components/Nav"
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  
  const toggleMode = () =>{
    // if(mode==='light'){
    //   setMode('dark');
    // }
    // else{
    //   setMode('light');
    // }
    setMode(mode==='light'?'dark':'light');    //by ternary operator
    document.body.style.backgroundColor = (mode==='light'?'#11121b':'white')
    document.body.style.color = (mode==='light'?'white':'black');
    document.title = (mode==='dark'?'Textutils - Light':'Textutils - Dark')
  }
  return (
    <>
    <Router>
    <div>
    <Nav title="Rohit Web" about="About" mode={mode} toggleMode={toggleMode}/>
    <Switch>
          <Route exact path="/About">
            <About  mode={mode} />
          </Route>
         
          <Route exact path="/">
          <TextForm mode={mode}  heading="Type your text here "/>
          </Route>
        </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
