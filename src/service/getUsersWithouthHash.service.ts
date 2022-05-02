import { UserRepository } from "../repositories"

const getUsersWithouthHash = async () => {
  const users = await new UserRepository().findUsers()

  const hashFreeUsers = users.map(user => {
    const { password, ...userStrippedHash } = user
    return userStrippedHash
  })

  return hashFreeUsers;
}

export default getUsersWithouthHash;
