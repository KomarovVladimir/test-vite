import { ElementType, Suspense } from "react";

export const Loadable =
    (Component: ElementType) => (props: Record<string, unknown>) =>
        (
            <Suspense fallback="Loading...">
                <Component {...props} />
            </Suspense>
        );
