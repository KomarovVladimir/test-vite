import { useCallback, useEffect } from "react";

import { useGetArticlesByPageQuery } from "../api";

export const useArticleList = () => {
    const { data = [], isLoading } = useGetArticlesByPageQuery(1);

    const handleScroll = useCallback(() => {
        if (
            window.innerHeight + document.documentElement.scrollTop !==
                document.documentElement.offsetHeight ||
            isLoading
        ) {
            return;
        }
        // fetchData();
    }, [isLoading]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    return {
        data,
        handleScroll,
    };
};
