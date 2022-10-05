import './App.css';
import NavBar from './components/Navbar';
import Home from './components/pages/Home'
import Products from './components/pages/Products'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Services from './components/pages/Services';
import SignUP from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/services' element={<Services />}/>
          <Route path='/sign-up' element={<SignUP />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
