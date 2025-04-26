import { status } from "http-status";
import carService from "../../services/car.service"

const getCars = async (req: any, res: any) => {
    const cars = await carService.getCars();
    res.status(status.OK).json(cars);
};
const postCars = async (req: any, res: any) => {
    console.log(req.body)
    const { name, dni, patent, brand, model, price } = req.body
    const newCar = await carService.postCars({ name, dni, patent, brand, model, price });
    res.status(status.OK).json(newCar);
};

const deleteCar = async (req:any,res:any) =>{
    const id = parseInt(req.params.id, 10)
    await carService.deleteCar(id)
    res.status(status.OK).send()
}

export default {
    getCars,
    postCars,
    deleteCar
};

