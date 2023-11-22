import { BrowserRouter } from "react-router-dom";
import { Router } from "./RouterProvider";

export const Provider = () => {
    return (
        // <ErrorBoundary FallbackComponent={FullPageError}>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
        //</ErrorBoundary>
    );
};
