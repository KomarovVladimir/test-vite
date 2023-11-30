import { useState } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router-dom";

import { appStore } from "app/appStore";
import { Page404 } from "pages/page404";

import { Router } from "./RouterProvider";
import { PageContextProvider } from "./PageContextProvider";

export const Provider = () => {
    const [page, setPage] = useState(1);

    return (
        <ErrorBoundary FallbackComponent={Page404}>
            <ReduxProvider store={appStore}>
                <BrowserRouter>
                    <PageContextProvider value={{ page, setPage }}>
                        <Router />
                    </PageContextProvider>
                </BrowserRouter>
            </ReduxProvider>
        </ErrorBoundary>
    );
};
