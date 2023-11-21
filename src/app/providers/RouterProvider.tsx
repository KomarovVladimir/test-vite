import { useRoutes } from "react-router-dom";

import { PATH_PAGE } from "shared/lib/reactRouter";
import { HomePage } from "pages/home";

export const Router = () => {
    return useRoutes([
        {
            //    element: <MainLayout />
            children: [
                {
                    path: PATH_PAGE.root,
                    element: <HomePage />,
                },
            ],
        },
    ]);
};
