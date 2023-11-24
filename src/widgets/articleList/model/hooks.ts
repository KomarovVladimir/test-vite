import { useCallback, useEffect, useState } from "react";

import { useLazyGetArticlesByPageQuery } from "../api";

export const useArticleList = () => {
    const [page, setPage] = useState(1);
    const [getPage, { data = [], isLoading }] = useLazyGetArticlesByPageQuery();

    // const handleScroll = useCallback(() => {
    //     if (
    //         window.innerHeight + document.documentElement.scrollTop !==
    //             document.documentElement.offsetHeight ||
    //         isLoading
    //     ) {
    //         return;
    //     }

    //     setPage(page + 1);
    // }, [isLoading]);

    useEffect(() => {
        getPage(page);
    }, [page]);

    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, [handleScroll]);

    return {
        data,
        page,
        setPage,
    };
};
