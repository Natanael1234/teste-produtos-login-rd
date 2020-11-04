export class Product {
  id: number;
  name: string;
  image: string;
  tags: string;
  price: number;
  constructor(dados: any) {
    this.build(dados);
  }
  build(dados: any) {
    this.id = dados.id;
    this.name = dados.name;
    this.image = dados.image;
    this.tags = dados.tags;
    this.price = dados.price;
  }
}
