import { useState } from "react";

function useRegister() {
  // Data Structure
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmPassword: "",
    agreeStatus: false,
  });

  // Updating the data structure
  const updateUser = (event) => {
    const name = event.target.name;
    const value =
      name === "agreeStatus" ? event.target.checked : event.target.value;

    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // Registering the user
  const registerUser = (event) => {
    event.preventDefault();
    console.log(user);
  };

  return { user, updateUser, registerUser };
}

export default useRegister;
