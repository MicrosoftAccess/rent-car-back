import express from 'express';
import carRoute from './car.route';


const router = express.Router();
const defaultRoutes = [
    {
        path: '/cars',
        route: carRoute
    },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});


export default router;