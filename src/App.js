import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,
} from "react-router-dom";

function App() {
  
  const [mode, setMode] = useState('light');
  const [btnText, setBtnText] = useState('Enable Dark Mode');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setBtnText('Enable Light Mode');
      document.body.style.backgroundColor = 'grey';
    } else {
      setMode('light');
      setBtnText('Enable Dark Mode');
      document.body.style.backgroundColor = '#ffffff';
    }
  }

  return (
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} btnText={btnText}/>
      {/* <Switch>
        <Route path="/about" component={About} />
        <Route path="/">
          <div className="container my-3">
            <TextForm heading="Enter your Text" mode={mode}/>
          </div>
        </Route>
      </Switch> */}
      <Routes>
      <Route path='/' element={<div className="container my-3">
            <TextForm heading="Enter your Text" mode={mode}/>
          </div>} />
  
      <Route path='/about' element={<About mode={mode}/>} />
    
      </Routes>
    </Router>
  );
}

export default App;
