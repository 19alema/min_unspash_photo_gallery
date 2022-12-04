import { useState , useEffect} from 'react'
import Header from './components/Header/Header'
import Photos from "./components/Photos/Photo"
import './App.css'
import Add_Photo from './components/Add_Photo/Add_Photo'
function App() {

  const [loading, setLoading] = useState(true)
  const [photos, setPhotos] = useState([])

 function getPhotos() {
 
      fetch("http://127.0.0.1:5000/",{
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        
        credentials: 'same-origin',
        headers: {
          "Content-Type": "application/json",
        }
      })
        .then(function (response) {
          return response.json()
        }
      ).then(data => {
          setLoading(false)
          setPhotos(data)
      })
        .catch(err => {
     console.log(err)
   })
  }


  useEffect(() => {
    getPhotos()
  }, [])

  return (
    <div className="App">
      <Header setPhotos={ setPhotos} />
   
      <Photos photos={photos} loading={loading} />
    </div>
  )
}

export default App
