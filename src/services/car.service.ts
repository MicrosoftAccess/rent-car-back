import { PrismaClient } from "@prisma/client";
import { createClientAsync, createClient }  from 'soap';
const prisma = new PrismaClient();

const getCars = async () =>{
    return await prisma.car.findMany();
}

const postCars = async (data:any) =>{
    return await prisma.car.create({data})
}

const deleteCar = async (id:number) =>{
    
    return await prisma.car.delete({where:{id: id}})
}

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