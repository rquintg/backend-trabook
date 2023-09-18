import {Router} from "express";
import {getUtil, createUtil, getUtilById, updateUtil, deleteUtil} from "../controllers/util.controller.js";

const router = Router();

router.get('/util', getUtil);
router.get('/util/:id', getUtilById);
router.post('/util', createUtil);
router.patch('/util/:id', updateUtil);
router.delete('/util/:id', deleteUtil);

export default router;



