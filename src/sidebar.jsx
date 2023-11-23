import './App.css';
import Nav1 from './nav1';
import { Link, Outlet } from 'react-router-dom';
function Sidebar() {
  const sibebar_1 = <Nav1 />
  return (
    <>

        
      <div className='sidebar' >
          {/* {sibebar_1} */}
          <Nav1 />
        </div>
        <div className='top_sideBar'>
          
      </div>

      <Outlet />
    </>
  )
}

export default Sidebar;