import { useContext } from "react";
import authContext from "./context/auth-context";

export default function Auth() {
  // JS'deki kısayolu bu şekilde:
  //   const { status } = useContext(authContext);
  //   console.log(status);
  const auth = useContext(authContext);
  console.log(auth.status);

  return <div></div>;
}
