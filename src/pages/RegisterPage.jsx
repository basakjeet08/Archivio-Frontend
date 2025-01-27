import React from "react";
import { Heading2 } from "../elements/Typegraphy";
import { Input } from "../elements/Input";
import { PrimaryButton } from "../elements/Buttons";
import useRegister from "../hooks/useRegister";

const RegisterPage = () => {
  const { user, updateUser, registerUser } = useRegister();

  return (
    <div className="h-screen flex flex-row items-center justify-center">
      <form
        onSubmit={() => registerUser}
        className="flex flex-col gap-6 p-14 rounded-3xl bg-card shadow-xl shadow-primary hover:shadow-2xl focus-within:shadow-2xl transition-all duration-300"
      >
        <Heading2 text="Register Form" />
        <fieldset className="flex flex-row gap-4 items-center justify-around">
          <Input
            name="firstname"
            type="text"
            value={user.firstname}
            onChange={updateUser}
            placeholder="Enter first name"
            required
          />

          <Input
            name="lastname"
            type="text"
            value={user.lastname}
            onChange={updateUser}
            placeholder="Enter your last name"
            required
          />
        </fieldset>

        <Input
          name="username"
          type="text"
          value={user.username}
          onChange={updateUser}
          placeholder="Enter your username"
          required
        />

        <Input
          name="password"
          type="password"
          value={user.password}
          onChange={updateUser}
          placeholder="Enter your password"
          required
        />

        <Input
          name="confirmPassword"
          type="password"
          value={user.confirmPassword}
          onChange={updateUser}
          placeholder="Re - Enter your password"
          required
        />

        <PrimaryButton className="self-center" text="Register" type="submit" />
      </form>
    </div>
  );
};

export default RegisterPage;
