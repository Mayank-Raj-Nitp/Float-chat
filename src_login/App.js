// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import  Login from'./component/Login.js'
import Signup from './component/Signup.js';
 import {Link} from 'react-router-dom'

function App() {
  return (
  <Router>
   <Link to="login">Login</Link>
  <Routes>
    {/* <Route path='/' element={<Login/>}/> */}
    <Route path="/login" element={<Login/>}/>
     <Route path="/signup" element={<Signup/>}/>

  </Routes>

  </Router>
  
  );
}

export default App;
