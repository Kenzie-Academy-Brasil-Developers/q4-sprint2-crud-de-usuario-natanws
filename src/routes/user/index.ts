import { Router } from "express";
import createUserController from "../../controllers/createUser.controller";
import getAllUsersController from "../../controllers/getAllUsers.controller";
import getUserProfileController from "../../controllers/getUserProfile.controller";
import validateAdmin from "../../middleware/validateAdmin.middleware";
import validateShape from "../../middleware/validateShape.middleware";
import validateToken from "../../middleware/validateToken.middleware";
import { createUserShape } from "../../shapes/user/createUser.shape";

const userRouter = Router();

userRouter.post('', validateShape(createUserShape), createUserController)
userRouter.get('', validateToken, validateAdmin, getAllUsersController)
userRouter.get('/profile', validateToken, getUserProfileController)
userRouter.patch('/:uuid', validateToken, updateUserController)

export default userRouter;
