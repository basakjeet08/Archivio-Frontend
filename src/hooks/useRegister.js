import { useState } from "react";

function useRegister() {
  // Data Structure
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  // Updating the data structure
  const updateUser = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // Registering the user
  const registerUser = (event) => {};

  return { user, updateUser, registerUser };
}

export default useRegister;
