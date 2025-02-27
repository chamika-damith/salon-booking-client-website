
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-muted-foreground">
            Discover the story behind our passion for beauty and wellness
          </p>
        </div>

        <div className="space-y-8">
          <Card className="p-8 slide-in">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed">
              Founded in 2020, PamperPortal was born from a vision to revolutionize the salon
              booking experience. We believe that self-care should be accessible,
              convenient, and luxurious. Our platform connects you with top-rated
              stylists and beauty professionals who share our commitment to excellence.
            </p>
          </Card>

          <Card className="p-8 slide-in" style={{ animationDelay: "100ms" }}>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              We strive to provide an exceptional salon experience by combining
              skilled professionals, premium products, and innovative booking
              technology. Our mission is to make self-care convenient and
              accessible while maintaining the highest standards of service quality.
            </p>
          </Card>

          <Card className="p-8 slide-in" style={{ animationDelay: "200ms" }}>
            <h2 className="text-2xl font-bold mb-4">Why Choose Us</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Experienced and professional stylists</li>
              <li>Premium quality products and services</li>
              <li>Convenient online booking system</li>
              <li>Clean and relaxing environment</li>
              <li>Competitive pricing</li>
              <li>Customer satisfaction guarantee</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
