export interface IMercado{
    id: number,
    product : string,
    price : number,
    quant: string,
    distancia: number,
    image: string
}

const MockMercado: IMercado[] = [
  { id: 1, product: "Arroz 5kg", price: 28.90, quant: "1 unidade", distancia: 1.5, image: "https://www.arenaatacado.com.br/on/demandware.static/-/Sites-storefront-catalog-sv/default/dw55818852/Produtos/31364-7896079481016-arroz%20tipo%201%20namorado%20pacote%205kg-namorado-1.jpg" },
  { id: 2, product: "Feijão 1kg", price: 8.50, quant: "2 unidades", distancia: 2.3, image: "https://www.jauserve.com.br/dw/image/v2/BFJL_PRD/on/demandware.static/-/Sites-jauserve-master/default/dw89b4cb27/7896086422026.png?sw=1800" },
  { id: 3, product: "Leite 1L", price: 4.75, quant: "6 unidades", distancia: 0.9, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRMjZDsar8f2jgeK51g1DoY8a4M2atBcIduQ&s" },
  { id: 4, product: "Tapioca 900ml", price: 6.99, quant: "1 unidade", distancia: 3.1, image: "https://cdn.awsli.com.br/600x450/206/206579/produto/231666792/tapioca-rocha-megustaveg-um6xjha6oj.jpg" }
];

export default MockMercado;