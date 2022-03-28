import Nav from '../components/Nav'
import EntityItem from '../components/EntityItem'
import EntityCreate from '../components/EntityCreate'
import '../styles/App.css'

const EntityList = ({ mountainData, setMountainData, deleteHandler }) => {
  return (
    <>
      <Nav />
      <EntityCreate mountainData={mountainData} setMountainData={setMountainData} />
      <table>
        <th>Name</th>
        <th>Continent</th>
        <th>Delete</th>
        {mountainData.map(mountain => (
          <EntityItem mountain={mountain} key={mountain.id} deleteHandler={deleteHandler} />
        ))}
      </table>
    </>
  )
}

export default EntityList
