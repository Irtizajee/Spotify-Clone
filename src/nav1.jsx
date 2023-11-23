import React from 'react'
import { Link } from 'react-router-dom'
import './App.css';
import './nav1.css';
function Nav1() {
  return (
    <>
   
      <div className='nav_section'>
        <ul>
          <li>
            <Link to="/"><img src="" alt="" /><i class="fa-brands fa-spotify font_logo"></i> Spotify</Link>
          </li>
          <li>
            <Link to="/"><img src="" alt="" /> <i class="fa-solid fa-house font_logo"></i> <span className='font_logo_name'>Home</span> </Link>
          </li>
          <li>
            <Link to="/search"><img src="" alt="" /> <i class="fa-solid fa-magnifying-glass font_logo"></i> <span className='font_logo_name'>Search</span> </Link>
          </li>
        </ul>
      </div>
      <div className='nav_section nav_section_second' style={{ flexGrow: "1", marginTop: "10px" }}>
        <div className="nav_section_second_inner">
          <div style={{ padding: "0px 10px" }}>
            <i class="fa-solid fa-book font_logo"></i>  <span className='font_logo_name'>Your Library</span> <span style={{ "marginLeft": "90px", "fontSize": "30px" }}> + </span> </div>
          <div className='scrolling_box'>
            <div className="scrolling_box_inner_divs">
              <h5>Create your first playlist </h5>
              <h6>It's easy, we'll help you</h6>
              <button>Create Playlist</button>
            </div>
            <div className="scrolling_box_inner_divs">
              <h5>Let's find some podcasts to follow</h5>
              <h6>We'll keep you updated on new episodes</h6>
              <button>Browse podcasts</button>
            </div>
          </div>
        </div>
        <div className="nav_section_second_inner">
          <div className="nav_section_second_inner_tags">
            <div>Legal</div>
            <div>Privacy Center</div>
            <div>Privacy Policy</div>
            <div>Cookies</div>
            <div>About Ads</div>
            <div>Accessibilities</div>
            <div>Cookies</div>
          </div>
          <div className="nav_section_second_inner_btn"><button> <i class="fa-solid fa-globe " style={{ color: "#212121", backgroundColor: "#ffffff", borderRadius: "50%", border: "1px solid white", fontSize: "14px" }}></i> English</button></div>
        </div>
      </div>
     

    </>

  )
}


export default Nav1