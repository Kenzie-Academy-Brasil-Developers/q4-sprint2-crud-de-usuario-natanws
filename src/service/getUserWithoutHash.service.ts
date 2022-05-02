import { Request } from "express";
import { UserRepository } from "../repositories";

const getUserWithoutHash = async (req: Request) => {
  const { uuid } = req;
  const user = await new UserRepository().findById(uuid)
  const { password, ...noHash } = user
  return noHash
}

export default getUserWithoutHash;
