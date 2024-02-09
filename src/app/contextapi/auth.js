import { useContext } from "react";
import authContext from "./auth-context";

export default function Auth() {
  // JS'deki kısayolu bu şekilde:
  const { status, login } = useContext(authContext);
  console.log(status);
  //   const auth = useContext(authContext);
  //   console.log(auth.status);

  return (
    <div>
      <h1>Giriş Yapıldı mı?</h1>

      {status ? <p>Giriş Yapıldı!</p> : <p>Giriş Yapılmadı.</p>}

      <button onClick={login}>Giriş Yap.</button>
    </div>
  );
}
