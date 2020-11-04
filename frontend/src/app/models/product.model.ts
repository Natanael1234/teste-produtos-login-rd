export class Product {
  id: number;
  name: string;
  image: string;
  tags: string;
  price: number;
  cartQuantity: number;
  constructor(dados: any | Product) {
    this.build(dados);
  }
  build(dados: any | Product) {
    this.id = dados.id;
    this.name = dados.name;
    this.image = dados.image;
    this.tags = dados.tags;
    this.price = dados.price;
    this.cartQuantity = dados.cartQuantity || 0;
  }
}
