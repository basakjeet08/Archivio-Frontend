import React from "react";
import { Heading2 } from "../elements/Typegraphy";
import { BoxInput, CheckboxInput, PasswordInput } from "../components/Input";
import { PrimaryButton } from "../elements/Buttons";
import useRegister from "../hooks/useRegister";
import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../routes/AppRoutes";

const RegisterPage = () => {
  const { user, updateUser, registerUser } = useRegister();

  // Navigate Functions
  const naviagte = useNavigate();
  const navigateToLoginPage = () => naviagte(LOGIN_ROUTE);

  return (
    <div className="flex flex-row h-screen">
      {/* Image with Gradient */}
      <div className="hidden flex-3 relative md:block">
        <img
          className="object-cover h-screen w-full"
          src="https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Register Page Onboarding Image"
        />

        {/* Gradient over the Image. */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      {/* The Rest of the Registration Form */}
      <form
        className="flex-2 flex flex-col gap-6 p-12 justify-center"
        onSubmit={registerUser}
      >
        <Heading2>
          <span className="text-primary">Archivio</span> Welcomes You !
        </Heading2>
        <fieldset className="flex flex-row gap-4 items-center">
          <BoxInput
            className="flex-1"
            labelTitle="First Name"
            name="firstname"
            type="text"
            placeholder="Enter first name"
            value={user.firstname}
            onChange={updateUser}
            required
          />

          <BoxInput
            className="flex-1"
            labelTitle="Last Name"
            name="lastname"
            type="text"
            placeholder="Enter your last name"
            value={user.lastname}
            onChange={updateUser}
          />
        </fieldset>

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

        <PasswordInput
          labelTitle="Confirm Password"
          name="confirmPassword"
          placeholder="Re - Enter your password"
          value={user.confirmPassword}
          onChange={updateUser}
          required
        />

        <CheckboxInput
          labelTitle="I agree to the Terms and conditions."
          name="agreeStatus"
          checked={user.agreeStatus}
          onChange={updateUser}
          required
        />

        <PrimaryButton className="w-full" type="submit">
          Register
        </PrimaryButton>

        <PrimaryButton className="w-full" onClick={navigateToLoginPage}>
          Go to Login Page
        </PrimaryButton>
      </form>
    </div>
  );
};

export default RegisterPage;
