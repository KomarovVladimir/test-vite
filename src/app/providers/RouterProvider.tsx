import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

import { PATH_PAGE } from "shared/lib/reactRouter";
import { FeedPage } from "pages/feedPage";
import { MainLayout } from "pages/layouts/MainLayout";
import { Loadable } from "shared/ui/loadable";

const ArticlePage = Loadable(
    lazy(() =>
        import("pages/articlePage").then((module) => ({
            default: module.ArticlePage,
        }))
    )
);

export const Router = () => {
    return useRoutes([
        {
            element: <MainLayout />,
            children: [
                {
                    path: PATH_PAGE.root,
                    element: <FeedPage />,
                },
                {
                    path: "article",
                    children: [
                        {
                            element: (
                                <Navigate to={PATH_PAGE.page404} replace />
                            ),
                            index: true,
                        },
                        { path: ":id", element: <ArticlePage /> },
                    ],
                },
            ],
        },
    ]);
};
