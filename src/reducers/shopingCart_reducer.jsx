import TYPES from "./actionTypes";

export const productsInitialState = {
    products: [
        {
            "id":1,
            "name": carnesuave,
            "price": 300,
            category: "clasicas"
        },
    {
        id:2,
        "name":pino,
        "price": 300,
        category: "clasicas"
    },
    {
        id: 3,
        name: "jamón y queso",
        "price": 300,
        category: "clasicas"
    }
    ],
    cart: [],
    totalPriceShopingCart: 0
}

export const reducerCart = (state, action)  => {
    switch(action.type){
        case TYPES.ADD_TO_CART:{

        }

        case TYPES.DElETE.PRODUCTS_FROM_CART:{

        }

        case TYPES.CALCULATE_TOTAL_PRICE_OF_THE_CART:{

        }
        default:
            return state;
    }

    throw Error("Unknown action:" +action.type)
}