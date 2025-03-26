import Header from "@/components/Header";
import Home from "@/components/Home";
import "./globals.css";

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="main-content">
          <Home />
        </main>
      </body>
    </html>
  );
}
