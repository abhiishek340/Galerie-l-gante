import React, { useState, useEffect } from 'react';
import Car from '../components/car';
import './ViewCars.css';

const ViewCars = () => {
  const [cars, setCars] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch('http://localhost:3001/viewcars');
        const data = await response.json();
        setCars(data);
        setFilteredCars(data); // Initially, show all cars
      } catch (error) {
        console.log(error);
      }
    };
    fetchCars();
  }, []);

  const handleSearch = () => {
    // Filter the cars based on the search input
    const filtered = cars.filter((car) =>
      car.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredCars(filtered);
  };

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for cars..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      
      <main className="car__container">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <Car key={car.id} car={car} />
          ))
        ) : (
          <h2>
            <i className="fa-regular fa-calendar-xmark fa-shake"></i>
            {'No Customized Cars Found'}
          </h2>
        )}
      </main>
    </div>
  );
};

export default ViewCars;
