export interface IComida{
    id: number,
    name : string,
    price : number,
    restaurant: string,
    distancia: number,
    image: string
}

const MockComida: IComida[] = [
  
  { id: 1, name: "Hambúrguer Clássico", price: 25.90, restaurant: "Burger House", distancia: 1.2 ,image: "https://png.pngtree.com/png-vector/20240829/ourmid/pngtree-delicious-and-testy-cheese-burger-png-image_13659847.png"},
  { id: 2, name: "Pizza Calabresa", price: 42.50, restaurant: "Pizzaria Bella Massa", distancia: 3.5 ,image: "https://png.pngtree.com/png-vector/20241211/ourmid/pngtree-authentic-italian-pizza-with-cheese-and-fresh-vegetable-toppings-png-image_14714611.png"},
  { id: 3, name: "Sushi Combo 12 peças", price: 38.00, restaurant: "Sushi Zen", distancia: 2.1 ,image: "https://static.vecteezy.com/system/resources/previews/049/159/934/non_2x/japanese-food-sushi-isolated-transparent-png.png"},
  { id: 4, name: "Açaí 500ml", price: 18.75, restaurant: "Açaí Tropical", distancia: 0.8 ,image: "https://png.pngtree.com/png-clipart/20240418/original/pngtree-acai-bowl-fresh-colorful-organic-healthy-food-png-image_14884058.png"},
  { id: 5, name: "Hambúrguer Clássico", price: 25.90, restaurant: "Burger House", distancia: 1.2 ,image: "https://png.pngtree.com/png-vector/20240829/ourmid/pngtree-delicious-and-testy-cheese-burger-png-image_13659847.png"},
  { id: 6, name: "Pizza Calabresa", price: 42.50, restaurant: "Pizzaria Bella Massa", distancia: 3.5 ,image: "https://png.pngtree.com/png-vector/20241211/ourmid/pngtree-authentic-italian-pizza-with-cheese-and-fresh-vegetable-toppings-png-image_14714611.png"},
  { id: 7, name: "Sushi Combo 12 peças", price: 38.00, restaurant: "Sushi Zen", distancia: 2.1 ,image: "https://static.vecteezy.com/system/resources/previews/049/159/934/non_2x/japanese-food-sushi-isolated-transparent-png.png"},
  { id: 8, name: "Açaí 500ml", price: 18.75, restaurant: "Açaí Tropical", distancia: 0.8 ,image: "https://png.pngtree.com/png-clipart/20240418/original/pngtree-acai-bowl-fresh-colorful-organic-healthy-food-png-image_14884058.png"}


]

export default MockComida;