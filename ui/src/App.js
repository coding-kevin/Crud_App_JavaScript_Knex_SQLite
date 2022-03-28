import { useEffect, useState } from 'react'
import axios from 'axios'
import './styles/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EntityDetail from './screens/EntityDetail'
import EntityList from './screens/EntityList'

const App = () => {
  const [mountainData, setMountainData] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:5010/mountains', {})
      .then(res => {
        setMountainData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const deleteHandler = id => {
    axios
      .delete(`http://localhost:5010/mountains/${id}`)
      .then(res => {
        console.log(res)
        const remainingMountainData = mountainData.filter(mountain => {
          return mountain.id !== id
        })
        setMountainData(remainingMountainData)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path='/*'
            element={
              <EntityList mountainData={mountainData} setMountainData={setMountainData} deleteHandler={deleteHandler} />
            }
          />
          <Route path='/mountains/:id' element={<EntityDetail mountainData={mountainData} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
