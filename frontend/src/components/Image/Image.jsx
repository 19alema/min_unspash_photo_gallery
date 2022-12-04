import React, { useEffect } from 'react'
import "./Image.css"

import { BsFillTrashFill } from "react-icons/bs";


function Image({ url, label, id, className }) {
  
  function deletePhoto(photo_id) {
    if (window.confirm("Are you sure you want to delete?")){
      fetch(" http://127.0.0.1:5000/photos/" + photo_id, {
        method: "DELETE",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Accept": 'application/json',
          "Content-Type": "application/json",
        }
      })
    }
  }
  return (
    <div className={`image_container ${className}` }>
        <img
        
              className="image tall"
              src={url}
              alt="lorem"
          />
      <a href="">
        <BsFillTrashFill className="image_delete-btn" onClick={() => { deletePhoto(id)}}/>
      </a>
      <p className="image_label">{label}</p>

    </div>
  )
}

export default Image