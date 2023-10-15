import React, { useState, useEffect } from 'react'
  // You can create a separate CSS file for car details
import { useParams } from 'react-router-dom'
import './CarDetails.css'
import { Link } from 'react-router-dom'
import "./CarDetails.css"

const CarDetails = ({ data }) => {
  const { id } = useParams();

  const [car, setCar] = useState({
    id: 0,
    name : "",
    color: "",
    wheels: "",
    interior: "",
    exterior: "",
    roof: "",
    price: 0,
  });

  useEffect(() => {
    const fetchCarById = async () => {
      try {
        const response = await fetch(`http://localhost:3001/viewcars/${id}`);
        const data = await response.json();
        setCar(data);
        console.log("This is the data",data);
        console.log("This is the car",car);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCarById();
  }, [data, id]);

  const deleteCar = async (event) => {
    try {
      event.preventDefault()
        const  options = {
            method: 'DELETE',
        }
        fetch(`http://localhost:3001/viewcars/${id}`, options)
        window.location = '/customcars'
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="CarDetails">
      
      <main id="car-content" className="car-info">
        <div className="image-container">
          {/* You can display an image of the car here */}
          {/* <img id="image" src={car.image} alt={car.color} /> */}
        </div>

        <div className="car-details">
          <h2 id="color">{car.name}</h2>
           {console.log("This is the car",car.color)  }
          <p id="color">{"Color: "+car.color}</p>
          <p id="wheels">{'Wheels: ' + car.wheels}</p>
          <p id="interior">{'Interior: ' + car.interior}</p>
          <p id="exterior">{'Exterior: ' + car.exterior}</p>
          <p id="roof">{'Roof: ' + car.roof}</p>
          <p id="price">{'Price: $' + car.price}</p>
        </div>

        <div className="buttons__container">
      <Link to ={"/edit/" + id}>
       <button>
          Edit
        </button>
      </Link>
      
       <button  onClick={deleteCar}>
          Delete
       </button>

      </div>

        
  
      </main>

      

      


    </div>
  );
};

export default CarDetails;
