import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "./registry";
import Navbar from "@/components/navbar/navbar";
import SideBar from "@/components/sidebar/SideBar";
import _fav from "../../public/logos/fav.png"

//Fonts
const inter = Inter({ subsets: ["latin"] });
//Providers
import Providers from "./Providers";

export const metadata = {
  title: "1337Hub",
  description: "1337Hub Web app that provid essential utilities for 1337 coding school peers.",
  icons: {
    icon: "/hub.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <StyledComponentsRegistry>
        <body className={inter.className}>
          <Providers>
            <SideBar/>
            <Navbar />
            {children}
          </Providers>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
