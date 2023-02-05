import "./globals.css";
import Footer from "components/Footer";
import Providers from "./Providers";

// import Router from "next/router";
// import ProgressBar from "@badrap/bar-of-progress";
// const progress = new ProgressBar({
//   size: 8,
//   color: "#5f5ff5",
//   className: "z-50",
//   delay: 100,
// });
// Router.events.on("routeChangeStart", progress.start);
// Router.events.on("routeChangeComplete", progress.finish);
// Router.events.on("routeChangeError", progress.finish);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-white dark:bg-[#181818] transition-all duration-700">
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
