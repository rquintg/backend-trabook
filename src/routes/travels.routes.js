import {Router} from "express";
import {getTravels, createTravel, getTravelById, deleteTravel, updateTravel} from "../controllers/travels.controller.js";

const router = Router();

router.get('/travels', getTravels);

router.get('/travels/:id', getTravelById);

router.post('/travels', createTravel);

router.patch('/travels/:id', updateTravel);

router.delete('/travels/:id', deleteTravel);

export default router;
