import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getCars = async () =>{
    return await prisma.car.findMany()
}

const postCars = async (data:any) =>{
    return await prisma.car.create({data})
}

const deleteCar = async (id:number) =>{
    
    return await prisma.car.delete({where:{id: id}})
}

export default {
    getCars,
    postCars,
    deleteCar
}