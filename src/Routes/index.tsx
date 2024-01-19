import { RouterProvider, createHashRouter } from "react-router-dom";
import GuestLayout from "../Layout/Guest";
import Landing from "../Pages/Landing";

export default function Routing() {


    const Routings = createHashRouter([
        {
            path: '/',
            element: <Landing />
        }
    ])

    return <GuestLayout  children={<RouterProvider router={Routings} />} />
}