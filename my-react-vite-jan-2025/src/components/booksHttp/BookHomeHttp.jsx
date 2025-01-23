import { Outlet } from "react-router-dom";
import { BookHeaderHttp } from "./BookHeaderHttp";

export function BookHomeHttp(){
    return (
        <>
            <BookHeaderHttp></BookHeaderHttp>
            <Outlet></Outlet>
        </>
    )
}