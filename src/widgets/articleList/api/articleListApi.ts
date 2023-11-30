import { baseApi } from "shared/api";
import { Article } from "entities/article/model";

export const articleListApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getArticlesByPage: build.query<Article[], number>({
            query: (page) => ({
                url: `/posts?_page=${page}`,
            }),
            providesTags: ["ARTICLES_TAG"],
            serializeQueryArgs: ({ endpointName }) => {
                return endpointName;
            },
            merge: (currentCache, newItems) => {
                currentCache.push(...newItems);
            },
            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg;
            },
        }),
    }),
});

export const { useGetArticlesByPageQuery } = articleListApi;
