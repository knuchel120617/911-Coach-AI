export const register = async (email, password, name) => {
  try {
    console.log("Login data:", { email, name, password }); // Check the data being sent
    const response = await fetch("https://medihacks-ka2dwt1hz-marikas-projects-22112c00.vercel.app/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, name }),
    });

    console.log("Response:", response); // Log the response from the server

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data; // Return the response JSON data (e.g., user data or tokens)
  } catch (error) {
    console.error("Error during login:", error);
    throw error; // Rethrow the error for handling in the component
  }
};

export const login = async (email, password, name) => {
  try {
    console.log("Login data:", { email, name, password }); // Check the data being sent
    const response = await fetch("https://medihacks-ka2dwt1hz-marikas-projects-22112c00.vercel.app/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    console.log("Response:", response); // Log the response from the server

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data; // Return the response JSON data (e.g., user data or tokens)
  } catch (error) {
    console.error("Error during login:", error);
    throw error; // Rethrow the error for handling in the component
  }
};
