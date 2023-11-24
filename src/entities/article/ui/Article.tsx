import { useNavigate } from "react-router";

import { useArticle } from "../model/hooks";

export const ArticleContent = (articleId: string) => {
    const { id, title, body } = useArticle(articleId);
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`../`);
    };

    return (
        <li className="flex gap-4 mb-16">
            <span className="flex-none text-xl">{id}</span>
            <div className="inline-block w-full flex-auto min-w-0">
                <span className="text-xl">{title}</span>
                <p>{body}</p>
            </div>
            <button
                className="flex-none border-solid border-2 border-indigo-600 px-2"
                onClick={handleNavigate}
            >
                Go back
            </button>
        </li>
    );
};
