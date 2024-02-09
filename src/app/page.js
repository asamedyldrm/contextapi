"use client";

import AuthContext from "./context/auth-context.js";
import Auth from "./auth.js";

export default function Home() {
  const loginAuth = () => {};

  return (
    <AuthContext.Provider value={{ status: false, login: loginAuth }}>
      <Auth />
    </AuthContext.Provider>
  );
}

//Context'in geçerli olduğu yerler neresiyse Provider'ın içine yazıyoruz.
