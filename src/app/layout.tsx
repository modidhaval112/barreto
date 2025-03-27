import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import "./globals.css";

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <Header />
        <Home />
        <Footer />
      </body>
    </html>
  );
}
