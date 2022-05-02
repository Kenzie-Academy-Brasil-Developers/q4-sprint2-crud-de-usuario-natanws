import { Request } from "express";
import { UserRepository } from "../repositories";
import { ErrorHandler } from "../utils/error.util";

const updateUser = async (req: Request) => {
  try {
    const userToUpdate = await new UserRepository().findById(req.params.uuid)
    
    const newData = { ...userToUpdate, ...req.body, updatedOn: new Date() }
    
    const updatedUser = await new UserRepository().updateUser(newData);
    return updatedUser;
  } catch (e) {
    throw new ErrorHandler(400, e)
  }
}

export default updateUser;
