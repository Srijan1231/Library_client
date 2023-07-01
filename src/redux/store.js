import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../component/pages/signup-signin/userSlice.js";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const userPersistConfig = {
  key: "userInfo",
  storage,
};
const persistedUserReducer = persistReducer(userPersistConfig, userReducer);
const store = configureStore({
  reducer: {
    userInfo: persistedUserReducer,
  },
});
const persistor = persistStore(store);
export { store, persistor };
