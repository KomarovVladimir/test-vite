import { useEffect, useRef, useState } from "react";

import { useLazyGetArticlesByPageQuery } from "../api/articlesApi";

export const useArticleList = () => {
    const listRef = useRef<HTMLDivElement>(null);
    const [page, setPage] = useState(1);
    const [getPage, { data: articles = [], isLoading }] =
        useLazyGetArticlesByPageQuery();

    useEffect(() => {
        const element = listRef.current || null;
        const handleScroll = () => {
            if (element) {
                const scrolledToBottom =
                    element?.scrollHeight - element?.scrollTop ===
                    element?.clientHeight;

                if (scrolledToBottom && !isLoading) {
                    setPage(page + 1);
                }
            }
        };

        element?.addEventListener("scroll", handleScroll);

        return function () {
            element?.removeEventListener("scroll", handleScroll);
        };
    }, [isLoading, page]);

    useEffect(() => {
        getPage(page);
    }, [page, getPage]);

    return {
        listRef,
        articles,
    };
};
