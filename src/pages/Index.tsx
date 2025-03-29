import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {
    Calendar,
    Clock,
    Scissors,
    Star,
    Users,
    Award,
    ThumbsUp,
    Sparkles,
    Heart,
    Zap,
    Gem,
    Smile,
    MapPin,
    Phone,
    Mail,
    Instagram,
    Facebook,
    Twitter
} from "lucide-react";
import {Link} from "react-router-dom";
import Navigation from "@/components/Navigation.tsx";

const features = [
    {
        title: "Easy Booking",
        description:
            "Book your appointment in just a few clicks with our intuitive online system",
        icon: Calendar,
    },
    {
        title: "Expert Stylists",
        description:
            "Our team of certified professionals stays updated with the latest trends",
        icon: Scissors,
    },
    {
        title: "Flexible Hours",
        description:
            "Open 7 days a week with early and late appointments available",
        icon: Clock,
    },
    {
        title: "Premium Service",
        description:
            "Luxury experience with personalized attention to every detail",
        icon: Star,
    },
    {
        title: "Eco-Friendly Products",
        description:
            "We use sustainable, cruelty-free products that are gentle on your hair and the environment",
        icon: Heart,
    },
    {
        title: "Complimentary Consultation",
        description:
            "Free style consultation before every service to ensure your complete satisfaction",
        icon: Sparkles,
    },
];

const services = [
    {
        title: "Haircut & Styling",
        description:
            "Precision cuts and styling for all hair types and preferences",
        price: "From $45",
        image:
            "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
    },
    {
        title: "Color & Highlights",
        description:
            "Vibrant, long-lasting color treatments customized for your unique style",
        price: "From $85",
        image:
            "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80",
    },
    {
        title: "Treatments & Masks",
        description:
            "Rejuvenating treatments to restore and enhance your hair's natural beauty",
        price: "From $35",
        image:
            "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
    },
    {
        title: "Bridal Packages",
        description:
            "Complete styling solutions for your special day, including trials and on-site services",
        price: "From $150",
        image:
            "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80",
    },
];

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Regular Client",
        content:
            "The best salon experience I've ever had. The staff is incredibly professional and skilled. My hair has never looked better!",
        rating: 5,
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    },
    {
        name: "Michael Chen",
        role: "First-time Client",
        content:
            "Absolutely loved my haircut! The stylist took the time to understand exactly what I wanted and delivered perfectly. Will definitely be coming back.",
        rating: 5,
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    },
    {
        name: "Emma Davis",
        role: "Monthly Member",
        content:
            "The spa services are amazing. Always leave feeling refreshed and renewed. Their monthly membership program is such a great value!",
        rating: 5,
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
    },
    {
        name: "James Wilson",
        role: "VIP Client",
        content:
            "I've been to many high-end salons, but this one truly stands out. The attention to detail and personalized service is unmatched.",
        rating: 5,
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
    },
];

const achievements = [
    {number: "5000+", label: "Happy Clients", icon: Users},
    {number: "15+", label: "Expert Stylists", icon: Scissors},
    {number: "10", label: "Years Experience", icon: Award},
    {number: "98%", label: "Satisfaction Rate", icon: ThumbsUp},
];

const values = [
    {
        title: "Excellence",
        description: "We strive for perfection in every service we provide",
        icon: Gem,
    },
    {
        title: "Innovation",
        description: "Constantly evolving with the latest techniques and trends",
        icon: Zap,
    },
    {
        title: "Sustainability",
        description: "Committed to eco-friendly practices and products",
        icon: Heart,
    },
    {
        title: "Community",
        description:
            "Building relationships and giving back to our local community",
        icon: Smile,
    },
];

const locations = [
    {
        name: "Downtown",
        address: "123 Main Street, City Center",
        hours: "Mon-Fri: 9am-8pm, Sat-Sun: 10am-6pm",
        phone: "(555) 123-4567",
        image:
            "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=800&q=80",
    },
    {
        name: "Westside",
        address: "456 Ocean Avenue, Westside District",
        hours: "Mon-Fri: 10am-7pm, Sat-Sun: 10am-5pm",
        phone: "(555) 987-6543",
        image:
            "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=800&q=80",
    },
];

const Index = () => {
    return (
        <>
            <Navigation />
            <div className="min-h-screen">
                {/* Hero Section - Modern Split Design */}
                <section className="min-h-[90vh] flex flex-col lg:flex-row">
                    <div className="w-full lg:w-1/2 bg-primary/5 flex items-center justify-center p-8 lg:p-16">
                        <div className="max-w-xl space-y-8 fade-in">
                            <div
                                className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-2">
                                Premium Salon Experience
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                                Elevate Your Style With Expert Care
                            </h1>
                            <p className="text-lg text-muted-foreground">
                                Experience the perfect blend of luxury and care with our
                                professional salon services. Book your appointment today and let
                                us transform your look.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Button asChild size="lg" className="rounded-full">
                                    <Link to="/book">Book Now</Link>
                                </Button>
                                <Button
                                    asChild
                                    variant="outline"
                                    size="lg"
                                    className="rounded-full"
                                >
                                    <Link to="/services">Explore Services</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 relative overflow-hidden min-h-[50vh] lg:min-h-full">
                        <img
                            src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1200&q=80"
                            alt="Salon styling"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                </section>

                {/* Featured Services Section */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 max-w-3xl mx-auto">
                            <div
                                className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                                Our Services
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Premium Services For You
                            </h2>
                            <p className="text-muted-foreground">
                                Discover our range of professional services designed to enhance
                                your natural beauty
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {services.map((service, index) => (
                                <Card
                                    key={service.title}
                                    className="overflow-hidden hover-card slide-in border-0 shadow-lg"
                                    style={{animationDelay: `${index * 100}ms`}}
                                >
                                    <div className="aspect-[4/3] relative">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <CardContent className="p-6">
                                        <h3 className="text-xl font-semibold mb-2">
                                            {service.title}
                                        </h3>
                                        <p className="text-muted-foreground mb-4">
                                            {service.description}
                                        </p>
                                        <div className="flex justify-between items-center">
                    <span className="font-medium text-primary">
                      {service.price}
                    </span>
                                            <Button variant="outline" size="sm" asChild>
                                                <Link to="/services">Details</Link>
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                        <div className="text-center mt-12">
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="rounded-full"
                            >
                                <Link to="/services">View All Services</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Features Section - With Image */}
                <section className="py-24 bg-muted">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">
                            <div className="w-full lg:w-1/2 order-2 lg:order-1">
                                <div
                                    className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                                    Why Choose Us
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                                    Experience the Difference
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {features.slice(0, 4).map((feature, index) => (
                                        <div
                                            key={feature.title}
                                            className="slide-in"
                                            style={{animationDelay: `${index * 100}ms`}}
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="bg-primary/10 p-3 rounded-full">
                                                    <feature.icon className="h-6 w-6 text-primary"/>
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-semibold mb-2">
                                                        {feature.title}
                                                    </h3>
                                                    <p className="text-muted-foreground text-sm">
                                                        {feature.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 order-1 lg:order-2 relative">
                                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80"
                                        alt="Salon experience"
                                        className="w-full h-full object-cover rounded-2xl"
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                </div>
                                <div
                                    className="absolute -bottom-6 -left-6 bg-background p-6 rounded-xl shadow-lg max-w-xs fade-in">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="bg-primary/10 p-2 rounded-full">
                                            <Clock className="h-5 w-5 text-primary"/>
                                        </div>
                                        <div className="font-medium">Extended Hours</div>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        Open early and late to accommodate your busy schedule
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Additional Features */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <div
                                className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                                More Benefits
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Everything You Need
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                We go beyond the basics to provide you with an exceptional
                                experience
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {features.slice(4, 6).map((feature, index) => (
                                <Card
                                    key={feature.title}
                                    className="p-6 hover-card slide-in border-0 shadow-md"
                                    style={{animationDelay: `${index * 100}ms`}}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-3 rounded-full">
                                            <feature.icon className="h-6 w-6 text-primary"/>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold mb-2">
                                                {feature.title}
                                            </h3>
                                            <p className="text-muted-foreground">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-24 bg-primary/5">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <div
                                className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                                Our Values
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                What We Stand For
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Our core values guide everything we do
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {values.map((value, index) => (
                                <Card
                                    key={value.title}
                                    className="text-center p-6 hover-card slide-in border-0 shadow-md"
                                    style={{animationDelay: `${index * 100}ms`}}
                                >
                                    <div
                                        className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                        <value.icon className="h-8 w-8 text-primary"/>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                                    <p className="text-muted-foreground">{value.description}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Achievements Section - With Background */}
                <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <img
                            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1200&q=80"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Our Achievements
                            </h2>
                            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
                                Numbers that speak for themselves
                            </p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {achievements.map((achievement, index) => (
                                <div
                                    key={achievement.label}
                                    className="text-center fade-in"
                                    style={{animationDelay: `${index * 100}ms`}}
                                >
                                    <achievement.icon className="h-12 w-12 mx-auto mb-4"/>
                                    <div className="text-4xl font-bold mb-2">
                                        {achievement.number}
                                    </div>
                                    <div className="text-primary-foreground/80">
                                        {achievement.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials Section - Modern Cards */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <div
                                className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                                Testimonials
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                What Our Clients Say
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Don't just take our word for it
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <Card
                                    key={testimonial.name}
                                    className="p-6 hover-card slide-in border-0 shadow-md"
                                    style={{animationDelay: `${index * 100}ms`}}
                                >
                                    <div className="flex items-center gap-1 mb-4">
                                        {Array.from({length: testimonial.rating}).map((_, i) => (
                                            <Star
                                                key={i}
                                                className="h-4 w-4 fill-yellow-400 text-yellow-400"
                                            />
                                        ))}
                                    </div>
                                    <p className="text-muted-foreground mb-6 text-sm italic">
                                        "{testimonial.content}"
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-10 h-10 rounded-full"
                                        />
                                        <div>
                                            <div className="font-semibold">{testimonial.name}</div>
                                            <div className="text-xs text-muted-foreground">
                                                {testimonial.role}
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Locations Section */}
                <section className="py-24 bg-muted">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <div
                                className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                                Our Locations
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Visit Us Today
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Conveniently located to serve you better
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {locations.map((location, index) => (
                                <Card
                                    key={location.name}
                                    className="overflow-hidden hover-card slide-in border-0 shadow-lg"
                                    style={{animationDelay: `${index * 100}ms`}}
                                >
                                    <div className="aspect-[16/9] relative">
                                        <img
                                            src={location.image}
                                            alt={location.name}
                                            className="w-full h-full object-cover"
                                        />
                                        <div
                                            className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                                            <div className="p-6 text-white">
                                                <h3 className="text-2xl font-bold mb-2">
                                                    {location.name} Location
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <CardContent className="p-6">
                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3">
                                                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5"/>
                                                <span>{location.address}</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5"/>
                                                <span>{location.hours}</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5"/>
                                                <span>{location.phone}</span>
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <Button asChild size="sm" className="w-full">
                                                <Link to="/book">Book at this Location</Link>
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Instagram Feed Section */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <div
                                className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                                @yoursalonhandle
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Follow Us on Instagram
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Stay updated with our latest styles and promotions
                            </p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            {Array.from({length: 6}).map((_, index) => (
                                <a
                                    href="#"
                                    key={index}
                                    className="block aspect-square overflow-hidden rounded-md hover:opacity-90 transition-opacity"
                                >
                                    <img
                                        src={`https://images.unsplash.com/photo-${1560066984 + index * 1000}-138dadb4c035?w=400&q=80`}
                                        alt="Instagram post"
                                        className="w-full h-full object-cover"
                                    />
                                </a>
                            ))}
                        </div>
                        <div className="flex justify-center mt-8 gap-4">
                            <Button variant="outline" size="sm" className="rounded-full gap-2">
                                <Instagram className="h-4 w-4"/>
                                Follow Us
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Newsletter Section */}
                <section className="py-24 bg-primary/5">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center">
                            <div
                                className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                                Stay Updated
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Subscribe to Our Newsletter
                            </h2>
                            <p className="text-muted-foreground mb-8">
                                Get exclusive offers, styling tips, and updates delivered straight
                                to your inbox
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                />
                                <Button className="shrink-0">Subscribe</Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section - Modern Split */}
                <section className="py-24 bg-primary text-primary-foreground">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
                            <div className="md:w-2/3">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                    Ready to Transform Your Look?
                                </h2>
                                <p className="text-primary-foreground/80">
                                    Join our community of satisfied clients and experience the
                                    difference of professional care. Book your appointment now and
                                    let us help you look and feel your best.
                                </p>
                            </div>
                            <div className="md:w-1/3 flex justify-center md:justify-end">
                                <Button
                                    asChild
                                    size="lg"
                                    variant="secondary"
                                    className="rounded-full w-full md:w-auto"
                                >
                                    <Link to="/book">Book Your Appointment</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-12 bg-muted/50">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                            <div>
                                <h3 className="text-lg font-semibold mb-4">About Us</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    We are dedicated to providing exceptional salon services with a
                                    focus on quality, creativity, and customer satisfaction.
                                </p>
                                <div className="flex gap-4">
                                    <a
                                        href="#"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        <Instagram className="h-5 w-5"/>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        <Facebook className="h-5 w-5"/>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        <Twitter className="h-5 w-5"/>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                                <ul className="space-y-2 text-sm">
                                    <li>
                                        <Link
                                            to="/"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/services"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            Services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/about"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/contact"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Services</h3>
                                <ul className="space-y-2 text-sm">
                                    <li>
                                        <Link
                                            to="/services"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            Haircut & Styling
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/services"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            Color & Highlights
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/services"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            Treatments & Masks
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/services"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            Bridal Packages
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                                <ul className="space-y-3 text-sm">
                                    <li className="flex items-start gap-3">
                                        <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5"/>
                                        <span className="text-muted-foreground">
                    123 Main Street, City Center
                  </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5"/>
                                        <span className="text-muted-foreground">(555) 123-4567</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5"/>
                                        <span className="text-muted-foreground">
                    info@saloney.com
                  </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
                            <p>
                                © {new Date().getFullYear()} Saloney.com All rights
                                reserved.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Index;
