/* eslint-disable react-refresh/only-export-components */
import { Link, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DetailProduct from "./pages/DetailProduct";
import DetailOrder from "./pages/DetailOrder";

function Error() {
    return (
        <div className="flex flex-col justify-start">
            <p className="font-sans text-4xl">Oops! Something went wrong.</p>
            <Link to="/" className="border-2 border-solid border-black rounded">Go to Homepage</Link>
        </div>
    ) 
}

function NotFound() {
    return (
        <div className="flex flex-col justify-start w-fit p-3">
            <p className="font-sans text-4xl mb-2">404: Route Not Found</p>
            <Link
                to="/"
                className="w-fit px-2 font-bold border-2 border-solid border-black rounded">
                    Go to Homepage
            </Link>
        </div>
    );
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />
    },
    {
        path: "/login",
        element: <Login />,
        errorElement: <Error />
    },
    {
        path: "/register",
        element: <Register />,
        errorElement: <Error />
    },    
    {
        path: "/detail-product",
        element: <DetailProduct />,
        errorElement: <Error />
    },
    {
        path: "/detail-order",
        element: <DetailOrder />,
        errorElement: <Error />
    },
    {
        path: "*",
        element: <NotFound />,        
    },
]);

export default router;