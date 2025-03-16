import "./globals.css";
import Navbar from "@/components/navigation";
import { Footer } from "@/components/footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={""}
      >
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
