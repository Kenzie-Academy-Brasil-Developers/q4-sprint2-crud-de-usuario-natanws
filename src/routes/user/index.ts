import { Router } from "express";
import createUserController from "../../controllers/createUser.controller";
import validateShape from "../../middleware/validateShape.middleware";
import { createUserShape } from "../../shapes/user/createUser.shape";

const userRouter = Router();

userRouter.post('', validateShape(createUserShape), createUserController)

export default userRouter;
