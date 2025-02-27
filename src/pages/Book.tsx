import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {useEffect, useState} from "react";
import { useSearchParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import {useDispatch, useSelector} from "react-redux";
import Appointment from "@/models/Appointment.ts";
import {saveAppointment} from "@/redux/appointmentSlice.ts";
import {getAllServices, getService} from "@/redux/ServiceSlice.ts";
import {getCustomer} from "@/redux/customerSlice.ts";
import {AppDispatch, RootState} from "@/store/store.tsx";

const Book = () => {
  const [searchParams] = useSearchParams();
  const serviceId = searchParams.get("service");
  const { toast } = useToast();
  const dispatch = useDispatch<AppDispatch>();
  const services = useSelector((state: RootState) => state.service);


  useEffect(() => {
    dispatch(getAllServices());
  }, [dispatch]);

  const selectedService = services.find(
      (service) => service.id.toString() === serviceId
  );

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const [step, setStep] = useState<'details' | 'payment' | 'confirmation'>('details');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking submission:", { serviceId, ...formData });
    toast({
      title: "Booking Submitted",
      description: "We'll contact you shortly to confirm your appointment.",
    });
  };

  const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  };

  const handlePayment =async () => {

    const newCustomer = await dispatch(getCustomer("67bfd054db0da85ad8c8534d")).unwrap();
    const newService = await dispatch(getService(serviceId)).unwrap();

    const newAppointment: Appointment = {
      id: "",
      customer: newCustomer,
      service: newService,
      date: formData.date,
      time: formData.time,
      status: "scheduled",
    };

    setStep('confirmation');
    await dispatch(saveAppointment(newAppointment));
    toast({
      title: "Payment Successful",
      description: "Your booking has been confirmed.",
    });
  };

  if (!selectedService) {
    return (
        <div className="container mx-auto px-4 py-16">
          <Card>
            <CardContent className="py-8">
              <div className="text-center text-muted-foreground">
                Service not found. Please select a service from our services page.
              </div>
              <div className="mt-4 text-center">
                <Button asChild>
                  <Link to="/services">View Services</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
    );
  }

  return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <Card className="fade-in">
            <CardHeader>
              <CardTitle>Book an Appointment</CardTitle>
              <CardDescription>
                Booking {selectedService.name} - {selectedService.price}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {step === 'details' && (
                  <form onSubmit={(e) => { e.preventDefault(); setStep('payment'); }} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="date" className="text-sm font-medium">
                          Date
                        </label>
                        <Input
                            id="date"
                            type="date"
                            value={formData.date}
                            onChange={handleChange}
                            min={getTomorrowDate()}
                            required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="time" className="text-sm font-medium">
                          Time
                        </label>
                        <Input
                            id="time"
                            type="time"
                            value={formData.time}
                            onChange={handleChange}
                            min="09:00"
                            max="18:00"
                            step="1800"
                            required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </label>
                      <Input
                          id="name"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <Input
                          id="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="notes" className="text-sm font-medium">
                        Special Notes (Optional)
                      </label>
                      <Input
                          id="notes"
                          placeholder="Any special requests or notes"
                          value={formData.notes}
                          onChange={handleChange}
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Proceed to Payment
                    </Button>
                  </form>
              )}

              {step === 'payment' && (
                  <div className="space-y-4">
                    <div className="p-4 bg-muted rounded-lg">
                      <h3 className="font-semibold mb-2">Booking Summary</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Service:</span>
                          <span>{selectedService.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Date:</span>
                          <span>{formData.date}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Time:</span>
                          <span>{formData.time}</span>
                        </div>
                        <div className="flex justify-between font-semibold">
                          <span>Total:</span>
                          <span>{selectedService.price}</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <Button onClick={handlePayment} className="w-full">
                        Pay Now
                      </Button>
                      <Button variant="outline" onClick={() => setStep('details')} className="w-full">
                        Back to Details
                      </Button>
                    </div>
                  </div>
              )}

              {step === 'confirmation' && (
                  <div className="text-center space-y-4">
                    <div className="flex justify-center">
                      <Star className="h-16 w-16 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Booking Confirmed!</h3>
                    <p className="text-muted-foreground">
                      Thank you for your booking. We've sent a confirmation email with all the details.
                    </p>
                    <Button asChild className="w-full">
                      <Link to="/services">Book Another Service</Link>
                    </Button>
                  </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
  );
};

export default Book;