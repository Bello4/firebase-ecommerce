import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import direstoryReducer from "./directory/directory_reducer";
import userReducer from "./userReducer/user-reducer";
import cartReducer from "./cart/Cart-reducer";
import shopReducer from "./shop/shop_reducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: direstoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);