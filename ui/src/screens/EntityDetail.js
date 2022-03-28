import { useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/App.css'
import Nav from '../components/Nav'

const EntityDetail = () => {
  const [thisMountainData, setThisMountainData] = useState([])
  let location = window.location.pathname

  useEffect(() => {
    axios
      .get(`http://localhost:5010${location}`)
      .then(res => {
        setThisMountainData(res.data[0])
      })
      .catch(res => {
        setThisMountainData(res.message)
        console.log(thisMountainData)
      })
  }, [])

  if (thisMountainData === 'Request failed with status code 404') {
    return (
      <>
        <Nav />
        <h1>404</h1>
        <p className='page-cant-load'>This page couldn't load. Please check the URL and try again.</p>
      </>
    )
  } else {
    return (
      <>
        <Nav />
        <h1>{thisMountainData.name}</h1>
        <div className='entity-details'>
          <h3>Details</h3>
          <p>Height in Feet: {thisMountainData.height}</p>
          <p>Continent: {thisMountainData.continent}</p>
        </div>
      </>
    )
  }
}

export default EntityDetail
