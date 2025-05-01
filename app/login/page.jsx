//Server Component
//This use SSR Server side rendering

import { LoginForm } from "./login-form";

export default function LoginPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10  ">
      <div className="w-full max-w-sm ">
        <LoginForm></LoginForm>
      </div>
    </div>
  );
}
