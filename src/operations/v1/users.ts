import { users } from '../../database'

export const getAllUsers = async () => {
    return users.getAll()
}