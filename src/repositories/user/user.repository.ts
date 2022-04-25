import { getRepository, Repository } from "typeorm";
import { User } from "../../entities/User";
import { IUser, IUserRepo } from "./interfaces";

class UserRepository implements IUserRepo {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  saveUser = async (user: IUser) => await this.ormRepository.save(user);
  findUsers = async () => await this.ormRepository.find();
  findById = async (id: string) => await this.ormRepository.find({ uuid: id })
}

export { UserRepository, IUser }