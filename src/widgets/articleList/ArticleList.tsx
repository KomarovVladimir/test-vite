import { useGetArticlePreviewsQuery } from "entities/article/api";

export const ArticleList = () => {
    const { data = [] } = useGetArticlePreviewsQuery();

    return (
        <ol className="list-decimal">
            {data.map(({ title, body }, index) => (
                <li key={index}>
                    <div>{title}</div>
                    <p>{body}</p>
                </li>
            ))}
        </ol>
    );
};
