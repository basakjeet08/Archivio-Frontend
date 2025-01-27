import { useState } from "react";

function useLogin() {
  // Data Structure
  const [user, setUser] = useState({
    username: "",
    password: "",
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

  // Logging the user
  const loginUser = (event) => {
    event.preventDefault();
    console.log(user);
  };

  return { user, updateUser, loginUser };
}

export default useLogin;
