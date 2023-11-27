import { Outlet } from "react-router-dom";

export const MainLayout = () => (
    <div className="container mx-auto max-w-4xl h-screen">
        <Outlet />
    </div>
);
