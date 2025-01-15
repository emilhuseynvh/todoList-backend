import { Router } from "express";
import authRouter from "./auth.router";
import noteRouter from "./note.router";

const router = Router()

router.use('/auth', authRouter);
router.use('/note', noteRouter);


export default router;