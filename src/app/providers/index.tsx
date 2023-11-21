import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { Router } from "./RouterProvider";

export const Provider = () => {
    return (
        // <ErrorBoundary FallbackComponent={FullPageError}>
        <BrowserRouter>
            <Suspense fallback="Loading...">
                <Router />
            </Suspense>
        </BrowserRouter>
        //</ErrorBoundary>
    );
};
