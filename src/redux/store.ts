// import { configureStore } from "@reduxjs/toolkit";
// import { thunk } from 'redux-thunk';
// import {authReducer} from "./reducers/reducer";
// import {userReducer} from "./reducers/userReducer";
// import {transactionReducer} from "./reducers/transactionReducer";
// import cryptoReducer from "./reducers/cryptoReducer";
// import {giftCardReducer} from "./reducers/giftCardReducer";
// import { campaignReducer } from "./reducers/capaignReducer";
// import bankDetailsReducer from "./reducers/bankReducer";
// import { passwordReducer } from "./reducers/settingsReducer";

// // Combine all reducers into a single rootReducer
// const rootReducer = {
//   auth: authReducer,
//   users: userReducer,
//   transactions: transactionReducer,
//   crypto: cryptoReducer,
//   giftCards: giftCardReducer,
//   campaign: campaignReducer,
//   bankDetails: bankDetailsReducer,
//   password: passwordReducer,
// };

// // Create and export the Redux store
// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
// });

// export default store;


import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import authReducer from './reducers/reducer.ts';

const store = createStore(authReducer, applyMiddleware(thunk));

export default store;

