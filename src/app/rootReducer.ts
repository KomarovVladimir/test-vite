import { combineReducers } from "@reduxjs/toolkit";

import { baseApi } from "shared/api";
import { articleListSlice } from "widgets/articleList/model/slice";

export const rootReducer = combineReducers({
    [articleListSlice.name]: articleListSlice.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
});
