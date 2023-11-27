import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useLazyGetArticlesByPageQuery } from "../api/articlesApi";

export const useArticleList = () => {
    const itemHeight = 35;
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const [getPage, { data: articles = [], isLoading }] =
        useLazyGetArticlesByPageQuery();

    const handleNavigate = (pageId: string) => () => {
        navigate(`article/${pageId}`);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrolledToBottom =
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight;

            if (scrolledToBottom && !isLoading) {
                console.log(scrolledToBottom, isLoading);

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
        itemHeight,
        articles,
        handleNavigate,
    };
};
