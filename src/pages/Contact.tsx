import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {useState} from "react";
import {Badge} from "@/components/ui/badge";
import {
    ArrowRight,
    Clock,
    FacebookIcon,
    InstagramIcon,
    LinkedinIcon,
    Mail,
    MapPin,
    Phone,
    TwitterIcon, YoutubeIcon
} from "lucide-react";
import Navigation from "@/components/Navigation.tsx";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            console.log("Contact form submission:", formData);
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });

            // Reset success message after 5 seconds
            setTimeout(() => setIsSubmitted(false), 5000);
        }, 1500);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    };

    return (
        <>
            <Navigation/>
            <div className="bg-gradient-to-b from-background to-muted/20 min-h-screen">
                <div className="container mx-auto px-4 py-16">
                    <div className="max-w-5xl mx-auto">
                        {/* Hero Section */}
                        <div className="text-center mb-16 fade-in">
                            <Badge
                                variant="outline"
                                className="mb-4 px-3 py-1 text-sm font-medium"
                            >
                                Get In Touch
                            </Badge>
                            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                                Contact Us
                            </h1>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                We'd love to hear from you. Reach out with any questions or
                                concerns.
                            </p>
                        </div>

                        {/* Contact Information & Form */}
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
                            {/* Contact Information */}
                            <div className="lg:col-span-2 space-y-6 slide-in">
                                <Card
                                    className="p-6 border-none shadow-lg bg-gradient-to-br from-background to-muted hover:shadow-xl transition-all duration-300">
                                    <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

                                    <div className="space-y-6">
                                        <div className="flex items-start">
                                            <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1">
                                                <MapPin className="h-5 w-5 text-primary"/>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg">Our Location</h3>
                                                <p className="text-muted-foreground">
                                                    panadura
                                                    <br/>
                                                    colombo
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1">
                                                <Phone className="h-5 w-5 text-primary"/>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg">Phone</h3>
                                                <p className="text-muted-foreground">(555) 123-4567</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1">
                                                <Mail className="h-5 w-5 text-primary"/>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg">Email</h3>
                                                <p className="text-muted-foreground">
                                                    info@saloney.com
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1">
                                                <Clock className="h-5 w-5 text-primary"/>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg">Business Hours</h3>
                                                <p className="text-muted-foreground">
                                                    Monday - Friday: 9:00 AM - 8:00 PM
                                                    <br/>
                                                    Saturday: 9:00 AM - 6:00 PM
                                                    <br/>
                                                    Sunday: 10:00 AM - 5:00 PM
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Card>


                            </div>

                            {/* Contact Form */}
                            <div
                                className="lg:col-span-3 slide-in"
                                style={{animationDelay: "100ms"}}
                            >
                                <Card
                                    className="p-8 border-none shadow-lg bg-gradient-to-br from-background to-muted hover:shadow-xl transition-all duration-300 h-full">
                                    <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

                                    {isSubmitted ? (
                                        <div
                                            className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-6 text-center">
                                            <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                                            <p>
                                                Your message has been sent successfully. We'll get back to
                                                you soon.
                                            </p>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-5">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                                <div className="space-y-2">
                                                    <label htmlFor="name" className="text-sm font-medium">
                                                        Full Name
                                                    </label>
                                                    <Input
                                                        id="name"
                                                        placeholder="Your name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        required
                                                        className="border-muted-foreground/20 focus:border-primary"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label htmlFor="email" className="text-sm font-medium">
                                                        Email Address
                                                    </label>
                                                    <Input
                                                        id="email"
                                                        type="email"
                                                        placeholder="Your email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        required
                                                        className="border-muted-foreground/20 focus:border-primary"
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="subject" className="text-sm font-medium">
                                                    Subject
                                                </label>
                                                <Input
                                                    id="subject"
                                                    placeholder="Message subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    required
                                                    className="border-muted-foreground/20 focus:border-primary"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="message" className="text-sm font-medium">
                                                    Message
                                                </label>
                                                <Textarea
                                                    id="message"
                                                    placeholder="Your message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                    rows={5}
                                                    className="border-muted-foreground/20 focus:border-primary resize-none"
                                                />
                                            </div>
                                            <Button
                                                type="submit"
                                                className="w-full flex items-center justify-center gap-2 rounded-full py-6"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? "Sending..." : "Send Message"}
                                                {!isSubmitting && <ArrowRight className="h-4 w-4"/>}
                                            </Button>
                                        </form>
                                    )}
                                </Card>
                            </div>
                        </div>

                        {/* FAQ Section */}
                        <div className="mb-16 slide-in" style={{animationDelay: "200ms"}}>
                            <Card
                                className="p-8 border-none shadow-lg bg-gradient-to-br from-background to-muted hover:shadow-xl transition-all duration-300">
                                <h2 className="text-2xl font-bold mb-6 text-center">
                                    Frequently Asked Questions
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        {
                                            question: "How do I book an appointment?",
                                            answer:
                                                "You can book an appointment through our online booking system on the Book page. Select your desired service, choose a date and time, and complete the booking process.",
                                        },
                                        {
                                            question: "What is your cancellation policy?",
                                            answer:
                                                "We require at least 24 hours notice for cancellations. Late cancellations may be subject to a fee of 50% of the service price.",
                                        },
                                        {
                                            question: "Do you offer gift cards?",
                                            answer:
                                                "Yes, we offer digital gift cards that can be purchased online and sent directly to the recipient via email.",
                                        },
                                        {
                                            question: "How early should I arrive for my appointment?",
                                            answer:
                                                "We recommend arriving 10-15 minutes before your scheduled appointment time to complete any necessary paperwork and relax before your service.",
                                        },
                                    ].map((faq, index) => (
                                        <div
                                            key={index}
                                            className="p-5 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                                        >
                                            <h3 className="font-semibold text-lg mb-2">
                                                {faq.question}
                                            </h3>
                                            <p className="text-muted-foreground">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </div>

                        {/* Social Media */}
                        <div
                            className="text-center slide-in"
                            style={{animationDelay: "300ms"}}
                        >
                            <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
                            <div className="flex justify-center space-x-6">
                                {[
                                    {name: "Facebook", icon: <FacebookIcon />},
                                    {name: "Instagram", icon: <InstagramIcon />},
                                    {name: "Twitter", icon: <TwitterIcon />},
                                    {name: "LinkedIn", icon: <LinkedinIcon />},
                                    {name: "YouTube", icon: <YoutubeIcon />},
                                ].map((social, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                                        aria-label={social.name}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
