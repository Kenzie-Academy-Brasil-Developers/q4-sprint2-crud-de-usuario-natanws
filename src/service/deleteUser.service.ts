import { Request } from "express"
import { UserRepository } from "../repositories"

const deleteUser = async (req: Request) => {
  const deleteUser = await new UserRepository().deleteUser(req.params.uuid)
}

export default deleteUser;
