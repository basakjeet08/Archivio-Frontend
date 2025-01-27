import React from "react";
import useLogin from "../hooks/useLogin";
import { Heading2 } from "../elements/Typegraphy";
import { BoxInput, PasswordInput } from "../components/Input";
import { PrimaryButton, OutlinedButton } from "../elements/Buttons";
import { useNavigate } from "react-router-dom";
import { REGISTER_ROUTE } from "../routes/AppRoutes";

const LoginPage = () => {
  const { user, updateUser, loginUser } = useLogin();

  // Navigate Functions
  const naviagte = useNavigate();
  const navigateToRegister = () => naviagte(REGISTER_ROUTE);

  return (
    <div className="flex flex-row h-screen">
      {/* The Rest of the Login Form */}
      <form
        className="flex-1 flex flex-col gap-6 p-12 justify-center"
        onSubmit={loginUser}
      >
        <Heading2>
          <span className="text-primary">Archivio</span> Welcomes You Back!
        </Heading2>

        <BoxInput
          labelTitle="Username"
          name="username"
          type="text"
          placeholder="Enter your username"
          value={user.username}
          onChange={updateUser}
          required
        />

        <PasswordInput
          labelTitle="Password"
          name="password"
          placeholder="Enter your password"
          value={user.password}
          onChange={updateUser}
          required
        />

        <PrimaryButton className="w-full" type="submit">
          Login
        </PrimaryButton>

        <OutlinedButton className="w-full" onClick={navigateToRegister}>
          Go to Register Page
        </OutlinedButton>
      </form>

      {/* Image with Gradient */}
      <div className="hidden flex-2 relative md:block">
        <img
          className="object-cover h-screen w-full"
          src="https://images.unsplash.com/photo-1599517490179-a77038ad35ef?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Login Page Onboarding Image"
        />

        {/* Gradient over the Image. */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      </div>
    </div>
  );
};

export default LoginPage;
