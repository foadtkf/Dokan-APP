import "../styles/globals.css";
import Footer from "./shared/footer";
import Navbar from "./shared/navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
