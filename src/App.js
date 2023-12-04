import './App.css'
import {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom';
import Navbar from './pages/components/navbar/Navbar.js';
import DropdownNav from './pages/components/dropdown/DropdownNav.js';
import ProductsList from './pages/ProductsList.js';
import AddProduct from './pages/AddProduct.js';
import Authorization from './pages/Authorization.js';

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 420;

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);
  if (width <= breakpoint) {
    return (
      <div className='App'>
        <DropdownNav/>
        <Routes>
          <Route exact path='/' Component={ProductsList}/>
          <Route exact path='/addproduct' Component={AddProduct}/>
          <Route exact path='/auth' Component={Authorization}/>
        </Routes>
      </div>
    )
  }
  else {
    return (
      <div className="App">
        <Navbar/>
        <Routes>
          <Route exact path='/' Component={ProductsList}/>
          <Route exact path='/addproduct' Component={AddProduct}/>
          <Route exact path='/auth' Component={Authorization}/>
        </Routes>
      </div>
    );
  }
}

export default App;
