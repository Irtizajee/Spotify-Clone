import React from 'react'
function Site_links() {
  return (
    <>
      <div className='sitesLinks' style={{ color: "white" }}>


        <div className="sitesLinks_headings">

          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Jobs</a>
          <a href="#">For The Record</a>

        </div>
        <div className="sitesLinks_headings">
          <h4>Community</h4>
          <a href="#">For Artist</a>
          <a href="#">Developers</a>
          <a href="#">Advertising</a>
          <a href="#">Investers</a>
          <a href="#">Venders</a>

        </div>




        <div className="sitesLinks_headings">

          <h4>Usefull links</h4>
          <a href="#">Support</a>
          <a href="#">Free Mobile App</a>

        </div>
        <div className="flexGrow"></div>
        <div className="sitesLinks_headings socialLinks">
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-facebook"></i>

        </div>
      </div>
      {/* <center> <hr style={{width: "95%", textAlign: "center", margin: "10px 0px", opacity : ".4" , height: "0px", fontSize: "10px", fontWeight: "100"}} /></center> */}
      <center>
        <div className='copyWrites'>
          C 2023 Spotify AB
        </div>
      </center>

    </>

  )
}

export default Site_links