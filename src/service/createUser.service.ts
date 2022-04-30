import { QueryFailedError } from "typeorm";
import { User } from "../entities/User";
import { UserRepository } from "../repositories";
import { ErrorHandler } from "../utils/error.util";

interface IDetails extends QueryFailedError {
  detail: string
}

const createUserService = async (user: User) => {
  try {
    const {password, ...createdUser} = await new UserRepository().saveUser(user)

    return createdUser
  } catch (error) {
    if (error instanceof QueryFailedError) {
      const detail = (error as IDetails).detail

      if (detail.includes("already exists")){
        throw new ErrorHandler(409, detail)
      }
    }
  }
}

export default createUserService