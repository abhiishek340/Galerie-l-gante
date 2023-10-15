import {pool} from '../config/database.js'

const getCars = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM customcar ORDER BY id ASC')
        res.status(200).json(results.rows)
       
        
    } catch (error) {
        res.status(500).json(error)    
    }
}


const getCarById = async (req, res) => {
    try{
        const {id} = req.params  // const id = req.params.id
        const selectQuery = `SELECT name, color, wheels, interior, exterior, roof, price FROM customcar WHERE id = ${id}`
        const results = await pool.query(selectQuery)
        res.status(200).json(results.rows[0])

    } catch(error){
        res.status(500).json(error)

    }
}


const createCar = async (req, res) => {
    try {
        const {name, color, wheels, interior, exterior, roof, price} = req.body
        const insertQuery = `INSERT INTO customcar (name, color, wheels, interior, exterior, roof, price) VALUES ('${name}','${color}', '${wheels}', '${interior}', '${exterior}', '${roof}', '${price}') RETURNING *`
        const results = await pool.query(insertQuery)
        res.status(200).json(results.rows[0])
        
    } catch (error) {
        res.status(500).json(error)    
    }
}

const updateCar = async (req, res) => {
    try {
        const {id} = req.params
         console.log("i am inside the update")
        const {name, color, wheels, interior, exterior, roof, price} = req.body
        const updateQuery = `UPDATE customcar SET name = '${name}', color = '${color}', wheels = '${wheels}', interior = '${interior}', exterior = '${exterior}', roof = '${roof}', price = '${price}' WHERE id = ${id} RETURNING *`
        const results = await pool.query(updateQuery)
        res.status(200).json(results.rows[0])
        
    } catch (error) {
        res.status(500).json(error)    
    }
}

const deleteCar = async (req, res) => {
    try {
        console.log("I am running inside delete")
        const {id} = req.params
        const deleteQuery = `DELETE FROM customcar WHERE id = ${id}`
        const results = await pool.query(deleteQuery)
        res.status(200).json(results.rows[0])
        
    } catch (error) {
        res.status(500).json(error)    
    }
}

export default {getCars, getCarById, createCar, updateCar, deleteCar}