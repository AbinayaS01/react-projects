import { Outlet } from "react-router-dom";
import { PropertyHeader } from "./PropertyHeader";

export function PropertyHome(){
    return (
        <>
        <PropertyHeader></PropertyHeader>
        <Outlet></Outlet>
        </>
    )
}