import { Provider as ReduxProvider } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router-dom";

import { appStore } from "app/appStore";
import { Page404 } from "pages/page404";

import { Router } from "./RouterProvider";

export const Provider = () => {
    return (
        <ErrorBoundary FallbackComponent={Page404}>
            <ReduxProvider store={appStore}>
                <BrowserRouter>
                    <Router />
                </BrowserRouter>
            </ReduxProvider>
        </ErrorBoundary>
    );
};
