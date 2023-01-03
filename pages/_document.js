import Document, { Html, Head, Main, NextScript } from "next/document";

// If needed, but f.i. index.js <Head> is enough to modify title or meta
class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
