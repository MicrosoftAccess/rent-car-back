import { PrismaClient } from "@prisma/client";
import { createClientAsync, createClient }  from 'soap';
const prisma = new PrismaClient();


// uses prisma findMany function to bring all the cars
const getCars = async () =>{
    return await prisma.car.findMany();
}
// uses prisma create function to create a new register in the car table
const postCars = async (data:any) =>{
    return await prisma.car.create({data})
}

// uses prisma to delete a car in base of its id
const deleteCar = async (id:number) =>{
    
    return await prisma.car.delete({where:{id: id}})
}

// connects to a SOAP server and brings a list of all the cars in the database
const getCarsSOAP = async (): Promise<any> => {

  const wsdlUrl = 'http://localhost:8080/soap/cars?wsdl';

    return new Promise((resolve, reject) => { 
        createClient(wsdlUrl, (err, client) => {
            client.getCars((err: any, result : any) => {
                resolve({cars: result.return});
            });
        });

    })
};

export default {
    getCars,
    postCars,
    deleteCar,
    getCarsSOAP
}