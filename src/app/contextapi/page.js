"use client";

import AuthContext from "./auth-context.js";
import Auth from "./auth.js";
import { useState } from "react";

export default function Home() {
  const [authStatus, setAuthStatus] = useState(false)
  const loginAuth = () => {
    setAuthStatus(true)
    console.log(authStatus)
  };

  return (
    <AuthContext.Provider value={{ status: authStatus, login: loginAuth }}>
      <Auth />
    </AuthContext.Provider>
  );
}

//Context'in geçerli olduğu yerler neresiyse Provider'ın içine yazıyoruz.
