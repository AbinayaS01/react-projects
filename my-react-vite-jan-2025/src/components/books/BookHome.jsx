import { Outlet } from "react-router-dom";
import { BookHeader } from "./BookHeader";

export function BookHome(){
    return (
        <>
            <BookHeader></BookHeader>
            <Outlet></Outlet>
        </>
    )
}