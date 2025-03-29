import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import Navigation from "@/components/Navigation.tsx";

const NotFound = () => {
    const location = useLocation();

    useEffect(() => {
        console.error(
            "404 Error",
            location.pathname
        );
    }, [location.pathname]);

    return (
        <>
            <Navigation/>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="text-center">
                    <p className="text-xl text-gray-600 mb-4">Page not found</p>
                </div>
            </div>
        </>
    );
};

export default NotFound;
