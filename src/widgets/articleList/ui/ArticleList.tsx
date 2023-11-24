import { ArticleListItem } from "./ArticleListItem";

import { useArticleList } from "../model/hooks";

export const ArticleList = () => {
    const { articles, handleNavigate } = useArticleList();

    return (
        <ul className="list-none text-left">
            {articles.map((data, index) => (
                <ArticleListItem
                    key={index}
                    className="flex gap-4 mb-16"
                    {...{ ...data, handleNavigate }}
                />
            ))}
        </ul>
    );
};
