import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { apiManga } from "../api/api";
import { SortListChapter } from "./actions/sortListChapter";

export const store = configureStore({
  reducer: {
    [apiManga.reducerPath]: apiManga.reducer,
    sortList: SortListChapter.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiManga.middleware),
});

export const useAppDispatch : () => typeof store.dispatch = useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
