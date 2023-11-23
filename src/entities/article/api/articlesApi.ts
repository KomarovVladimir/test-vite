import { baseApi } from "shared/api";

import { Article } from "../model/types";

export const articlesApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getArticlePreviews: build.query<Article[], void>({
            query: () => ({
                url: `/posts`,
            }),
            providesTags: ["ARTICLES_TAG"],
        }),
        getArticle: build.query<Article, string>({
            query: (articleId) => ({
                url: `/article/:${articleId}`,
            }),
            providesTags: ["ARTICLES_TAG"],
        }),
    }),
});

export const { useGetArticlePreviewsQuery } = articlesApi;