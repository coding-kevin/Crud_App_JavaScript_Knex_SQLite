import { useState } from 'react'
import axios from 'axios'
import '../styles/App.css'

const EntityCreate = ({ mountainData, setMountainData }) => {
  const [newMountainData, setNewMountainData] = useState({
    name: '',
    continent: '',
    height: ''
  })

  const handleChange = e => {
    const formValue = e.target.value
    const formName = e.target.name

    // Basic validation
    // Can also use React Hook Form
    if ((formName === 'continent' || 'name') && formValue.length > 64) {
      alert('Name of mountain or continent too long')
      return
    } else if (formName === 'height' && formValue.length > 8) {
      alert('No mountain is that tall!')
      return
    } else {
      setNewMountainData({
        ...newMountainData,
        [formName]: formValue // formName acts as key to handle multiple inputs
      })
    }
  }

  const handleSubmit = e => {
    setMountainData([...mountainData, newMountainData])
    axios
      .post('http://localhost:5010/mountains', newMountainData)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='name' value={newMountainData.name} placeholder='Name' onChange={handleChange}></input>
      <input
        type='text'
        name='continent'
        value={newMountainData.continent}
        placeholder='Continent'
        onChange={handleChange}
      ></input>
      <input
        type='number'
        name='height'
        value={newMountainData.height}
        placeholder='Height (feet)'
        onChange={handleChange}
      ></input>
      <button type='sumbit'>Add Mountain</button>
    </form>
  )
}

export default EntityCreate
