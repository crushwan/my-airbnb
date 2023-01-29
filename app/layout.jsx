import Header from "components/Header";
import "./globals.css";
import Banner from "components/Banner";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        <Banner />
        {children}
      </body>
    </html>
  );
}
