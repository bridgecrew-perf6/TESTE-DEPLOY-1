import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [userToken, setUserToken] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token")?.replaceAll('"', "");
    if (token) {
      const url = `${process.env.REACT_APP_API_URL}/validateToken`;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      axios
        .post(url, {}, config)
        .then(() => setUserToken(token))
        .catch(() => localStorage.removeItem("token"));
    }
  }, []);

  const logUserIn = (token) => {
    localStorage.setItem("token", JSON.stringify(token));
    setUserToken(token);
  };

  const logUserOut = () => {
    localStorage.removeItem("token");
    setUserToken("");
    window.location.reload();
  };

  return (
    <UserContext.Provider value={{ userToken, logUserIn, logUserOut }}>
      {children}
    </UserContext.Provider>
  );
}
