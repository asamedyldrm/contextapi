import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "./context/task";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Task Project",
  description: "Task Project by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {<Provider>{children}</Provider>}
      </body>
    </html>
  );
}
