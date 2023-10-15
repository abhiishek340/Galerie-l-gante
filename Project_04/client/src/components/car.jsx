import "./car.css"
import { Link } from 'react-router-dom'


const car = ({car}) => {

  const getDetails = () => {


  }

  
  return (
    <div className="car">

      <div className="car__container">
        <h2>{car.name}</h2>

      </div>

      <div className="car__info">
      <p> Color : {car.color}</p>
        <p> Wheel : {car.wheels}</p>
        <p> Interior : {car.interior}</p> 
        <p> Exterior : { car.exterior}</p>
        <p> Roof : {car.roof}</p>
        <p> Price : {car.price}</p>

      </div>

      <Link to = {'/customcars/' + car.id}>
      <button onClick={getDetails}>
        Details
      </button>
      </Link>

    </div>



  )
}

export default car

