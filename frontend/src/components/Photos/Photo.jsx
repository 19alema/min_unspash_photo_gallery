import React, {useEffect, useState} from 'react'
import Image from '../Image/Image'
import axios from "axios";
import './Photo.css'

function Photo({photos, loading}) {

   function getClass(i) {
    if (i % 3 === 0) {
        return 'big';
    }
    else if (i % 6 === 0) {
        return 'wide'
    }
}
 
  return (
    <div>
      {loading && <h1 className='loading'>Loading Photos ...</h1>}
      {photos.length != 0 && (
        <div className='photo_container'>
          {photos.photos.map((photo, i) => (
            <Image className={getClass(i)} key={photo.id} { ... photo} />
           ))}
        </div>
        )}
    </div>
    )

}

export default Photo