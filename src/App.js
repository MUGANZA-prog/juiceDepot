
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import UserList from './components/Lists';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import RegisterProduct from './components/RegisterProduct';
import RegisterCategory from './components/RegisterCategory';
import Products from './components/Products';
import Select from './components/Select'

function App() {
  return (
      
        <Router>
          <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path='/users' element={<UserList/>}/>
            <Route path='/' element={<Login/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/registerProduct' element={<RegisterProduct/>}/>
            <Route path='/registerCategory' element={<RegisterCategory/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/selectProducts' element = {<Select/>}/>
            <Route path='*' element={<h1>404 Not Found</h1>} />

          </Routes>
        </Router>
  );
}

export default App;
