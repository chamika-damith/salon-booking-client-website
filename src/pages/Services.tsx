
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock, Star, Search } from "lucide-react";
import {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store/store.tsx";
import {getAllServices} from "@/redux/ServiceSlice.ts";

// export const services = [
//   {
//     id: 1,
//     title: "Haircut & Styling",
//     description: "Professional haircut and styling by expert stylists",
//     price: "$50",
//     duration: "45 min",
//     rating: 4.9,
//     category: "Hair",
//     image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
//   },
//   {
//     id: 2,
//     title: "Hair Coloring",
//     description: "Full hair coloring service with premium products",
//     price: "$120",
//     duration: "120 min",
//     rating: 4.8,
//     category: "Hair",
//     image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
//   },
//   {
//     id: 3,
//     title: "Facial Treatment",
//     description: "Rejuvenating facial treatment for glowing skin",
//     price: "$80",
//     duration: "60 min",
//     rating: 4.9,
//     category: "Skin",
//     image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
//   },
//   {
//     id: 4,
//     title: "Manicure & Pedicure",
//     description: "Complete nail care package for hands and feet",
//     price: "$65",
//     duration: "75 min",
//     rating: 4.7,
//     category: "Nails",
//     image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
//   },
//   {
//     id: 5,
//     title: "Deep Tissue Massage",
//     description: "Therapeutic massage targeting deep muscle tension",
//     price: "$90",
//     duration: "60 min",
//     rating: 4.8,
//     category: "Massage",
//     image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
//   },
//   {
//     id: 6,
//     title: "Express Facial",
//     description: "Quick refreshing facial for busy individuals",
//     price: "$45",
//     duration: "30 min",
//     rating: 4.6,
//     category: "Skin",
//     image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
//   }
// ];

const categories = ["All", "Hair", "Skin", "Nails", "Massage"];

const Services = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const services=useSelector((state:RootState)=>state.service);
  const dispatch=useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllServices());
  }, []);

  const filteredServices = services.filter((service) => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || service.name === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-muted-foreground mb-8">
          Choose from our range of premium beauty and wellness services
        </p>

        {/* Search and Filter Section */}
        <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {filteredServices.length === 0 ? (
        <div className="text-center text-muted-foreground py-8">
          No services found matching your criteria
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <Card key={service.id} className="hover-card slide-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img
                  src={"https://images.unsplash.com/photo-1518770660439-4636190af475"}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{service.name}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span>4.9</span>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {service.name}
                  </span>
                </div>
                <div className="mt-4 text-2xl font-bold text-primary">
                  {service.price}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link to={`/book?service=${service.id}`}>Book Now</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Services;
