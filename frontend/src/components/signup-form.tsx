import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";
import { Loader2 } from "lucide-react";

export function SignupForm({ className, ...props }: React.ComponentProps<"div">) {
  const nav = useNavigate();
  const [isSignup, setIsSignup] = useState(true);
  const [loading,setloading]=useState(false);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [signupForm, setSignupForm] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/signin`,
        {
          email: loginForm.email,
          password: loginForm.password,
        }
      );
      if (response.data.success) {
        localStorage.setItem('token',response.data.token);
        toast.success("Login successful");
        nav("/"); // redirect after login
      } else {
        toast.error(`${response.data.message}`);
      }
    } catch (err: any) {
      toast.error("Login failed");
    }
    finally{
      setloading(false);
    }
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/signup`,
        signupForm
      );
      if (response.data.success) {
        toast.success("Signup successful, please log in!");
        setIsSignup(false);
      } else {
        toast.error(`${response.data.message}`);
      }
    } catch (err: any) {
      toast.error("Signup failed");
    }
    finally{
      setloading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>
            {isSignup ? "Sign Up for your Medium account" : "Login to your account"}
          </CardTitle>
          <CardDescription>
            {isSignup
              ? "Enter your information to create your account"
              : "Enter your email below to login to your account"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isSignup ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSignup();
              }}
            >
              <div className="flex flex-col gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="m@example.com"
                    value={signupForm.email}
                    onChange={(e) =>
                      setSignupForm({ ...signupForm, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="signup-name">Name</Label>
                  <Input
                    id="signup-name"
                    type="text"
                    placeholder="John Doe"
                    value={signupForm.name}
                    onChange={(e) =>
                      setSignupForm({ ...signupForm, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input
                    id="signup-password"
                    type="password"
                    value={signupForm.password}
                    onChange={(e) =>
                      setSignupForm({ ...signupForm, password: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <Button type="submit" variant={(loading?'secondary':'default')} className="w-full">
                    {loading&&<Loader2 className="animate-spin"/>} Sign Up
                  </Button>
                  <Button variant="outline" className="w-full">
                    Sign Up with Google
                  </Button>
                </div>
                <button
                  type="button"
                  onClick={() => setIsSignup(false)}
                  className="mt-4 text-center text-sm"
                >
                  Already have an account?{" "}
                  <span className="underline underline-offset-4">Login</span>
                </button>
              </div>
            </form>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setloading(true);
                handleLogin();
              }}
            >
              <div className="flex flex-col gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="login-email">Email</Label>
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="m@example.com"
                    value={loginForm.email}
                    onChange={(e) =>
                      setLoginForm({ ...loginForm, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="login-password">Password</Label>
                    <Link
                      to="/auth/passwordactions"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                  <Input
                    id="login-password"
                    type="password"
                    value={loginForm.password}
                    onChange={(e) =>
                      setLoginForm({ ...loginForm, password: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <Button type="submit" variant={(loading?'secondary':'default')} className="w-full">
                  {loading&&<Loader2 className="animate-spin"/>}  Login
                  </Button>
                  <Button variant="outline" className="w-full">
                    Login with Google
                  </Button>
                </div>
                <button
                  type="button"
                  onClick={() => setIsSignup(true)}
                  className="mt-4 text-center text-sm"
                >
                  Don&apos;t have an account?{" "}
                  <span className="underline underline-offset-4">Sign up</span>
                </button>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
