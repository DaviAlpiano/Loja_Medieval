import { ProductInputtableTypes } from "../../src/database/models/product.model"

const createProduct: ProductInputtableTypes = {
    "id": 6,
    "name": "Martelo de Thor",
    "price": "30 peças de ouro",
    "userId": 1
}

const product = {
    "name": "Martelo de Thor",
    "price": "30 peças de ouro",
    "userId": 1
}

const products: ProductInputtableTypes[] = [
    {
        "id": 1,
        "name": "Excalibur",
        "price": "10 peças de ouro",
        "userId": 1
      },
      {
        "id": 2,
        "name": "Espada Justiceira",
        "price": "20 peças de ouro",
        "userId": 1
      },
]

export {
    createProduct,
    product,
    products,
}