import { Article } from "./types";

import { useGetArticleByIdQuery } from "../api";

export const useArticle = (articleId: string) => {
    const { data: { id, title, body } = <Article>{}, isLoading } =
        useGetArticleByIdQuery(articleId);

    return {
        id,
        title,
        body,
        isLoading,
    };
};
