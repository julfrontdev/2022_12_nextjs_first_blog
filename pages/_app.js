import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    // <div style={{ backgroundColor: "white" }}>
    <Component {...pageProps} />
  );
  // </div>
  // );
}
