import { Image, UpdateDate } from "./site.interface"

export interface User {
  _id: string
  data: DataUser
  email: string
  siteId: string
}

interface DataUser {
  password: string
  username: string
  role: string
  status: boolean
  oAuth: OAuth
  image: Image
  updateDate: UpdateDate
}

interface OAuth{
  provider: string
}

export interface CreateUser{
  username: string
  siteId: string
  image: string
  email: string
  password: string
  role: string
  oAuth: string
}
export interface UpdateUser {
  id: string
  username: string
  siteId: string
  image: string
  email: string
}