import express from 'express'
import CarsController from '../controllers/customcar.js'

const router = express.Router()

router.get('/', CarsController.getCars)
router.get('/:id', CarsController.getCarById)
router.post('/', CarsController.createCar)
router.put('/:id', CarsController.updateCar)
router.delete('/:id', CarsController.deleteCar)



export default router