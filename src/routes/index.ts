import { Router } from "express";
import loginUserController from "../controllers/loginUser.controller";
import authenticateCredentials from "../middleware/authenticateCredentials.middleware";
import validateShape from "../middleware/validateShape.middleware";
import loginUserShape from "../shapes/user/loginUser.shape";
import userRouter from "./user";

const router = Router()

router.use('/users', userRouter)
router.post('/login', validateShape(loginUserShape), authenticateCredentials, loginUserController)

export default router;
