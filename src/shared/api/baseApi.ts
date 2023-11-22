import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ARTICLES_TAG } from "./tags";

export const baseApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.BASE_URL }),
    endpoints: (builder) => ({
        getPokemonByName: builder.query<null, string>({
            query: (id) => `article/${id}`,
        }),
    }),
    tagTypes: [ARTICLES_TAG],
});
