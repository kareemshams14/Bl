import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" suppressHydrationWarning>
        <Head />
        <body suppressHydrationWarning>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;