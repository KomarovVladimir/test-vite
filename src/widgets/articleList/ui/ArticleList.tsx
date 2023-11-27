import { FixedSizeList as List } from "react-window";

import { ArticleListItem } from "./ArticleListItem";
import { useArticleList } from "../model/hooks";

export const ArticleList = () => {
    const { articles, listRef } = useArticleList();

    return (
        <List
            className="list-none text-left"
            height={640}
            itemCount={articles.length}
            itemSize={115}
            width="100%"
            itemData={articles}
            outerRef={listRef}
        >
            {ArticleListItem}
        </List>
    );
};
