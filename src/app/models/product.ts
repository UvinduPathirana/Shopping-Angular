export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;

  constructor(id, name, description = '', price, imageUrl = 'https://www.sun-sentinel.com/resizer/57GyO6vyw_s7714FuO9l_WK_lcM=/630x630/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/XYVLGQ5LKVBH5FIPRS5PFYK4J4.jpg'){
    this.id = id
    this.name = name
    this.description = description
    this.price = price
    this.imageUrl = imageUrl
  }
}
