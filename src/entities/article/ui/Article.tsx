import { useNavigate, useParams } from "react-router";

import { useArticle } from "../model/hooks";

export const ArticleContent = () => {
    const { id } = useParams() as { id: string };

    const { title, body } = useArticle(id);
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/`, { replace: true });
    };

    return (
        <div className="flex flex-col gap-6 text-left">
            <div className="inline-block w-full flex-auto min-w-0">
                <span className="text-xl">{title}</span>
                <p>{body}</p>
            </div>
            <button
                className="flex-none border-solid border-2 border-indigo-600 p-2"
                onClick={handleNavigate}
            >
                Go back
            </button>
        </div>
    );
};
