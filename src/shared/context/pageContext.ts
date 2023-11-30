import { Dispatch, SetStateAction, createContext } from "react";

export const pageContext = createContext<{
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
}>({
    page: 1,
    setPage: () => {},
});
