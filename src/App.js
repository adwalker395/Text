import './App.css';
// import About from './Components/About';
import Nav from './Components/Nav';
import Textform from './Components/Textform';
import { useState } from 'react';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1300);
  }
  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      showAlert('Dark Mode has been enabled', 'success ');
      // document.title='TextUtils - Dark Mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Dark Mode has been disabled', 'success ')
      // document.title='TextUtils - Light Mode';
    }
  }
  return (
    <>
      {/* When using React router */}
      {/* <Router>
    <Nav title='TextUtils' mode={mode} togglemode={togglemode} />
    <Alert alert={alert}/>
    <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}/>
            <Route exact path="/" element={<Textform showAlert={showAlert} heading='TextUtils - Word Counter, Character Counter'mode={mode} />}/>
          </Routes>
        </div>
    </Router>   */}

      <Nav title='TextUtils' mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <About mode={mode} /> */}
        <Textform showAlert={showAlert} heading='TextUtils - Word Counter, Character Counter' mode={mode} />
      </div>
    </>
  );
}

export default App;
