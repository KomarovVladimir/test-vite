import { useEffect, useState } from "react";

import { useLazyGetArticlesByPageQuery } from "../api";

export const useArticleList = () => {
    const [page, setPage] = useState(1);
    const [getPage, { data: articles = [], isLoading }] =
        useLazyGetArticlesByPageQuery();

    useEffect(() => {
        const handleScroll = () => {
            console.log(page);

            const scrolledToBottom =
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight;

            if (scrolledToBottom && !isLoading) {
                setPage(page + 1);
            }
        };

        document.addEventListener("scroll", handleScroll);

        return function () {
            document.removeEventListener("scroll", handleScroll);
        };
    }, [page, isLoading, getPage]);

    useEffect(() => {
        getPage(page);
    }, [page, getPage]);

    return {
        articles,
    };
};
