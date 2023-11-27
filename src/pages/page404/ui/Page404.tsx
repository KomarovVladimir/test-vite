import { useNavigate } from "react-router-dom";

import { PATH_PAGE } from "shared/lib/reactRouter";

export const Page404 = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(PATH_PAGE.root, { replace: true });
    };

    return (
        <div className="flex flex-col gap-6">
            <div>404 Not Found</div>
            <button
                className="flex-none border-solid border-2 border-indigo-600 p-2"
                onClick={handleNavigate}
            >
                Go back
            </button>
        </div>
    );
};
