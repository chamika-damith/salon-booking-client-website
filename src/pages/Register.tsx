import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {useState} from "react";
import Customer from "@/models/Customer";
import {Link, useNavigate} from "react-router-dom";
import {AppDispatch} from "@/store/store.tsx";
import {useDispatch} from "react-redux";
import {register} from "@/redux/authSlice.ts";
import Navigation from "@/components/Navigation.tsx";
import {saveCustomer} from "@/redux/customerSlice.ts";

const Register = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const [customer, setCustomer] = useState<Customer>({
        id: "",
        name: "",
        email: "",
        phone: "",
        notes: "",
    });

    const [passwords, setPasswords] = useState({
        password: "",
        confirmPassword: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const userData = {
            name: customer.name,
            email: customer.email,
            password: passwords.password,
        };

        const customerData: Customer = {
            id: '',
            name: customer.name,
            email: customer.email,
            phone: '123-456-7890',
            notes: 'Preferred contact via email'
        };


        console.log("Register attempt:", userData);
        console.log("Customer saved:", customerData);

        dispatch(register(userData));
        dispatch(saveCustomer(customerData));
        navigate("/login");

    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCustomer((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswords((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    };

    return (
        <>
            <Navigation/>
            <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-[80vh]">
                <Card className="w-full max-w-md fade-in">
                    <CardHeader>
                        <CardTitle>Create Account</CardTitle>
                        <CardDescription>Enter your details to create your account</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                                <Input id="name" placeholder="Enter your full name" value={customer.name}
                                       onChange={handleChange} required/>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <Input id="email" type="email" placeholder="Enter your email" value={customer.email}
                                       onChange={handleChange} required/>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                                <Input id="phone" type="tel" placeholder="Enter your phone number"
                                       value={customer.phone} onChange={handleChange} required/>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="notes" className="text-sm font-medium">Notes (Optional)</label>
                                <Input id="notes" placeholder="Additional information" value={customer.notes}
                                       onChange={handleChange}/>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="password" className="text-sm font-medium">Password</label>
                                <Input id="password" type="password" placeholder="Enter your password"
                                       value={passwords.password} onChange={handlePasswordChange} required/>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="confirmPassword" className="text-sm font-medium">Confirm
                                    Password</label>
                                <Input id="confirmPassword" type="password" placeholder="Confirm your password"
                                       value={passwords.confirmPassword} onChange={handlePasswordChange} required/>
                            </div>
                            <Button type="submit" className="w-full">Register</Button>
                            <p className="text-center text-sm text-muted-foreground">
                                Already have an account?{" "}
                                <Link to="/login" className="text-primary hover:underline">
                                    Login
                                </Link>
                            </p>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </>
    );
};

export default Register;
