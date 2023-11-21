export const PATH_PAGE = {
    root: "/",
    feed: "/feed",
    article: {
        id: (id: string) => `/article/${id}`,
    },
    page404: "/404",
};
