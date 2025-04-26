import express from 'express';
import carController from '../controllers/cars/car.controller';
const router = express.Router();

router.get('/list', carController.getCars)
router.post('/', carController.postCars)
router.delete('/:id', carController.deleteCar)

export default router;