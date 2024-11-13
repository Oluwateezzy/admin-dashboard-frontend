import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { loginUser } from "@/service/auth/authService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();
  
  if (!email || !password) {
    toast({
      title: "Login failed",
      description: "Please enter both email and password.",
      variant: "destructive",
    });
    return;
  }

  try {
    const loginData = { email, password };
    const response = await loginUser(loginData);

    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data.userInfo));

    toast({
      title: "Login successful",
      description: `Welcome back, ${response.data.userInfo.username}!`,
    });
    navigate("/users");
  } catch (error) {
    toast({
      title: "Login failed",
      description: error.message,
      variant: "destructive",
    });
  }
};


  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 animate-fade-in">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight">Welcome back</h1>
          <p className="text-muted-foreground mt-2">Sign in to your account</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;