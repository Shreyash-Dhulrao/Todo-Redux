import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "../Files/Todo/Todos";

export const store = configureStore({
    reducer: todoSlice.reducer
});