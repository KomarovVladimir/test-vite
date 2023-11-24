import { useArticleList } from "../model/hooks";

export const ArticleList = () => {
    const { articles } = useArticleList();

    return (
        <ul className="list-none text-left">
            {articles.map(({ id, title, body }, index) => (
                <li key={index} className="flex gap-4 mb-16">
                    <span className="flex-none text-xl">{id}</span>
                    <div className="inline-block w-full flex-auto min-w-0">
                        <span className="text-xl">{title}</span>
                        <p className="truncate">{body}</p>
                    </div>
                    <button className="flex-none border-solid border-2 border-indigo-600 px-2">
                        Read more
                    </button>
                </li>
            ))}
        </ul>
    );
};
