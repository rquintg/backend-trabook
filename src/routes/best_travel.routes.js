import {Router} from "express";
import {getBest_travelById, createBestTravel, getBest_travel, updateBestTravel, deleteBestTravel } from "../controllers/best_travel.controller.js";

const router = Router();

router.get('/best', getBest_travel);

router.get('/best/:id', getBest_travelById);

router.post('/best', createBestTravel);

router.patch('/best/:id', updateBestTravel);

router.delete('/best/:id', deleteBestTravel);


export default router;
