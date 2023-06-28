
import './App.css';
import Login from './components/Login.js';
import Register from './components/Register.js';
import Navbar from './components/Navigation.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Login />
      <Register/>
      

    </div>
  );
}

export default App;
