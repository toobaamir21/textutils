
import React,{ useState } from 'react';

import Alert from './components/Alert';
import Navbar1 from './components/Navbar';
 import TextForm from './components/TextForm';
 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'





function App() {
  const [mode,setMode] = useState("light");
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      mes:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  const toggleMode = ()=>{
    if (mode==='light') {
      setMode("dark")
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode is enabled","success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode is enabled","success")
    }
  }
  return (
  
    <>
    <Router>

      <Navbar1 title='Textutils' mode={mode} toggleMode={toggleMode}/> 
      <Alert alert={alert}/>
     {/* <Navbar1/> if prop values are not set then default values are set if given */}
     <div className="container my-3">
     <Routes>
    
         
     <Route exact path="/" element={<TextForm showAlert={showAlert} heading = "Enter the Text to analyze" mode={mode}/>} />
          
          
        </Routes>
       
    
     </div>
     </Router>
    </>
    );
}

export default App;
