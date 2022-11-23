import { Promotion } from "../product.interface"
import { Image, Seo, Site, UpdateDate } from "../site.interface"

export interface Wear {
  _id: string
  data: DataWear
  siteId: string
  parentId: string
}
export interface DataWear {
  type: string
  name: string;
  slug: string;
  price: number;
  discountPrice: number;
  description: string;
  promotion: Promotion
  details: string;
  featured: string;
  specs: string;
  tags: Tag[]
  image: Image[];
  seo: Seo;
  updateDate: UpdateDate
}

export interface Tag {
  uid: string
  text: string
  href: string
}

export interface CreateWear {
  input:{
    name: string
    description: string
    promotion: string
    price: number
    discountPrice: number
    siteId: string
    parentId: string
    uid: string
  }
  type: string
}
export interface UpdateWear {
  id:string
  input:{
    name: string
    description: string
    promotion: string
    price: number
    discountPrice: number
    uid: string
    siteId: string
    parentId: string
  }
  type: string
}
export interface DeleteWear {
  id:string
  type: string
}
export interface DeleteManyWearById {
  ids:string[]
  type: string
}