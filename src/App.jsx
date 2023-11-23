import logo from './logo.svg';
import './App.css';
import Container from './container';
import Sidebar from './sidebar';
import Search from './search';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Site_links from './site_links';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Sidebar />   }  >
        
        <Route index element={<Container />}/>
        <Route path='/search' element={<Search />} />
        
    
    </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
