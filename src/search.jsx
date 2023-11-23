import React from 'react'
import './App.css'
import Site_links from './site_links'
import { Link } from 'react-router-dom'
function Search() {
  return (
    <div className='container'>
        <button> <Link to="/">Back</Link> </button>
        
        This is Search div
        <Site_links />
        </div>
        
  )
}

export default Search