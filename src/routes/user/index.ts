import { Router } from "express";
import createUserController from "../../controllers/createUser.controller";
import deleteUserController from "../../controllers/deleteUser.controller";
import getAllUsersController from "../../controllers/getAllUsers.controller";
import getUserProfileController from "../../controllers/getUserProfile.controller";
import updateUserController from "../../controllers/updateUser.controller";
import validateAdmin from "../../middleware/validateAdmin.middleware";
import validateShape from "../../middleware/validateShape.middleware";
import validateToken from "../../middleware/validateToken.middleware";
import validateUserIdAndPermission from "../../middleware/validateUserIdAndPermission.middleware";
import { createUserShape } from "../../shapes/user/createUser.shape";
import updateUserShape from "../../shapes/user/updateUser.shape";

const userRouter = Router();

userRouter.post('', validateShape(createUserShape), createUserController)
userRouter.get('', validateToken, validateAdmin, getAllUsersController)
userRouter.get('/profile', validateToken, getUserProfileController)
userRouter.patch('/:uuid', validateShape(updateUserShape), validateToken, validateUserIdAndPermission, updateUserController)
userRouter.delete('/:uuid', validateToken, validateUserIdAndPermission, deleteUserController)

export default userRouter;
