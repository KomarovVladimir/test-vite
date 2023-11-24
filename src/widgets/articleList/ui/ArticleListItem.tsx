import { MouseEventHandler } from "react";

import { Article } from "entities/article/model";

type Props = Article & {
    className?: string;
    handleNavigate: (id: string) => MouseEventHandler<HTMLButtonElement>;
};

export const ArticleListItem = ({ id, title, body, handleNavigate }: Props) => (
    <li className="flex gap-4 mb-16">
        <span className="flex-none text-xl">{id}</span>
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
