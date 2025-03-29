import {Button} from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Clock,
    Star,
    Search,
    Filter,
    Heart,
    ChevronRight,
    Sparkles,
} from "lucide-react";
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store/store.tsx";
import {getAllServices} from "@/redux/ServiceSlice.ts";
import Navigation from "@/components/Navigation.tsx";

const categories = ["All", "Hair", "Skin", "Nails", "Massage"];

const ServiceCard = ({service, index}: { service: any; index: number }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            setIsAuthenticated(true);
        }
    }, []);

    const handleBooking = () => {
        if (isAuthenticated) {
            navigate(`/book?service=${service.id}`);
        } else {
            navigate("/login"); // Redirect to login if not authenticated
        }
    };

    const imageUrl = `https://img.freepik.com/free-photo/woman-getting-treatment-hairdresser-shop_23-2149230923.jpg?t=st=1743004447~exp=1743008047~hmac=4edfedb37bf3f3ae642f9e3ac58e3be4acd57d5396af07e146b77023fa7c4a89&w=1380`;

    return (
        <Card
            className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 slide-in bg-white dark:bg-gray-900"
            style={{animationDelay: `${index * 100}ms`}}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative h-56 overflow-hidden">
                <img
                    src={imageUrl}
                    alt={service.name}
                    className={`w-full h-full object-cover transition-all duration-500 ${isHovered ? "scale-110 brightness-90" : "scale-100"}`}
                />
                <div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    onClick={(e) => {
                        e.preventDefault();
                        setIsFavorite(!isFavorite);
                    }}
                >
                    <Heart
                        className={`h-5 w-5 ${isFavorite ? "fill-red-500 text-red-500" : ""}`}
                    />
                </Button>
                <div
                    className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-xs font-medium bg-primary text-white px-3 py-1 rounded-full">
            {service.name}
          </span>
                </div>
            </div>
            <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-bold">{service.name}</CardTitle>
                    <div className="flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded-full">
                        <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400"/>
                        <span className="text-xs font-bold">4.9</span>
                    </div>
                </div>
                <CardDescription className="line-clamp-2 mt-1">
                    {service.description}
                </CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4"/>
                        <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Sparkles className="h-4 w-4 text-amber-500"/>
                        <span>Premium</span>
                    </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
          <span
              className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            {service.price}
          </span>
                </div>
            </CardContent>
            <CardFooter>
                <Button
                    asChild
                    className=" hover:cursor-pointer w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700 transition-all duration-300"
                    size="lg"
                    onClick={handleBooking}
                >
                    <span>
                        Book Now
                    <ChevronRight className="h-4 w-4"/>
                    </span>

                </Button>
            </CardFooter>
        </Card>
    );
};

const Services = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [isLoading, setIsLoading] = useState(true);
    const services = useSelector((state: RootState) => state.service);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            await dispatch(getAllServices());
            setIsLoading(false);
        };
        fetchData();
    }, [dispatch]);

    const filteredServices = services.filter((service) => {
        const matchesSearch =
            service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            service.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory =
            selectedCategory === "All" || service.name === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <>
            <Navigation/>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
                {/* Hero Section */}
                <div className="relative bg-gradient-to-r from-primary/90 to-purple-700 py-20 px-4">
                    <div
                        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1200&q=80')] bg-cover bg-center opacity-10"></div>
                    <div className="container mx-auto relative z-10">
                        <div className="max-w-3xl mx-auto text-center text-white">
                            <h1 className="text-5xl font-bold mb-4 animate-fade-in">
                                Our Premium Services
                            </h1>
                            <p className="text-xl opacity-90 mb-8 animate-fade-in animation-delay-200">
                                Discover our range of exceptional beauty and wellness treatments
                                designed for your ultimate relaxation and rejuvenation
                            </p>
                        </div>
                    </div>
                </div>

                {/* Search and Filter Section */}
                <div className="container mx-auto px-4 -mt-8 relative z-20">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 max-w-4xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-4 items-stretch">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground"/>
                                <Input
                                    placeholder="Search services..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-10 h-12 text-base"
                                />
                            </div>
                            <div className="flex gap-2">
                                <Select
                                    value={selectedCategory}
                                    onValueChange={setSelectedCategory}
                                >
                                    <SelectTrigger className="w-full md:w-[180px] h-12">
                                        <div className="flex items-center gap-2">
                                            <Filter className="h-4 w-4"/>
                                            <SelectValue placeholder="Category"/>
                                        </div>
                                    </SelectTrigger>
                                    <SelectContent>
                                        {categories.map((category) => (
                                            <SelectItem key={category} value={category}>
                                                {category}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <Button className="h-12 px-6 bg-primary hover:bg-primary/90">
                                    Search
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Services Section */}
                <div className="container mx-auto px-4 py-16">
                    {isLoading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <Card key={i} className="animate-pulse">
                                    <div className="h-56 bg-gray-200 dark:bg-gray-700 rounded-t-lg"></div>
                                    <CardHeader>
                                        <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                                        <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mt-2"></div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                                        <div className="h-6 w-1/4 bg-gray-200 dark:bg-gray-700 rounded mt-4"></div>
                                    </CardContent>
                                    <CardFooter>
                                        <div className="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    ) : filteredServices.length === 0 ? (
                        <div className="text-center py-16">
                            <div
                                className="mx-auto w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6">
                                <Search className="h-10 w-10 text-muted-foreground"/>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">No services found</h3>
                            <p className="text-muted-foreground max-w-md mx-auto">
                                We couldn't find any services matching your criteria. Try
                                adjusting your search or browse all services.
                            </p>
                            <Button
                                className="mt-6"
                                variant="outline"
                                onClick={() => {
                                    setSearchQuery("");
                                    setSelectedCategory("All");
                                }}
                            >
                                View All Services
                            </Button>
                        </div>
                    ) : (
                        <>
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-2xl font-bold">
                                    Available Services{" "}
                                    <span className="text-muted-foreground">
                  ({filteredServices.length})
                </span>
                                </h2>
                                <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground hidden md:inline">
                  Sort by:
                </span>
                                    <Select defaultValue="popular">
                                        <SelectTrigger className="w-[160px]">
                                            <SelectValue placeholder="Sort by"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="popular">Most Popular</SelectItem>
                                            <SelectItem value="price-low">
                                                Price: Low to High
                                            </SelectItem>
                                            <SelectItem value="price-high">
                                                Price: High to Low
                                            </SelectItem>
                                            <SelectItem value="duration">Duration</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredServices.map((service, index) => (
                                    <ServiceCard key={service.id} service={service} index={index}/>
                                ))}
                            </div>
                        </>
                    )}
                </div>

                {/* Call to Action */}
                <div
                    className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 py-16 mt-16">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">
                            Ready to Experience Our Services?
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                            Book your appointment today and treat yourself to the premium
                            experience you deserve.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                asChild
                                size="lg"
                                className="bg-primary hover:bg-primary/90"
                            >
                                <Link to="/book">Book an Appointment</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg">
                                <Link to="/contact">Contact Us</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;
