import React, { useState } from 'react';
import Add_Photo from '../Add_Photo/Add_Photo';
import './Header.css'

import { FaUnsplash } from "react-icons/fa"
import { BiSearch } from "react-icons/bi"

function Header({setPhotos}) {

    const [modal, setModal] = useState(false);
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    // Function to handle Submit of Search Result after Submiting the form
    const handleSubmit = async (e) => {
        e.preventDefault();
        fetch('http://127.0.0.1:5000/search', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({search_term : search}),
        }).then(function (response) {
            if (response.ok) return response.json();
        }).then(data => setPhotos(data))
    }

    
    function showModal() {
        setModal(!modal)
    }
    function hideModal() {
        setModal(false)
    }

  return (
    <div className="header">
          <div className="header_container display_flex">
              <div className="header_left display_flex">
                <div className='header_logo'>
                  <FaUnsplash className='header_logo-logo'/>
                  <div>
                      <h3>My FavPhoto</h3>
                      <p>devchallenges.io</p>
                  </div>
                  </div>
                  
                  <div className="header_search">
                      <BiSearch className="header_search-icon"/>
                    <form action="" onSubmit={handleSubmit}>
                        <input
                          className="header_search-input"
                          type="text"
                          name="search"
                          id="search"
                          onChange={handleSearch}
                          placeholder="Search by label"
                          value={search}
                      />
                   </form>
                  </div>

              </div>
              <div className="header_button">
                  <button onClick={showModal}>Add Photo</button>
              </div>
          </div>

          {
              modal && <Add_Photo setModal={setModal} hideModal = {hideModal} />
          }
    </div>
  )
}

export default Header