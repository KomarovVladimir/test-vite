import { baseApi } from "shared/api";
import { Article } from "entities/article/model";

export const articleApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleById: build.query<Article, string>({
            query: (articleId) => ({
                url: `/posts/${articleId}`,
            }),
            providesTags: ["ARTICLES_TAG"],
        }),
    }),
});

export const { useGetArticleByIdQuery } = articleApi;
