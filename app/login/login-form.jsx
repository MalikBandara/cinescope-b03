"use client";

import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { signIn } from "@/lib/auth-client";
import { EMAIL_REGEX } from "@/lib/constants";
import { Loader2 } from "lucide-react";

const DEFAULT_ERROR = {
  error: false,
  message: "",
};

//Client component (CSR)
export function LoginForm() {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(DEFAULT_ERROR);

  const validateForm = ({ email, password }) => {
    if (email === "") {
      setError({
        error: true,
        message: "Email is required",
      });
      return false; // Add your validation logic here
    } else if (password === "") {
      setError({
        error: true,
        message: "Password is required",
      });
      return false;
    } else if (!EMAIL_REGEX.test(email)) {
      setError({
        error: true,
        message: "Email is not valid",
      });
      return false; // Add your validation logic here
    }

    setError(DEFAULT_ERROR);

    return true; // Add your validation logic here
  };

  const handelSubmitForm = async (event) => {
    event.preventDefault(); // prevent default form submission
    const formData = new FormData(event.currentTarget); // get form data
    const email = formData.get("email"); // get email from form data

    const password = formData.get("password"); // get password from form data

    if (validateForm({ email, password })) {
      await signIn.email(
        { email, password },
        {
          onSuccess: () => {
            setLoading(false)
            redirect("/admin");
          },
          onError: (ctx) => {
            setError({
              error: true,
              message: ctx.error.message,
            });
           setLoading(false)
          },
        }
      );
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your Credentials to login to your account{" "}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handelSubmitForm}>
            <div className="flex flex-col gap-6">
              <div className=" grid gap-3 ">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type=""
                  placeholder="Enter your Email "
                  autoComplete="email"
                />
              </div>
              <div className=" grid gap-3 ">
                <div className="flex items-center">
                  <Label htmlFor="email">Password</Label>
                  <Link
                    href="/forgot-password"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password
                  </Link>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password "
                  autoComplete="current-password"
                />
              </div>
              {/* error message */}
              <div className="flex justify-center">
                {error.error && (
                  <span className="text-red-600 text-xs text-center animate-pulse duration-700">
                    {error.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-3 ">
                <Button type="submit" className="w-full" disable={isLoading}>
                  {isLoading && <Loader2 className="animate-spin" />} Login
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  disable={isLoading}
                >
                  Login with Google
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
