import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Navbar from "../components/nav/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap");
  }, []);
  return (
    <div className="loki">
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </div>
  );
}

export default MyApp;
