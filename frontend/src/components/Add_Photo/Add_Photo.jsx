import React, {
  useState
} from 'react'
import './Add_Photo.css'
import {
  FaTimes
} from 'react-icons/fa'

function Add_Photo({
  hideModal, setModal
}) {

  const [formData, setFormData] = useState({
    label: "",
    url: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let response = await fetch('http://127.0.0.1:5000/photos', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          label: formData.label,
          url: formData.url
        })
      });

      let res = await response.json();

      if (res.status === 200) {
        setModal(false)
    }

       
      else {
        console.log("Error: " + res.status)
      }
    } catch (err) {
      console.log(err)
    }
  };


  const handleChange = (e) => {

    setFormData(prevFormData => {
      const {
        name,
        value
      } = e.target
      return {
        ...prevFormData,
        [name]: value
      }
    })

  }

  return (
    <div className='add_photo-modal'>
    <div className = "add_photo-content">
    <FaTimes className='modal_close'
    onClick = {
      hideModal
    }
    />
    <h2 className="form_title" >
        Add a new photo </h2>
        <form method="POST"
          refresh={true}
    onSubmit = {
      handleSubmit
    }>
          
    <div>
      <label htmlFor="Label"> Label </label>
      <input
      type="text"
      onChange = {
      handleChange
      }
      name = "label"
      id = ""
      placeholder = "Photo Label"
      value = {
      formData.name
      }
      />
            
      </div> 
          
    <div>     
      <label htmlFor="Label" > Photo Url </label>
      <input
      type="text"
      name = "url"
      value = {
      formData.name
    }
      onChange = {
      handleChange
    }
      id = "url"
      placeholder="https://images.unsplash.com/photo-1664575196412-ed801e8333a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
      />
            
    </div>
      <button className='form_button' type="submit"> Submit Photo </button> </form> </div>  </div>
  )
}

export default Add_Photo