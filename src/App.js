import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './Home';
import Page from './Page';
import Page2 from './Page2';
import Detail from './Detail';
import Header from './header/Header'
import './App.css'

function App() {

  return (
    <div>
      <Header />
       <BrowserRouter>
           <Link className='home' to='/'>home</Link>
           <Link className='page' to='/page'>page</Link>
           <Link className='page2'  to='/page2'>page2</Link>
        <Routes>  
            <Route path='/' element={<Home />}/>
            <Route path='/page' element={<Page />}/>
            <Route path='/page2' element={<Page2 />}/>
            <Route path='/user/:id' element={<Detail />}/>
            <Route path='/user/:id' element={<Page />}/>
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
