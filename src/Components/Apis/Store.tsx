import myReducer from "./ReduxState";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux"
import storage from "redux-persist/lib/storage";

import {
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";

const persistConfig = {
    key: "CUR",
    version: 1,
    storage
};

const persistedReducer = persistReducer(persistConfig, myReducer)

export const Store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMddleware) =>
        getDefaultMddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const UseAppDispach: () => typeof Store.dispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<
	ReturnType<typeof Store.getState>
> = useSelector;