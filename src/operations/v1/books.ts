import { books } from '../../database'

export const getAllBooks = async () => {
    return books.getAll()
}