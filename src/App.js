import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Products from './components/Products';
import Cart from './components/Cart';
import Navigation  from './components/Navigation';

const App = ()=>{
    return (
       <>
        <Router>
           <Navigation/>
            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route exact path="/products" element={<Products/>}></Route>
                <Route exact path="/cart" element={<Cart/>}></Route>
            </Routes>
        </Router>
       </>
        )
}
export default App;