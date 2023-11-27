import { CSSProperties } from "react";

import { Article } from "entities/article/model";

import { useArticleList } from "../model/hooks";

type Props = {
    data: Article[];
    index?: number;
    style?: CSSProperties;
};

export const ArticleListItem = ({ index = 0, data, style }: Props) => {
    const { handleNavigate } = useArticleList();
    const { id, title, body } = data[index];

    return (
        <li className="flex gap-4 py-8" {...{ style }}>
            <span className="flex-none text-xl">{index + 1}</span>
            <div className="inline-block w-full flex-auto min-w-0">
                <span className="text-xl">{title}</span>
                <p className="truncate">{body}</p>
            </div>
            <button
                className="flex-none border-solid border-2 border-indigo-600 px-2"
                onClick={handleNavigate(id)}
            >
                Read more
            </button>
        </li>
    );
};
