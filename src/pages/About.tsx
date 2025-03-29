import {Card} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import {Badge} from "@/components/ui/badge";
import {ArrowRight, Award, Heart, Users} from "lucide-react";
import Navigation from "@/components/Navigation.tsx";

const About = () => {
    return (
        <>
            <Navigation />
            <div className="bg-gradient-to-b from-background to-muted/20 min-h-screen">
                <div className="container mx-auto px-4 py-16">
                    <div className="max-w-5xl mx-auto">
                        {/* Hero Section */}
                        <div className="text-center mb-16 fade-in">
                            <Badge
                                variant="outline"
                                className="mb-4 px-3 py-1 text-sm font-medium"
                            >
                                Our Story
                            </Badge>
                            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                                About Saloney
                            </h1>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                Discover the story behind our passion for beauty and wellness
                            </p>
                        </div>

                        {/* Mission & Vision */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            <Card
                                className="p-8 border-none shadow-lg bg-gradient-to-br from-background to-muted hover:shadow-xl transition-all duration-300 slide-in">
                                <div className="flex items-center mb-4">
                                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                                        <Heart className="h-6 w-6 text-primary"/>
                                    </div>
                                    <h2 className="text-2xl font-bold">Our Mission</h2>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    We strive to provide an exceptional salon experience by
                                    combining skilled professionals, premium products, and
                                    innovative booking technology. Our mission is to make self-care
                                    convenient and accessible while maintaining the highest
                                    standards of service quality.
                                </p>
                            </Card>

                            <Card
                                className="p-8 border-none shadow-lg bg-gradient-to-br from-background to-muted hover:shadow-xl transition-all duration-300 slide-in"
                                style={{animationDelay: "100ms"}}
                            >
                                <div className="flex items-center mb-4">
                                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                                        <Award className="h-6 w-6 text-primary"/>
                                    </div>
                                    <h2 className="text-2xl font-bold">Our Vision</h2>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    To revolutionize the beauty industry by creating a seamless
                                    connection between clients and professionals. We envision a
                                    world where everyone has access to premium beauty services that
                                    enhance their confidence and well-being.
                                </p>
                            </Card>
                        </div>

                        {/* Our Story */}
                        <div className="mb-16">
                            <Card
                                className="p-10 border-none shadow-lg bg-gradient-to-br from-background to-muted hover:shadow-xl transition-all duration-300 slide-in">
                                <h2 className="text-3xl font-bold mb-6 flex items-center">
                <span className="bg-primary/10 p-2 rounded-full mr-4">
                  <Users className="h-6 w-6 text-primary"/>
                </span>
                                    Our Journey
                                </h2>
                                <div className="space-y-6 text-muted-foreground leading-relaxed">
                                    <p>
                                        Founded in 2020, Saloney was born from a vision to
                                        revolutionize the salon booking experience. We believe that
                                        self-care should be accessible, convenient, and luxurious. Our
                                        platform connects you with top-rated stylists and beauty
                                        professionals who share our commitment to excellence.
                                    </p>
                                    <p>
                                        What started as a small team of beauty enthusiasts has grown
                                        into a thriving community of professionals and clients united
                                        by a passion for exceptional service. Through continuous
                                        innovation and feedback from our valued customers, we've
                                        refined our platform to offer the most seamless booking
                                        experience in the industry.
                                    </p>
                                    <p>
                                        Today, Saloney serves thousands of clients across the
                                        country, but our mission remains the same: to make beauty and
                                        wellness services accessible to everyone while supporting the
                                        talented professionals who make it all possible.
                                    </p>
                                </div>
                            </Card>
                        </div>

                        {/* Why Choose Us */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold mb-8 text-center">
                                Why Choose Us
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    {
                                        title: "Experienced Professionals",
                                        description:
                                            "Our network includes only the most skilled and experienced beauty professionals.",
                                    },
                                    {
                                        title: "Premium Quality",
                                        description:
                                            "We ensure all services use high-quality products for the best results.",
                                    },
                                    {
                                        title: "Convenient Booking",
                                        description:
                                            "Our intuitive platform makes scheduling appointments quick and easy.",
                                    },
                                    {
                                        title: "Relaxing Environment",
                                        description:
                                            "Every salon in our network provides a clean and calming atmosphere.",
                                    },
                                    {
                                        title: "Competitive Pricing",
                                        description:
                                            "Quality services at fair prices with transparent pricing policies.",
                                    },
                                    {
                                        title: "Satisfaction Guarantee",
                                        description:
                                            "Your happiness is our priority - we stand behind every service.",
                                    },
                                ].map((item, index) => (
                                    <Card
                                        key={index}
                                        className="p-6 border-none shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-background to-muted slide-in"
                                        style={{animationDelay: `${index * 50}ms`}}
                                    >
                                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                        <Separator className="mb-3"/>
                                        <p className="text-muted-foreground">{item.description}</p>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="text-center slide-in">
                            <Card
                                className="p-10 border-none shadow-xl bg-gradient-to-r from-primary/10 to-primary/5 hover:shadow-2xl transition-all duration-300">
                                <h2 className="text-3xl font-bold mb-4">
                                    Ready to Experience the Difference?
                                </h2>
                                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                                    Join thousands of satisfied customers who have transformed their
                                    self-care routine with PamperPortal.
                                </p>
                                <a
                                    href="/book"
                                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-full font-medium transition-colors"
                                >
                                    Book Your Appointment
                                    <ArrowRight className="h-4 w-4"/>
                                </a>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
