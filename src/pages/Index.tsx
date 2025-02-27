
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, Scissors, Star, Users, Sparkles, Award, ThumbsUp } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Easy Booking",
    description: "Book your appointment in just a few clicks",
    icon: Calendar,
  },
  {
    title: "Expert Stylists",
    description: "Professional and experienced staff",
    icon: Scissors,
  },
  {
    title: "Flexible Hours",
    description: "Open 7 days a week for your convenience",
    icon: Clock,
  },
  {
    title: "Premium Service",
    description: "Quality service and satisfaction guaranteed",
    icon: Star,
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Regular Client",
    content: "The best salon experience I've ever had. The staff is incredibly professional and skilled.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "First-time Client",
    content: "Absolutely loved my haircut! Will definitely be coming back.",
    rating: 5,
  },
  {
    name: "Emma Davis",
    role: "Monthly Member",
    content: "The spa services are amazing. Always leave feeling refreshed and renewed.",
    rating: 5,
  },
];

const achievements = [
  { number: "5000+", label: "Happy Clients", icon: Users },
  { number: "15+", label: "Expert Stylists", icon: Scissors },
  { number: "10", label: "Years Experience", icon: Award },
  { number: "98%", label: "Satisfaction Rate", icon: ThumbsUp },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
            alt="Salon interior"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background to-background/50 z-10" />
        <div className="container relative z-20 mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto space-y-8 fade-in">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Elevate Your Style with Expert Care
            </h1>
            <p className="text-lg text-muted-foreground">
              Experience the perfect blend of luxury and care with our professional salon services.
              Book your appointment today and let us take care of you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/book">Book Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground">
              We provide the best salon experience with our premium services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="p-6 hover-card slide-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.label}
                className="text-center fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <achievement.icon className="h-12 w-12 mx-auto text-primary mb-4" />
                <div className="text-3xl font-bold mb-2">{achievement.number}</div>
                <div className="text-muted-foreground">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground">
              Don't just take our word for it
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.name}
                className="p-6 hover-card slide-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">{testimonial.content}</p>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold">Ready to Transform Your Look?</h2>
            <p className="text-muted-foreground">
              Join our community of satisfied clients and experience the difference of
              professional care. Book your appointment now and let us help you look
              and feel your best.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link to="/book">Book Your Appointment</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
