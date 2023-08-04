import {Box} from "@chakra-ui/react"
import './App.css';
import Home from './component/home';
import Login from './component/login';
import Navbar from './component/navbar';
import Signup from './component/signup';
import Notes from "./component/note";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <div className="App">
    
      <Router>
        <div>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/Signup' element={<Signup/>}/>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/notes' element={<Notes/>}/>

          </Routes>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
