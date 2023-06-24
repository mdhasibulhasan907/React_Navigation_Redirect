import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
function App() {
  

  return (
    <BrowserRouter>
        <Routes>  
              <Route path='/' element={<Home/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/blogs' element={<Blogs/>}/>
        </Routes>
    
    </BrowserRouter>
  )
}

export default App
