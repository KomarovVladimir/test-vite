import { useContext, useEffect, useRef } from "react";

import { pageContext } from "shared/context/pageContext";
import { useGetArticlesByPageQuery } from "../api/articleListApi";

export const useArticleList = () => {
    const listRef = useRef<HTMLDivElement>(null);
    // const [page, setPage] = useState(1);
    const { page, setPage } = useContext(pageContext);

    const { data: articles = [], isLoading } = useGetArticlesByPageQuery(page);

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

    return {
        listRef,
        articles,
    };
};
