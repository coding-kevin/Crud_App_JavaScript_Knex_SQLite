import { Link } from 'react-router-dom'

const EntityItem = ({ mountain, deleteHandler, setFilter }) => {
  return (
    <tr>
      <td>
        <Link to={`/mountains/${mountain.id}`}>{mountain.name}</Link>
      </td>
      <td> {mountain.continent}</td>
      <td>
        <button onClick={() => deleteHandler(mountain.id)}>X</button>
      </td>
      {/* call back to App.tsx */}
    </tr>
  )
}

export default EntityItem
