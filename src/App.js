// imports
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Auth/login/Login';
import Register from './Components/Auth/Register/Register';
import RequireAuth from './Components/Auth/RequireAuth/RequireAuth';
import ResetPassword from './Components/Auth/ResetPassword/ResetPassword';
import ResetUserPassword from './Components/Auth/ResetUserPassword/ResetUserPassword';
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
        <Route path="/account" element={<RequireAuth><Accounts /></RequireAuth>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/reset-user-password" element={<ResetUserPassword />} />
      </Routes>

    </div>
  );
}

export default App;
