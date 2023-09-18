import {Router} from "express";
import {getBlog, createBlog, getBlogById, updateBlog, deleteBlog} from "../controllers/blog.controller.js";

const router = Router();

router.get('/blog', getBlog);
router.get('/blog/:id', getBlogById);
router.post('/blog', createBlog);
router.patch('/blog/:id', updateBlog);
router.delete('/blog/:id', deleteBlog);

export default router;



