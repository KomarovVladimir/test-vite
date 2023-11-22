import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { appStore } from "app/appStore";
import { Router } from "./RouterProvider";

export const Provider = () => {
    return (
        // <ErrorBoundary FallbackComponent={FullPageError}>
        <ReduxProvider store={appStore}>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </ReduxProvider>
        //</ErrorBoundary>
    );
};
