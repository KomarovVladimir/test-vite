import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

import { PATH_PAGE } from "shared/lib/reactRouter";
import { Loadable } from "shared/ui/loadable";
import { FeedPage } from "pages/feedPage";
import { MainLayout } from "pages/layouts";
import { Page404 } from "pages/page404";

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
            path: PATH_PAGE.root,
            element: <MainLayout />,
            children: [
                {
                    index: true,
                    element: <FeedPage />,
                },
                {
                    path: PATH_PAGE.page404,
                    element: <Page404 />,
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
                {
                    path: "*",
                    element: <Navigate to={PATH_PAGE.page404} replace />,
                },
            ],
        },
    ]);
};
