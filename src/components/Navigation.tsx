import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";
import {Menu, User, X} from "lucide-react";

const Navigation = () => {

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user){
            setIsAuthenticated(true);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        setIsAuthenticated(false);
        navigate('/')
    };



    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-background/80 backdrop-blur-md fixed w-full z-50 top-0">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="text-xl font-bold text-purple-700">
                        Saloney
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link to="/services" className="nav-link">
                            Services
                        </Link>
                        <Link to="/about" className="nav-link">
                            About
                        </Link>
                        <Link to="/contact" className="nav-link">
                            Contact
                        </Link>


                        {isAuthenticated ? (
                            <div className="flex items-center space-x-2">
                                <Link to="/profile">
                                    <Button variant="ghost" size="icon">
                                        <User className="h-5 w-5" />
                                    </Button>
                                </Link>
                                <Button variant="ghost" className=" bg-purple-700 hover:bg-purple-600 text-white hover:text-white duration-200" onClick={handleLogout}>
                                    Logout
                                </Button>
                            </div>
                        ) : (
                            <Button asChild variant="ghost" className=" bg-purple-700 hover:bg-purple-600 text-white hover:text-white duration-200">
                                <Link to="/login">Login</Link>
                            </Button>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <Button variant="ghost" size="icon" onClick={toggleMenu}>
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden py-4">
                        <div className="flex flex-col space-y-2">
                            <Link to="/services" className="nav-link">
                                Services
                            </Link>
                            <Link to="/about" className="nav-link">
                                About
                            </Link>
                            <Link to="/contact" className="nav-link">
                                Contact
                            </Link>
                            <Link to="/login" className="nav-link">
                                Login
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};
export default Navigation;