import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ARTICLES_TAG } from "./tags";

export const baseApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com",
    }),
    endpoints: () => ({}),
    tagTypes: [ARTICLES_TAG],
});
