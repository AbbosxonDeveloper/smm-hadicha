import { BrowserRouter ,Route , Routes } from 'react-router-dom';
import './App.css';
import { About, Home, Products } from './components';

function App() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/products' element={<Products />}/>
            <Route path='/about' element={<About />}/>
        </Routes>
        </BrowserRouter>
    )
}

export default App;