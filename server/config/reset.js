import { pool } from '../config/database.js'
import customcar from "../data/customcar.js"
import '../config/dotenv.js'

const createCustomCarTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS customcar;

    CREATE TABLE IF NOT EXISTS customcar (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      color VARCHAR(255) NOT NULL,
      wheels VARCHAR(255) NOT NULL,
      interior VARCHAR(255) NOT NULL,
      exterior VARCHAR(255) NOT NULL,
      roof VARCHAR(255) NOT NULL,
      price INT NOT NULL
    )
  `

  try {
    await pool.query(createTableQuery)
    console.log('🎉 customcar table created successfully')
  } catch (err) {
    console.error('⚠️ error creating customcar table', err)
  }
}

const seedCustomCarTable = async () => {
  await createCustomCarTable()


  customcar.forEach((car) => {

    const insertQuery = {
      text: 'INSERT INTO customcar (name, color, wheels, interior, exterior, roof, price) VALUES ($1, $2, $3, $4, $5, $6, $7)'
    }

    const values = [
      car.name,
      car.color,
      car.wheels,
      car.interior,
      car.exterior,
      car.roof,
      car.price
    ]
    

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error('⚠️ error inserting custom car', err)
        return
      }
      console.log(`✅ Custom car added successfully`)
    })
  })
}

seedCustomCarTable()
