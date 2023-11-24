import { baseApi } from "shared/api";
import { Article } from "entities/article/model";

export const articlesApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getArticlesByPage: build.query<Article[], number>({
            query: (page) => ({
                url: `/posts?_page=${page}`,
            }),
            providesTags: ["ARTICLES_TAG"],
        }),
        getArticleById: build.query<Article, string>({
            query: (articleId) => ({
                url: `/article/:${articleId}`,
            }),
            providesTags: ["ARTICLES_TAG"],
        }),
    }),
});

export const { useGetArticlesByPageQuery } = articlesApi;
