import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './components/pages/Login.js';
import Register from './components/pages/Register.js';
import Navigation from './components/pages/Navigation.js';
import Profile from "./components/pages/profile";

/*function App() {
  return (
    <div className="App">
      <Navbar/>
      <Login />
      <Register/>
      

    </div>
  );
}

export default App;

*/

function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navigation/>}>
              <Route path="Profile" element={<Profile />}/>
              <Route path="Login" element={<Login />}/>
              <Route path="Register" element={<Register />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      

    </div>
  );
}

export default App;
