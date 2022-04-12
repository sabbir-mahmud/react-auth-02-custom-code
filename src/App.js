// imports
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Auth/login/Login';
import Register from './Components/Auth/Register/Register';
import Products from './Components/Contents/Products/Products';
import Accounts from './Components/Home/Accounts/Accounts';
import Homepage from './Components/Home/Homepage/Homepage';
import Navbar from './Components/Shared/Header/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <div className="navbar-bg p-5">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Products />} />
        <Route path="/account" element={<Accounts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

    </div>
  );
}

export default App;
