import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/appStore";

type ArticleListState = {
    page: number;
};
const initialState: ArticleListState = {
    page: 0,
};

export const articleListSlice = createSlice({
    name: "articleList",
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
    },
});

export const selectPage = (state: RootState) => state.articleList.page;

export const { setPage } = articleListSlice.actions;
