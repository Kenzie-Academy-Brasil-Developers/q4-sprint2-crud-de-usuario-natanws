interface IUser {
  uuid: string;
  name: string;
  email: string;
  password: string;
  isAdm: boolean;
  createdOn: Date;
  updatedOn: Date;
}

interface IUserRepo {
  saveUser: (user: IUser) => Promise<IUser>;
  findUsers: () => Promise<IUser[]>;
  findById: (id: string) => Promise<IUser[]>;
  findByEmail: (email: string) => Promise<IUser>;
}

export { IUser, IUserRepo }