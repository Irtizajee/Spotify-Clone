import './App.css'
import { Link } from 'react-router-dom'
import './container.css'
import './Responsive container/Cards.css';
import card1 from './card1.jpeg'
import card2 from './card2.jpeg'
import card3 from './card3.jpeg'
import card4 from './card4.jpeg'
import card5 from './card5.jpeg'
import { useState } from 'react'
import Site_links from './site_links'
export default function Container() {
  // let [hoverCard , setHoverCard] = useState({})

  // function hoverIn(){
  //   setHoverCard({
  //     display: "block"
  //   })
  //   setTimeout(
  //     ()=>{
  //       setHoverCard({
  //         transition: ".4s ease-in-out",
  //         top: "42%" , 
  //         display : "block"
  //       })
  //     }
  //     , 50
  //   )
  //  }
  //  function hoverOut(){
  //   setHoverCard({
  //     display: "none"
  //   })
  //  }
  return (
    <>
      <div className="container">
        {/* <button> <Link to="/">Back</Link> </button>
        Container */}
        <nav className='container_nav'>
          <div className='container_nav_btns'>
            <button><i class="fa-light fa-less-than "></i></button>
            <button><i class="fa-light fa-greater-than "></i></button>
          </div>
          <div className='container_nav_btns_2'>
            <button className='signup_btn'> Sign Up</button>
            <button className='login_btn'>Log in</button>
          </div>
        </nav>
        <div className='playlist_heading' >
          <h2>Spotify Playlsit</h2>
          <span>Show all</span>
        </div>
        <div className='cards'>
          <div className='card'>
            <img className='card_img' width={"95%"} src={card1} alt="" />
            <div className='card_heading'>
              <span>Today's Top Hits</span>
              <p>Jung Kook is on top of the Hottest 50!</p>
            </div>
            <button ><i class="fa-solid fa-play"></i> </button>
          </div>
          <div className='card'>
            <img className='card_img' width={"95%"} src={card2} alt="" />
            <div className='card_heading'>
              <span>Today's Top Hits</span>
              <p>Jung Kook is on top of the Hottest 50!</p>
            </div>
            <button ><i class="fa-solid fa-play"></i> </button>
          </div>
          <div className='card'>
            <img className='card_img' width={"95%"} src={card3} alt="" />
            <div className='card_heading'>
              <span>Today's Top Hits</span>
              <p>Jung Kook is on top of the Hottest 50!</p>
            </div>
            <button ><i class="fa-solid fa-play"></i> </button>
          </div>
          <div className='card'>
            <img className='card_img' width={"95%"} src={card4} alt="" />
            <div className='card_heading'>
              <span>Today's Top Hits</span>
              <p>Jung Kook is on top of the Hottest 50!</p>
            </div>
            <button ><i class="fa-solid fa-play"></i> </button>
          </div>
          <div className='card'>
            <img className='card_img' width={"95%"} src={card5} alt="" />
            <div className='card_heading'>
              <span>Today's Top Hits</span>
              <p>Jung Kook is on top of the Hottest 50!</p>
            </div>
            <button ><i class="fa-solid fa-play"></i> </button>
          </div>
        </div>
        {/* heloo */}
        <Site_links />
      </div>
    </>

  )
}
