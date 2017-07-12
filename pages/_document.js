import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';
import NavigationBar from '../components/NavigationBar';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();
    return { html, head, errorHtml, chunks, styles };
  }

  render() {
    return (
      <html lang="en" >
        <Head>
          <title>AK1103DEV</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="shortcut icon" href="https://avatars0.githubusercontent.com/u/8772991?v=3&s=460" />
        </Head>
        <body className="custom_class">
          <NavigationBar />
          <Main />
          <NextScript />
        </body>
        <style global jsx>{`
          .content {
            margin-top: 80px;
          }
        `}</style>
      </html>
    );
  }
}
