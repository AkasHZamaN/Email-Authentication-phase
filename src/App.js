import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Reviews from './Pages/Reviews/Reviews';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import About from './Pages/About/About';
import Header from './Pages/Header/Header';
import Foods from './Pages/Foods/Foods';
import FoodDetails from './Pages/FoodDetails/FoodDetails';
import Checkout from './Pages/Checkout/Checkout';
import RequreAuth from './Pages/Login/RequreAuth/RequreAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/foods' element={<Foods></Foods>}></Route>
        <Route path='/food/:foodId' element={<FoodDetails></FoodDetails>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={
          <RequreAuth>
            <Checkout></Checkout>
          </RequreAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
